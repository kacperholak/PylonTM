/* Support Centre
 * A command that provides the user with the bot developer's contact information, and more info on the bot.
 */

import { createCommand, createEmbed, getString } from '../global';

createCommand({
  name: 'support',
  showinhelp: false,
  aliases: ['willey'],
  run: function (message: discord.GuildMemberMessage, input: string[] | null) {
    supportCommand(message);
  },
});

async function supportCommand(message: discord.GuildMemberMessage) {
  let embed = createEmbed();
  embed.setColor(0xff4d00);
  embed.setTitle(getString('support_title'));
  embed.setDescription(getString('support_desc'));
  let fields = [
    {
      name: getString('support_pylon'),
      value: getString('support_pylon_link'),
    },
  ];
  // Attempt to get Jack5's account information.
  discord
    .getUser('730721901474873355')
    .then((user) => {
      if (user != null) {
        // Jack5 was found, show his profile icon and mention him as the first field.
        embed.setThumbnail({
          url: user.getAvatarUrl(),
        });
        fields.unshift({
          name: getString('support_developer'),
          value: user.toMention(),
        });
        embed.setFooter({ text: getString('support_footer') });
      }
    })
    .finally(async () => {
      // Regardless if Jack5 was found or not, send the embed.
      embed.setFields(fields);
      await message.reply(embed);
    });
}
