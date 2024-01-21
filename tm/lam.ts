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
      lam: 'https://i.imgur.com/6YKJtsD.png',
      milestones: 'https://i.imgur.com/ZgtPeqw.png',
      milestonesEN: 'https://i.imgur.com/tTRLRrJ.png',
      awards: 'https://i.imgur.com/FPXnwqh.png',
      awardsEN: 'https://i.imgur.com/JNATLE2.png',
    },
    {
      name: 'Hellas',
      color: 0x0a8fc0,
      lam: 'https://i.imgur.com/cIq4boL.png',
      milestones: 'https://i.imgur.com/kzF9Jqk.png',
      milestonesEN: 'https://i.imgur.com/wyCElKb.png',
      awards: 'https://i.imgur.com/jmfN22m.png',
      awardsEN: 'https://i.imgur.com/zpjs7H7.png',
    },
    {
      name: 'Elysium',
      color: 0x70b679,
      lam: 'https://i.imgur.com/HaPKF0g.png',
      milestones: 'https://i.imgur.com/WjktTw6.png',
      milestonesEN: 'https://i.imgur.com/y6I8SYp.png',
      awards: 'https://i.imgur.com/3dQUsZw.png',
      awardsEN: 'https://i.imgur.com/HY0Wpma.png',
    },
  ];
  
  createCommand({
    name: 'ma',
    aliases: ['lam', 'am'],
    category: 'tm',
    description: getString('cmd_tm_lam'),
    longDescription: getString('cmd_tm_lam_long'),
    args: [{ name: '[map]', description: getString('cmd_lam_arg_map') }],
    run: function (message: discord.GuildMemberMessage, input: string[] | null) {
      lamCommand(message, input);
    },
  });
  
  async function lamCommand(
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
        embed.setDescription(
          getString('cmd_lam_description').replaceAll('%1', map)
        );
        embed.setImage({ url: foundMap?.lam! });
        embed.setColor(foundMap?.color!);
      } else {
        createErrorEmbed(message, getString('lam_error'));
      }
    } else {
      createErrorEmbed(message, getString('lam_error'));
    }
    await message.reply(embed);
  }
  
  createCommand({
    name: 'tytuły',
    aliases: ['tytuly'],
    category: 'tm',
    showInHelp: false,
    run: function (message: discord.GuildMemberMessage, input: string[] | null) {
      milestonesCommand(message, input);
    },
  });
  
  async function milestonesCommand(
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
        embed.setDescription(
          getString('cmd_lam_description_milestones').replaceAll('%1', map)
        );
        embed.setImage({ url: foundMap?.milestones! });
        embed.setColor(foundMap?.color!);
      } else {
        createErrorEmbed(message, getString('lam_error'));
      }
    } else {
      createErrorEmbed(message, getString('lam_error'));
    }
    await message.reply(embed);
  }
  
  createCommand({
    name: 'milestones',
    category: 'tm',
    showInHelp: false,
    run: function (message: discord.GuildMemberMessage, input: string[] | null) {
      milestonesENCommand(message, input);
    },
  });
  
  async function milestonesENCommand(
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
        embed.setDescription(
          getString('cmd_lam_description_milestones_EN').replaceAll('%1', map)
        );
        embed.setImage({ url: foundMap?.milestonesEN! });
        embed.setColor(foundMap?.color!);
      } else {
        createErrorEmbed(message, getString('lam_error'));
      }
    } else {
      createErrorEmbed(message, getString('lam_error'));
    }
    await message.reply(embed);
  }
  
  createCommand({
    name: 'nagrody',
    category: 'tm',
    showInHelp: false,
    run: function (message: discord.GuildMemberMessage, input: string[] | null) {
      awardsCommand(message, input);
    },
  });
  
  async function awardsCommand(
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
        embed.setDescription(
          getString('cmd_lam_description_awards').replaceAll('%1', map)
        );
        embed.setImage({ url: foundMap?.awards! });
        embed.setColor(foundMap?.color!);
      } else {
        createErrorEmbed(message, getString('lam_error'));
      }
    } else {
      createErrorEmbed(message, getString('lam_error'));
    }
    await message.reply(embed);
  }
  
  createCommand({
    name: 'awards',
    category: 'tm',
    showInHelp: false,
    run: function (message: discord.GuildMemberMessage, input: string[] | null) {
      awardsENCommand(message, input);
    },
  });
  
  async function awardsENCommand(
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
        embed.setDescription(
          getString('cmd_lam_description_awards_EN').replaceAll('%1', map)
        );
        embed.setImage({ url: foundMap?.awardsEN! });
        embed.setColor(foundMap?.color!);
      } else {
        createErrorEmbed(message, getString('lam_error'));
      }
    } else {
      createErrorEmbed(message, getString('lam_error'));
    }
    await message.reply(embed);
  }
  