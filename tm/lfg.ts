/* Looking for game
 * This command helps players to find a player
 */

import {
    createCommand,
    createEmbed,
    createErrorEmbed,
    getString,
  } from '../global';
  
  createCommand({
    name: 'lfg',
    // category: 'tm',
    // aliases: ['look', 'game'],
    // description: getString('cmd_tm_lfg'),
    // longDescription: getString('cmd_tm_lfg_long'),
    // args: [
    //   { name: '[players]', description: getString('cmd_lfg_arg_players') },
    //   {
    //     name: '[expansions]',
    //     description: getString('cmd_lfg_arg_expansions'),
    //   },
    //   { name: '[wgt]', description: getString('cmd_lfg_arg_wgt') },
    //   { name: '[draft]', description: getString('cmd_lfg_arg_draft') },
    //   {
    //     name: '[milestones]',
    //     description: getString('cmd_lfg_arg_milestones'),
    //   },
    //   { name: '[vp]', description: getString('cmd_lfg_arg_vp') },
    // ],
    run: function (message: discord.GuildMemberMessage, input: any[] | null) {
      lfgCommand(message, input);
    },
  });
  
  async function lfgCommand(
    message: discord.GuildMemberMessage,
    input: any[] | null
  ) {
    {
      let players;
      let expansions;
      let wgt;
      let draft;
      let milestones;
      let vp;
  
      // default emojis
      const unknown = '❔';
      const yes = '✅';
      const no = '❌';
  
      //custom emojis
      const choiceYes = '<:choice_yes:1030105238142730270>';
      const choiceNo = '<:choice_no:1037844891344064512>';
  
      // custom emojis expansions
      const prelude = '<:exp_prelude:1025439486521397323>';
      const venus = '<:exp_venus:1037840457742422037>';
      const colonies = '<:exp_colony:1037840419070943346>';
      const turmoil = '<:exp_turmoil:1037840503506473041>';
      const promo = '<:exp_promo:1025439520138739843>';
  
      if (input != null) {
        // players
        if (input[0] < 6 && input[0] > 1) {
          players = input[0];
        } else if (input[0] == 23) {
          players = '2 lub 3';
        } else if (input[0] == 34) {
          players = '3 lub 4';
        } else if (input[0] == 45) {
          players = '4 lub 5';
        } else {
          players = unknown;
        }
        // expansions
        if (input[1] == 'pvcto' || input[1] == 'all') {
          expansions = [prelude, venus, colonies, turmoil, promo].join('');
        } else if (input[1] == 'po' || input[1] == 'op') {
          expansions = [prelude, promo].join('');
        } else {
          expansions = unknown;
        // wgt
        if (input[2] == 'wgt') {
          wgt = choiceYes;
        } else if (input[2] == '-wgt') {
          wgt = choiceNo;
        } else {
          wgt = unknown;
        }
        // draft
        if (input[3] == 'draft') {
          draft = choiceYes;
        } else if (input[3] == 'initial') {
          draft = [choiceYes, 'karty początkowe'].join(' + ');
        } else if (input[3] == '-draft') {
          draft = choiceNo;
        } else {
          draft = unknown;
        }
        // milestones
        if (input[4] == 'm') {
          milestones = 'Losowe';
        } else if (input[4] == '-m') {
          milestones = 'Standardowe';
        } else {
          milestones = unknown;
        }
        // vp
        if (input[5] == 'vp') {
          vp = choiceYes;
        } else if (input[5] == '-vp') {
          vp = choiceNo;
        } else {
          vp = unknown;
        }
      } else {
        players = unknown;
        expansions = unknown;
        wgt = unknown;
        draft = unknown;
        milestones = unknown;
        vp = unknown;
      }
  
      // get nick or username
      const nick = message.member.nick ?? message.author.username;
  
      // set the thumbnail
      const rocketThumbnail = 'https://i.imgur.com/BqlWDwg.png';
  
      // get a list of players signed up
      const listOfPlayersReacted = [nick];
      const listOfPlayers = listOfPlayersReacted.toString();
  
      // create an embedded reply
      const embed = createEmbed();
      embed.setTitle([nick, `szuka przeciwników do gry!`].join(' '));
      embed.setColor(0xeb984e);
      embed.setDescription(getString('lfg_description'));
      embed.setThumbnail({ url: rocketThumbnail });
      embed.addField({ name: 'Liczba graczy', value: players, inline: true });
      embed.addField({ name: 'Dodatki', value: expansions, inline: true });
      embed.addField({ name: 'Rząd światowy', value: wgt, inline: true });
      embed.addField({ name: 'Selekcja kart', value: draft, inline: true });
      embed.addField({
        name: 'Nagrody i tytuły',
        value: milestones,
        inline: true,
      });
      embed.addField({ name: 'Widoczne VP', value: vp, inline: true });
      embed.addField({
        name: 'Lista graczy',
        value: listOfPlayers,
        inline: true,
      });
  
      // send a reply
      const lfgReply = await message.reply(embed);
      await lfgReply.addReaction(yes).then(async () => {
        await lfgReply.addReaction(no).then(async () => {
          await lfgReply.addReaction('🚀');
        });
      });
  
      let reactants = lfgReply.iterReactions(
        discord.decor.Emojis.WHITE_CHECK_MARK
      );
      //This returns a list of the users who reacted with the emoji white check mark
  
      for await (let user of reactants) {
        listOfPlayersReacted.push(user.username);
      }
    }
  }
  