import {
    createCommand,
    createEmbed,
    createErrorEmbed,
    getString,
  } from '../global';
  
  const KVNamespace = pylon.KVNamespace;
  
  const mapKV = new KVNamespace('map_data_bo3');
  
  createCommand({
    name: 'bo3',
    category: 'tm',
    description: getString('cmd_tm_bo3'),
    longDescription: getString('cmd_tm_bo3_long'),
    run: function (message: discord.GuildMemberMessage, input: string[] | null) {
      mapCommand(message, input);
    },
  });
  
  async function mapCommand(
    message: discord.GuildMemberMessage,
    input: string[] | null
  ) {
    const users = input || [];
    const guild = await message.getGuild();
    const validatedUsers = await validateUsers(users, guild);
    console.log(validatedUsers);
  
    if (validatedUsers.length !== 2) {
      createErrorEmbed(message, getString('map_list_input_error'));
      return;
    }
  
    const userIds = validatedUsers
      .map((user) => {
        if (typeof user === 'string') {
          // Remove <@...> mentions if present
          return user.replace(/<@!?(\d+)>/g, '$1');
        } else {
          return user.user.id;
        }
      })
      .sort()
      .join('_');
  
    // Check if a 'new' parameter is included
    const isNewRequest = input && input.includes('new');
  
    let mapList: string[] | undefined;
  
    if (!isNewRequest) {
      // Check if the data is already in the KVS
      mapList = await mapKV.get<string[]>(userIds);
    }
  
    if (!mapList) {
      // Generate a random map list if not found in KVS
      mapList = shuffle(['Tharsis', 'Hellas', 'Elysium']);
      await mapKV.put(userIds, mapList);
    }
  
    const embed = createEmbed();
  
    embed.setDescription(
      getString('map_list_title') + ` <@${userIds.replace(/_/g, '> <@')}>`
    );
  
    embed.setColor(0xeb984e);
    mapList.forEach((map, index) => {
      embed.addField({
        name: `#${index + 1}`,
        value: map,
        inline: true,
      });
    });
    embed.setFooter({ text: getString('map_list_footer') });
    message.reply(embed);
  }
  
  function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  async function validateUsers(users: string[], guild: discord.Guild) {
    const validatedUsers: (string | discord.GuildMember)[] = [];
  
    for (const user of users) {
      const mentionMatch = user.match(/<@!?(\d+)>/);
      if (mentionMatch) {
        // Handle mentions as strings and store the mention itself
        validatedUsers.push(user);
      } else {
        const lowerCaseInput = user.toLowerCase();
        const members = guild.iterMembers();
  
        for await (const member of members) {
          const memberNick = member.nick ? member.nick.toLowerCase() : '';
          if (memberNick && lowerCaseInput.includes(memberNick)) {
            validatedUsers.push(member);
            break; // Found a match, no need to continue searching
          }
        }
      }
    }
  
    return validatedUsers;
  }
  