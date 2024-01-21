/* List of milestones and awards
 * This command lists milestones and awards for all or a chosen map
 */

import {
    createCommand,
    createEmbed,
    createErrorEmbed,
    getString,
  } from '../global';
  
  const allMaps = [
    {
      name: 'Tharsis',
      color: 0xff0000,
      map: 'https://i.imgur.com/dv5eelW.png',
    },
    {
      name: 'Hellas',
      color: 0x0a8fc0,
      map: 'https://i.imgur.com/L9dneuf.png',
    },
    {
      name: 'Elysium',
      color: 0x70b679,
      map: 'https://i.imgur.com/d8MumLT.png',
    },
  ];
  
  createCommand({
    name: 'mapa',
    category: 'tm',
    description: getString('cmd_tm_mapa'),
    longDescription: getString('cmd_tm_mapa_long'),
    args: [{ name: '[map]', description: getString('cmd_mapa_arg_map') }],
    run: function (message: discord.GuildMemberMessage, input: string[] | null) {
      mapCommand(message, input);
    },
  });
  
  async function mapCommand(
    message: discord.GuildMemberMessage,
    input: string[] | null
  ) {
    let embed = createEmbed();
  
    if (input != null) {
      let map =
        input[0].charAt(0).toUpperCase() + input[0].slice(1).toLowerCase();
      const result = allMaps.some((i) => {
        return i.name.toLowerCase() === map.toLowerCase();
      });
      const foundMap = allMaps.find(
        (i) => i.name.toLowerCase() === map.toLowerCase()
      );
  
      if (result) {
        embed.setImage({ url: foundMap?.map! });
        embed.setColor(foundMap?.color!);
      } else {
        createErrorEmbed(message, getString('mapa_error'));
      }
    } else {
      createErrorEmbed(message, getString('mapa_error'));
    }
    await message.reply(embed);
  }
  