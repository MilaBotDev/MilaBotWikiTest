---
title: Vitrine & stat calculator
category: Patisserie
summary: Equip your three slots and compare treat, plate, and level combinations.
kind: guide
---

## Equip your team

Open **/vitrine**, use **Edit**, and choose a slot, treat, or plate. You can also use the command’s action options directly. There are three slots, and each treat must be one you own. The same treat cannot occupy multiple slots.

To equip a plate, put a treat in the slot first. You must own an available copy of the plate. If a plate is assigned elsewhere, you need another copy to use it again.

**Replacing a slot’s treat resets its XP and level and removes its assigned plate.** Clearing the slot also removes its progress. Plan your team before investing in ShowOff battles.

## Calculate stats

Select a treat, level, and plate to preview the same HP and attack formula used by the bot. Passive abilities are listed separately in the [plate reference]({{ '/wiki/plates/' | relative_url }}).

<div id="wiki-calculator" class="wiki-related" data-stats-url="{{ '/assets/wiki/stats.json' | relative_url }}" hidden>
  <label for="calc-treat">Treat</label><select id="calc-treat"></select>
  <label for="calc-plate">Plate</label><select id="calc-plate"></select>
  <label for="calc-level">Vitrine level (1–100)</label><input id="calc-level" type="number" min="1" max="100" step="1" value="1">
  <p id="calc-result" role="status" aria-live="polite"></p>
</div>
<p id="calc-fallback">The calculator loads with JavaScript. The formulas and reference tables below also work without it.</p>

## Stat formulas

At Vitrine level **L**:

```text
HP = floor((base HP + plate flat HP + (L − 1) × 5) × (1 + plate HP percent / 100))
Attack = floor((base attack + plate flat attack + (L − 1) × 3) × (1 + plate attack percent / 100))
```

Percentage bonuses apply after flat bonuses and level gains. Both final values round down.

For example, a Strawberry Candy at level 2 with a Crystal Plate has **33 HP** and **7 attack**: floor((24 + 5) × 1.15) HP and 4 + 3 attack.

## Earn XP

Run **/showoff** with at least one equipped treat. Each occupied slot receives the battle’s full XP reward. The [progression table]({{ '/wiki/progression/' | relative_url }}) lists XP needed for the next level; the maximum is 100.
