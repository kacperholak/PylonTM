/* This file is used to store variables that the bot frequently needs to reference.
 * These variables are safe to share with others.
 */

import { getString } from './global';

/* Command prefixes - The symbols or phrases that the bot should respond to.
 * The bot can also respond to being mentioned.
 * These prefixes should not conflict with other Discord bots. List unusable prefixes below:
 * Dyno uses ?
 * FredBoat uses ;;
 * IdleRPG uses $
 * MEE6 uses !
 * SafetyAtLast uses &
 * Tatsu uses t!
 * \ may be used innocently when trying to get mention and emoji IDs
 */
export const COMMAND_PREFIXES = ['!', '.', 'pylon ', 'py '];

// Embed colour - The colour of embed content that the bot posts.
export const EMBED_COLOUR = 0xff4d00;
export const EMBED_COLOUR_ERROR = 0xff0000;

// Command cooldown - How long users should wait between commands in milliseconds.
export const COMMAND_COOLDOWN = 3000;

// Error timeout - How long users should be given to read error messages in milliseconds.
export const ERROR_TIMEOUT_MINIMUM = 5000;
export const ERROR_TIMEOUT_PER_CHAR = 50;

/* Command categories - Human-readable explanations of the different types of commands.
 * This is used by the help command to return info relevant to the user's query.
 * Command categories need to be defined or the help menu will fail to show commands inside them.
 */
export const COMMAND_CATEGORIES: any[] = [
  {
    name: 'links',
    title: getString('category_links_title'),
    description: getString('category_links_desc'),
    longDescription: getString('category_links_desc_long'),
  },
  {
    name: 'tm',
    title: getString('category_tm_title'),
    description: getString('category_tm_desc'),
  },
];
export const COMMAND_DEFAULT_CATEGORY = 'default';

/* Bot channel - The channel in which most of the bot's commands should be relegated to.
 * Attempting to use a restricted command outside this or the developer channel will warn the user.
 */
export const BOT_CHANNEL = '1021055318005907497';

export const LFG_CHANNEL = ['730783891660472371', '1101234497980219422'];

// Developer mode - Changes the bot behaviour depending on the specified channel.
export const DEV_CHANNEL = '834795896188436511';
