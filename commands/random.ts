import { createCommand, getString } from '../global';

createCommand({
  name: 'powiedzokosmoskim',
  showinhelp: false,
  aliases: ['kosmoski'],
  run: function (message: discord.GuildMemberMessage) {
    kosmoskiCommand(message);
  },
});

async function kosmoskiCommand(message: discord.GuildMemberMessage) {
  let reply = 'Kosmoski? Nie znam. Nic mi nie wiadomo.';
  await message.reply(reply);
}

createCommand({
  name: 'reminder',
  showinhelp: false,
  devOnly: true,
  run: function (message: discord.GuildMemberMessage) {
    reminderCommand(message);
  },
});

async function reminderCommand(message: discord.GuildMemberMessage) {
  let reply = getString('new_generation_reminder');
  await message.reply(reply);
}

// const inviteRegex =
//   /(discord\.(gg|io|me|li)|discord(app)?\.com\/invite)(\/.+)/i;

// // const bannedWordsList: Array<string | RegExp> = [
// //   '!bukonasparingach',
// //   '!reminder',
// //   /Word3/g,
// //   /some (more|less) usefulExamples\!\!/gi,
// //   inviteRegex,
// // ];

// // discord.on('MESSAGE_CREATE', async (msg) => {
// //   for (const i of bannedWordsList) {
// //     if (typeof i === 'string') {
// //       if (msg.content === i) await msg.delete();
// //     } else {
// //       if (i.test(msg.content)) await msg.delete();
// //     }
// //   }
// // });
