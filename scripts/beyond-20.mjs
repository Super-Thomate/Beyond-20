// Script to manage advancement beyond level 20 in DnD 5E.
// Based on Past Level 20 (5e Variant Rule) https://www.dandwiki.com/wiki/Past_Level_20_(5e_Variant_Rule)

// Increase max level for Player Actor
Hooks.once("init", () => {
  CONFIG.DND5E.maxLevel = 50;
});
