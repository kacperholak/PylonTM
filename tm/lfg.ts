async function lfgPost(
  message: discord.Message,
  playerCount: number,
  expansion: string,
  custom: string
) {
  const richEmbed = new discord.Embed();
  const member = message.member as discord.GuildMember;
  const author = message.author;

  // Set title and color
  richEmbed.setTitle(
    `${member.nick ?? author.username} is looking for a game now!`
  );

  const color = RH.getColorByRole(member.roles);
  richEmbed.setColor(color);

  const maxPlayersWanted = LFG.getMaxPlayersCount(playerCount);
  const playerString = LFG.getPlayerString(playerCount);

  richEmbed.addField({
    name: '# player',
    value: playerString,
    inline: true,
  });

  // Setting up expansion icons
  expansion = expansion === null ? ' ' : expansion.toLowerCase();
  const expansionIcons = LFG.getExpansionIcons(expansion);

  richEmbed.addField({
    name: 'Expansions',
    value: expansionIcons,
    inline: true,
  });

  // Extract comment from custom
  let comment = '';
  const myRegexp = /"([^"]*)"/gi;
  const match = myRegexp.exec(custom);

  if (match != null) {
    comment = match[1];
    custom = custom.replace(match[0], '');
  }

  custom = custom.toLowerCase();

  const draftType = LFG.getDraftType(custom);
  const wgt = LFG.getWgtOption(custom);
  const realVP = LFG.getVpOption(custom);
  const milestonesAwards = LFG.getMilestonesAwardsOption(custom);

  richEmbed.addField({
    name: 'WGT',
    value: wgt,
    inline: true,
  });
  richEmbed.addField({
    name: 'Draft Type',
    value: draftType,
    inline: true,
  });
  richEmbed.addField({
    name: 'Milestones & awards',
    value: milestonesAwards,
    inline: true,
  });
  richEmbed.addField({
    name: 'Real-time VP',
    value: realVP,
    inline: true,
  });

  // Only add fast field if specified
  if (custom.includes('fast') && !custom.includes('-fast')) {
    richEmbed.addField({
      name: 'Fast Mode',
      value: C.yesEmoji,
      inline: true,
    });
  }

  // Add ban if specified
  let banList = '';
  if (custom.includes('-pluna')) banList += 'Point Luna\n';
  if (custom.includes('-pluto')) banList += 'Pluto\n';
  if (banList != '') {
    richEmbed.addField({
      name: 'Blacklist',
      value: banList,
      inline: true,
    });
  }

  richEmbed.addField({
    name: 'Sign up',
    value: RH.roleSquare(member.roles) + (member.nick ?? author.username),
    inline: true,
  });

  if (comment != '') {
    richEmbed.addField({
      name: 'Comment',
      value: comment,
      inline: false,
    });
  }

  let playerWantFlexible = false;
  if ([23, 34, 0, 1].includes(playerCount)) playerWantFlexible = true;
  const minPlayersForFlexibleCount = playerCount === 23 ? 2 : 3;

  const footerText = getFooterText(
    playerWantFlexible,
    minPlayersForFlexibleCount
  );
  richEmbed.setFooter({ text: footerText });
  richEmbed.setTimestamp(new Date().toISOString());

  const lfgEmbedMessage = await message.reply({
    embed: richEmbed,
  });

  await lfgEmbedMessage.addReaction(C.yesReaction);
  await lfgEmbedMessage.addReaction(C.noReaction);
  if (playerWantFlexible) await lfgEmbedMessage.addReaction(':rocket:');

  await lfgCheckKV.put(lfgEmbedMessage.id, {
    channel: lfgEmbedMessage.channelId,
    time: Date.now(),
    playerWant: maxPlayersWanted,
    playerHave: 1,
    flexible: playerWantFlexible,
    expansions: expansionIcons,
    custom: custom,
    signers: [author.id],
  });

  return lfgEmbedMessage;
}