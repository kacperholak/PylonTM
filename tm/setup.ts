/* Setup
 * This creates a list of setup
 */

import { createCommand, getString } from '../global';

createCommand({
  name: 'setup',
  category: 'tm',
  aliases: [],

  description: getString('cmd_tm_setup'),
  longDescription: getString('cmd_tm_setup_long'),
  run: function (message: discord.GuildMemberMessage) {
    setupCommand(message);
  },
});

async function setupCommand(message: discord.GuildMemberMessage) {
  // setup emojis
  // default emojis
  const unknown = '❔';
  const yes = '✅';
  const no = '❌';

  // custom emojis
  const choiceYes = '<:choice_yes:1037754985531842612>';
  const choiceNo = '<:choice_no:1037755344388096141>';
  const mars = '<:mars:806931153881006101>';
  const marsReaction = 'mars:806931153881006101';

  const steam = '<:steam:1040010026846277725>';
  const steamReaction = 'steam:1040010026846277725';

  const card = '<:karta:1025437302677323906>';
  const cardReaction = 'karta:1025437302677323906';

  // custom emojis expansions
  const prelude = '<:exp_prelude:1037840599618945074>';
  const preludeReaction = 'exp_prelude:1037840599618945074';

  const venus = '<:exp_venus:1037840718380662904>';
  const venusReaction = 'exp_venus:1037840718380662904';

  const colonies = '<:exp_colony:1037840633437630495>';
  const coloniesReaction = 'exp_colony:1037840633437630495';

  const turmoil = '<:exp_turmoil:1037840692229185616>';
  const turmoilReaction = 'exp_turmoil:1037840692229185616';

  const promo = '<:exp_promo:1037840662881632256>';
  const promoReaction = 'exp_promo:1037840662881632256';

  // choose platform for game
  const platformMessage = await message.reply(
    '(1) Wybierz platformę do gry [Steam - ' +
      steam +
      '], [Heroku - ' +
      mars +
      ']'
  );
  await platformMessage.addReaction(steamReaction);
  await platformMessage.addReaction(marsReaction);

  // get the reaction to the message
  const platformReactionSteam = platformMessage.iterReactions(steamReaction);
  console.log(platformReactionSteam);

  // choose player colour
  const colorMessage = await message.reply('(2) Wybierz kolor gracza');
  await colorMessage.addReaction('🔴');
  await colorMessage.addReaction('🟢');
  await colorMessage.addReaction('🔵');
  await colorMessage.addReaction('🟡');
  await colorMessage.addReaction('⚫');
  await colorMessage.addReaction('🟣');

  // choose expansions
  const expansionMessage = await message.reply('(3) Wybierz dodatki');
  await expansionMessage.addReaction(preludeReaction);
  await expansionMessage.addReaction(venusReaction);
  await expansionMessage.addReaction(coloniesReaction);
  await expansionMessage.addReaction(turmoilReaction);
  await expansionMessage.addReaction(promoReaction);

  // corporation number
  const corporationMessage = await message.reply('(4) Ile korporacji?');
  await corporationMessage.addReaction('1️⃣');
  await corporationMessage.addReaction('2️⃣');
  await corporationMessage.addReaction('3️⃣');
  await corporationMessage.addReaction('4️⃣');

  // draft
  const draftMessage = await message.reply(
    '(5) Gra z draftem? [✅ - tak], [' + card + ' - tak + initial], [❌ - nie]'
  );
  await draftMessage.addReaction(yes);
  await draftMessage.addReaction(cardReaction);
  await draftMessage.addReaction(no);

  // wgt
  const wgtMessage = await message.reply('(6) Gra z rządem światowym?');
  await wgtMessage.addReaction(yes);
  await wgtMessage.addReaction(no);

  // Randomize milestones and awards
  const milestonesMessage = await message.reply('(7) Losowe tytuły i nagrody?');
  await milestonesMessage.addReaction(yes);
  await milestonesMessage.addReaction(no);

  // Randomize board tiles
  const boardMessage = await message.reply(
    '(8) Losowe rozłożenie pól na planszy?'
  );
  await boardMessage.addReaction(yes);
  await boardMessage.addReaction(no);

  // Show real-time VP?
  const vpMessage = await message.reply('(9) VP w czasie rzeczywistym?');
  await vpMessage.addReaction(yes);
  await vpMessage.addReaction(no);

  // Fast mode (no end turn option, must take two actions)?
  const fastMessage = await message.reply('(10) Fast mode?');
  await fastMessage.addReaction(yes);
  await fastMessage.addReaction(no);

  // (10) Escape Velocity? [OFF - 🚶], [50 - 🏇], [35 - 🚗]
}
