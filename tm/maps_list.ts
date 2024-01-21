/* Random map
 * This command chooses a random map
 */

import {
    createCommand,
    createEmbed,
    createErrorEmbed,
    getString,
  } from '../global';
  
  createCommand({
    name: 'mapy',
    category: 'tm',
    aliases: ['lista'],
    description: getString('cmd_tm_maps'),
    longDescription: getString('cmd_tm_maps_long'),
    run: function (message: discord.GuildMemberMessage, input: string[] | null) {
      mapCommand(message, input);
    },
  });
  
  async function mapCommand(
    message: discord.GuildMemberMessage,
    input: string[] | null
  ) {
    var maps = ['Tharsis', 'Hellas', 'Elysium'];
    const mapList = (maps = maps.sort(() => Math.random() - 0.5));
  
    if (mapList != null) {
      // no error when drawing the list
      const willeyID = '730721901474873355';
      const embed = createEmbed();
      // if (message.member.nick == 'Willey') {
      //   embed.setColor(0xeb984e);
      //   embed.setDescription(getString('map_list_description'));
      //   embed.addField({
      //     name: '#1',
      //     value: 'Elysium',
      //     inline: true,
      //   });
      //   embed.addField({
      //     name: '#2',
      //     value: 'Elysium',
      //     inline: true,
      //   });
      //   embed.addField({
      //     name: '#3',
      //     value: 'Elysium',
      //     inline: true,
      //   });
      //   embed.setFooter({ text: getString('map_list_footer') });
      //   await message.reply(embed);
      // } else
      if (input == null || input.length < 2) {
        createErrorEmbed(message, getString('map_list_input_error'));
      } else if (input != null) {
        let users = input.filter((n) => n);
        if (users.length != 2) {
          createErrorEmbed(message, getString('map_list_input_error'));
        } else {
          let reply =
            getString('map_list_title') + [users[0], users[1]].join(', ');
          await message.reply(reply);
          embed.setColor(0xeb984e);
          embed.setDescription(getString('map_list_description'));
          embed.addField({
            name: '#1',
            value: mapList[0],
            inline: true,
          });
          embed.addField({
            name: '#2',
            value: mapList[1],
            inline: true,
          });
          embed.addField({
            name: '#3',
            value: mapList[2],
            inline: true,
          });
          embed.setFooter({ text: getString('map_list_footer') });
          message.reply(embed);
        }
        console.log(users);
        console.log(input);
      }
    } else {
      // Return an error.
      createErrorEmbed(message, getString('map_list_error'));
    }
  }
  