// Script to manage advancement beyond level 20 in DnD 5E.
// Based on Past Level 20 (5e Variant Rule) https://www.dandwiki.com/wiki/Past_Level_20_(5e_Variant_Rule)
import "./constants.mjs";

const EXTRA_EXP_LEVELS = [
  410000, 470000, 530000, 600000, 670000, 750000, 830000, 920000, 1010000, 1110000, 1210000,
  1320000, 1430000, 1550000, 1670000, 1800000, 1930000, 2070000, 2210000, 2360000, 2510000, 2670000,
  2830000, 3000000, 3170000, 3350000, 3530000, 3720000, 3910000, 4110000,
];

// Increase max level for Player Actor
Hooks.once("init", () => {
  CONFIG.DND5E.maxLevel = MAX_LEVEL;

  CONFIG.DND5E.CHARACTER_EXP_LEVELS = [...CONFIG.DND5E.CHARACTER_EXP_LEVELS, ...EXTRA_EXP_LEVELS];

  if (CONFIG.DND5E.CHARACTER_EXP_LEVELS.length !== MAX_LEVEL) {
    console.warn(
      `Beyond 20 | Exp table missing entries : ${CONFIG.DND5E.CHARACTER_EXP_LEVELS.length} entries instead of ${MAX_LEVEL}.`,
    );
  }
});
