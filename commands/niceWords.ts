/* Nice words
 * A simple command that returns a randomised answer from Central AI.
 * For use in conversations to get a nice complimentary.
 */

import { createCommand, getString } from '../global';

createCommand({
  name: 'powiedzcosmilego',
  showinhelp: false,
  aliases: ['powiedzcośmiłego'],
  run: function (message: discord.GuildMemberMessage) {
    niceWordsCommand(message);
  },
});

async function niceWordsCommand(message: discord.GuildMemberMessage) {
  let reply = getString('nice_words_message').replaceAll(
    '%1',
    getString('nice_words_response')
  );
  await message.reply(reply);
}
