// Extends Spell Slots and Pact Spell Slots
// TODO : compatibility check with Spell Points

const EXTRA_SPELL_SLOTS = [
  [4, 3, 3, 3, 3, 2, 2, 1, 1], // 21
  [4, 3, 3, 3, 3, 2, 2, 1, 1], // 22
  [4, 3, 3, 3, 3, 2, 2, 1, 1], // 23
  [4, 4, 3, 3, 3, 2, 2, 1, 1], // 24
  [4, 4, 3, 3, 3, 2, 2, 1, 1], // 25
  [4, 4, 4, 3, 3, 2, 2, 1, 1], // 26
  [4, 4, 4, 3, 3, 2, 2, 1, 1], // 27
  [4, 4, 4, 3, 3, 2, 2, 1, 1], // 28
  [4, 4, 4, 3, 3, 2, 2, 1, 1], // 29
  [4, 4, 4, 4, 3, 2, 2, 1, 1], // 30
  [4, 4, 4, 4, 3, 2, 2, 1, 1], // 31
  [4, 4, 4, 4, 4, 2, 2, 1, 1], // 32
  [4, 4, 4, 4, 4, 2, 2, 1, 1], // 33
  [4, 4, 4, 4, 4, 2, 2, 1, 1], // 34
  [4, 4, 4, 4, 4, 2, 2, 1, 1], // 35
  [4, 4, 4, 4, 4, 3, 2, 1, 1], // 36
  [4, 4, 4, 4, 4, 3, 2, 1, 1], // 37
  [4, 4, 4, 4, 4, 4, 3, 1, 1], // 38
  [4, 4, 4, 4, 4, 4, 3, 1, 1], // 39
  [4, 4, 4, 4, 4, 4, 3, 1, 1], // 40
  [4, 4, 4, 4, 4, 4, 3, 1, 1], // 41
  [4, 4, 4, 4, 4, 4, 4, 2, 1], // 42
  [4, 4, 4, 4, 4, 4, 4, 2, 1], // 43
  [4, 4, 4, 4, 4, 4, 4, 3, 2], // 44
  [4, 4, 4, 4, 4, 4, 4, 3, 2], // 45
  [4, 4, 4, 4, 4, 4, 4, 3, 2], // 46
  [4, 4, 4, 4, 4, 4, 4, 3, 2], // 47
  [4, 4, 4, 4, 4, 4, 4, 4, 3], // 48
  [4, 4, 4, 4, 4, 4, 4, 4, 3], // 49
  [4, 4, 4, 4, 4, 4, 4, 4, 4], // 50
];

Hooks.on("dnd5e.prepareSpellSlots", (spells, actor, progression) => {
  const level = progression.spell;
  if (level <= 20) return;

  const extra = EXTRA_SPELL_SLOTS[level - 21];
  if (!extra) return;

  for (let circle = 1; circle <= 9; circle++) {
    const slot = (spells[`spell${circle}`] ??= { value: 0 });
    slot.max = Number.isNumeric(slot.override)
      ? Math.max(parseInt(slot.override), 0)
      : (extra[circle - 1] ?? 0);
    slot.level = circle;
    slot.type = "spell";
    slot.label = game.i18n.localize(`DND5E.SPELLCASTING.SLOTS.spell${circle}`);
  }
  return false;
});
