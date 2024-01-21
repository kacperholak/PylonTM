/* Card Command
 * This command returns a picture of a card the user is looking for.
 */

import {
    createCommand,
    createEmbed,
    createErrorEmbed,
    getString,
  } from '../global';
  import { allCardsEN } from './cardsListEN';
  
  createCommand({
    name: 'card',
    category: 'tm',
    description: getString('cmd_card'),
    longDescription: getString('cmd_card_long'),
    args: [
      {
        name: '[name]',
        description: getString('cmd_card_arg_name'),
      },
    ],
    run: function (message: discord.GuildMemberMessage, input: string[] | null) {
      cardCommand(message, input);
    },
  });
  
  async function cardCommand(
    message: discord.GuildMemberMessage,
    input: string[] | null
  ) {
    let embed = createEmbed();
  
    if (input != null && input.toString().length > 2) {
      let card = input.toString().toLowerCase().replaceAll(',', '_');
      console.log(card);
      const result = allCardsEN.some((i) => {
        return i.ref.toLowerCase() == card.toLowerCase();
      });
      const foundCard = allCardsEN.find(
        (i) => i.ref.toLowerCase() === card.toLowerCase()
      );
      const matchedCard = allCardsEN.filter((i) =>
        i.ref.includes(
          input[0]
            .toLowerCase()
            .replaceAll(/[^a-zA-Z ]/g, '')
            .substring(0, 5)
        )
      );
      console.log(matchedCard);
  
      if (result) {
        embed.setImage({ url: foundCard?.link });
      } else if (
        !result &&
        matchedCard[0] != null &&
        matchedCard.length > 1 &&
        matchedCard.length < 100
      ) {
        let arrayLength = matchedCard.length % 10;
        if (arrayLength > 1 && arrayLength <= 4) {
          let reply = getString('card_matched_number_short').replaceAll(
            '%1',
            matchedCard.length.toString()
          );
          await message.reply(reply);
        } else {
          let reply = getString('card_matched_number_long').replaceAll(
            '%1',
            matchedCard.length.toString()
          );
          await message.reply(reply);
        }
        embed.setTitle(getString('card_matched_desc'));
        embed.setImage({ url: matchedCard[0].link });
        await message.reply(embed);
        embed.setTitle(getString('card_matched_second_desc'));
        embed.setImage({ url: matchedCard[1].link });
      } else if (!result && matchedCard[0] != null && matchedCard.length == 1) {
        embed.setTitle(getString('card_matched_desc'));
        embed.setImage({ url: matchedCard[0].link });
      } else {
        createErrorEmbed(message, getString('card_error'));
      }
    } else {
      createErrorEmbed(message, getString('card_error_short'));
    }
    await message.reply(embed);
  }
  