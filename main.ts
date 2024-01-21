/* This file loads all top-level commands and functions that need to be active for the bot to work.
 * Add new commands here when they should be recognised by the bot.
 */

import './lang';
import './tm/maps';
// import './tm/maps_list';
import './tm/create';
import './tm/lfg';
// import './tm/setup';
import './tm/lam';
import './tm/card';
// import './tm/mapa';
import './tm/bo3';
import './tm/bo5';

import './commands/help';
import './commands/links';
import './commands/niceWords';
import './commands/dzban';
import './commands/dadjoke';
import './commands/random';
import './commands/willey';

import './logging';
import './scheduled';

// Initialise database by deleting user timeouts.
let database1 = new pylon.KVNamespace('timeout');
database1.delete('timedOut');

let database2 = new pylon.KVNamespace('lfg');
database1.delete('lfgFound');
