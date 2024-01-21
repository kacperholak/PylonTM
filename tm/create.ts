/* Create game
 * A simple command - reference to Heroku bot
 */

import { createCommand, getString } from '../global';

createCommand({
  name: 'create',
  category: 'tm',
  aliases: [],
  description: getString('cmd_tm_create'),
  longDescription: getString('cmd_tm_create_long'),
  args: [
    { name: '[name]', description: getString('cmd_create_arg_name') },
    {
      name: '[colour]',
      description: getString('cmd_create_arg_colour'),
    },
    { name: '[map]', description: getString('cmd_create_arg_map') },
    { name: '[draft]', description: getString('cmd_create_arg_draft') },
    {
      name: '[corps]',
      description: getString('cmd_create_arg_corps'),
    },
    { name: '[fastmode]', description: getString('cmd_create_arg_fastmode') },
    { name: '[pass]', description: getString('cmd_create_arg_pass') },
  ],
});
