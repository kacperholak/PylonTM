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
    name: 'map',
    category: 'tm',
    restrictChannel: false,
    description: getString('cmd_tm_map'),
    longDescription: getString('cmd_tm_map_long'),
    run: function (message: discord.GuildMemberMessage, input: string[] | null) {
      mapCommand(message, input);
    },
  });
  
  async function mapCommand(
    message: discord.GuildMemberMessage,
    input: string | string[] | null
  ) {
    const allMaps = {
      Hellas: {
        name: 'Hellas',
        color: 0x0a8fc0,
      },
      Elysium: {
        name: 'Elysium',
        color: 0x70b679,
      },
      Tharsis: {
        name: 'Tharsis',
        color: 0xff0000,
      },
    };
  
    const maps = Object.values(allMaps);
  
    const randomMap = maps[Math.floor(Math.random() * maps.length)];
  
    if (input != null) {
      createErrorEmbed(message, getString('random_map_error'));
    } else if (randomMap != null) {
      // no error when drawing the map
      const embed = createEmbed();
      embed.setTitle(randomMap.name);
      embed.setColor(randomMap.color);
      embed.setDescription(getString('random_map_description'));
      message.reply(embed);
    } else {
      // The die has a zero or negative number of sides, return an error.
      createErrorEmbed(message, getString('random_map_error'));
    }
  }
  