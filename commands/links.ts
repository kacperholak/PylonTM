/* Link Commands
 * These commands are intended to be used to quickly recite important links without having to copy and paste them.
 * They can be used in response to other users asking for an easily available link.
 * Alternatively, they can be used to post images and GIFs to chat.
 */

import { createCommand, getString } from '../global';
import { DEV_CHANNEL } from '../config';

let links = [
  {
    name: 'heroku',
    link: 'https://terraforming-mars.herokuapp.com/new-game',
    description: getString('cmd_links_heroku'),
    longDescription: getString('cmd_links_heroku_long'),
  },
  {
    name: 'regulamin',
    link: 'https://docs.google.com/document/d/1cQephoFCzW6LZVSDUctOS-NR6DVNgT1sMMVzJ2NlFoo/edit?usp=sharing',
    description: getString('cmd_links_regulamin'),
    longDescription: getString('cmd_links_regulamin_long'),
  },
  {
    name: 'wyniki',
    aliases: ['wynik'],
    link: 'https://challonge.com/pl/opvjl1lj',
    description: getString('cmd_links_wyniki'),
    longDescription: getString('cmd_links_wyniki_long'),
  },
  {
    name: 'miniturniej',
    link: 'https://challonge.com/pl/cxdgliip',
    description: getString('cmd_links_wyniki'),
    longDescription: getString('cmd_links_wyniki_long'),
  },
  {
    name: 'karty',
    link: 'https://ssimeonoff.github.io/cards-list',
    description: getString('cmd_links_cards'),
    longDescription: getString('cmd_links_cards_long'),
  },
  {
    name: 'zapisy',
    link: 'Zapisy na obecnie trwający turniej nie są możliwe.\nSzykuj się na kolejny turniej 🚀',
    description: getString('cmd_links_zapisy'),
    longDescription: getString('cmd_links_zapisy_long'),
  },
  {
    name: 'bugi',
    link: 'https://discord.com/channels/730782773312356432/1041790736741441576/1042583708814807080',
    description: getString('cmd_links_bugs'),
    longDescription: getString('cmd_links_bugs_long'),
  },
];

links.forEach((link: any) => {
  if (link.category == null) {
    link.category = 'links';
  }
  createCommand({
    name: link.name,
    category: link.category,
    aliases: link.aliases,
    description: link.description,
    longDescription: link.longDescription,
    devOnly: link.devOnly,
    run: function (
      message: discord.GuildMemberMessage,
      input: string[] | null
    ) {
      if (!link.devOnly || message.channelId == DEV_CHANNEL) {
        message.reply(link.link);
      }
    },
  });
});
