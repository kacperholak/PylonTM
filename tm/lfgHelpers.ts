import * as C from './constants';

// Get player count display for the LFG embed
export function getPlayerString(playerCount: number): string {
  if (playerCount > 1 && playerCount <= 6) {
    return playerCount.toString();
  } else if (playerCount == 34) {
    return '3 or 4';
  } else if (playerCount == 23) {
    return '2 or 3';
  } else if (playerCount == 22) {
    return '2 vs 2';
  } else {
    return 'any';
  }
}

// Get max player count for the LFG embed
export function getMaxPlayersCount(playerCount: number): number {
  if (playerCount > 1 && playerCount <= 6) {
    return playerCount;
  } else if (playerCount == 23) {
    return 3;
  } else if (playerCount == 34 || playerCount == 22) {
    return 4;
  } else {
    return 5;
  }
}

// Get expansion icons for the LFG embed
export function getExpansionIcons(expansion: string): string {
  if (expansion == 'all' || expansion == 'everything') {
    return (
      C.preludeEmoji +
      C.venusEmoji +
      C.colonyEmoji +
      C.turmoilEmoji +
      C.promoEmoji
    );
  } else if (expansion == 'any' || expansion == 'anything') {
    return C.anyEmoji;
  } else if (expansion == 'base') {
    return C.noEmoji;
  }

  let icons = '';
  if (expansion.includes('p')) icons += C.preludeEmoji;
  if (expansion.includes('v')) icons += C.venusEmoji;
  if (expansion.includes('c')) icons += C.colonyEmoji;
  if (expansion.includes('t')) icons += C.turmoilEmoji;
  if (expansion.includes('o')) icons += C.promoEmoji;
  if (icons === '') icons = C.noEmoji;

  return icons;
}

// Gets draft type for display in LFG embed
export function getDraftType(opts: string) {
  if (opts.includes('full draft')) return 'Initial';
  if (opts.includes('no draft')) return 'None';
  if (opts.includes('-draft')) return 'None';
  if (opts.includes('draft')) return 'Round';
  return C.anyEmoji;
}

// Gets WGT setting for display in LFG embed
export function getWgtOption(opts: string) {
  if (opts.includes('-wgt')) return C.noEmoji;
  if (opts.includes('wgt')) return C.yesEmoji;
  return C.anyEmoji;
}

// Gets realtime VP setting for display in LFG embed
export function getVpOption(opts: string) {
  if (opts.includes('-vp')) return C.noEmoji;
  if (opts.includes('vp')) return C.yesEmoji;
  return C.anyEmoji;
}

// Gets random MA setting for display in LFG embed
export function getMilestonesAwardsOption(opts: string) {
  if (opts.includes('-random')) return 'Board-defined';
  if (opts.includes('random')) return 'Randomized';
  return C.anyEmoji;
}