/* Nice words
 * A simple command that returns a randomised answer from Central AI.
 * For use in conversations to get a nice complimentary.
 */

import { createCommand, createEmbed } from '../global';

createCommand({
  name: 'dzban',
  showinhelp: false,
  run: function (message: discord.GuildMemberMessage) {
    dzbanCommand(message);
  },
});

async function dzbanCommand(message: discord.GuildMemberMessage) {
  let embed = createEmbed();
  embed.setImage({ url: 'https://i.imgur.com/WfC6eCR.jpg' });
  await message.reply(embed);
}

createCommand({
  name: 'bukonasparingach',
  aliases: ['buko'],

  showinhelp: false,
  run: function (message: discord.GuildMemberMessage) {
    bukonasparingachCommand(message);
  },
});

async function bukonasparingachCommand(message: discord.GuildMemberMessage) {
  let reply = 'https://i.imgur.com/c93VMwW.png';
  await message.reply(reply);
}

createCommand({
  name: 'willeynasparingach',
  aliases: ['will'],

  showinhelp: false,
  run: function (message: discord.GuildMemberMessage) {
    willeynasparingachCommand(message);
  },
});

async function willeynasparingachCommand(message: discord.GuildMemberMessage) {
  let reply = 'https://i.imgur.com/6SJsdSZ.jpg';
  await message.reply(reply);
}
