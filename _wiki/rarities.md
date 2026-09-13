---
title: "Rarities & baking odds"
category: "Patisserie"
summary: "Understand weighted drops and the collection bonuses each rarity gives."
kind: guide
---

## How a bake is rolled

Each treat is rolled independently. The bot chooses a rarity using its weight, then picks uniformly among the active treats in that rarity. Collection size does not change the odds. A bake gives one roll per Patisserie level.

The table shows the chance of **any treat in a rarity per roll**, not the chance of a particular treat. Divide by the number of active treats in that rarity to get an individual treat’s chance.


<table><thead><tr><th scope="col">Rarity</th><th scope="col">Weight</th><th scope="col">Outside Pride</th><th scope="col">During Pride</th><th scope="col">Daily bonus</th><th scope="col">Weekly bonus</th></tr></thead><tbody><tr data-wiki-entry><td><img class="wiki-emoji" src="{{ '/assets/wiki/Rarities/common.png' | relative_url }}" alt="Common" width="48" height="48" loading="lazy">Common</td><td>500</td><td>71.367298%</td><td>69.871339%</td><td>0.1%</td><td>0.2%</td></tr>
<tr data-wiki-entry><td><img class="wiki-emoji" src="{{ '/assets/wiki/Rarities/uncommon.png' | relative_url }}" alt="Uncommon" width="48" height="48" loading="lazy">Uncommon</td><td>140</td><td>19.982843%</td><td>19.563975%</td><td>0.2%</td><td>0.4%</td></tr>
<tr data-wiki-entry><td><img class="wiki-emoji" src="{{ '/assets/wiki/Rarities/rare.png' | relative_url }}" alt="Rare" width="48" height="48" loading="lazy">Rare</td><td>45</td><td>6.423057%</td><td>6.288421%</td><td>0.4%</td><td>0.8%</td></tr>
<tr data-wiki-entry><td><img class="wiki-emoji" src="{{ '/assets/wiki/Rarities/epic.png' | relative_url }}" alt="Epic" width="48" height="48" loading="lazy">Epic</td><td>12</td><td>1.712815%</td><td>1.676912%</td><td>0.8%</td><td>1.6%</td></tr>
<tr data-wiki-entry><td><img class="wiki-emoji" src="{{ '/assets/wiki/Rarities/legendary.png' | relative_url }}" alt="Legendary" width="48" height="48" loading="lazy">Legendary</td><td>3</td><td>0.428204%</td><td>0.419228%</td><td>1.5%</td><td>3%</td></tr>
<tr data-wiki-entry><td><img class="wiki-emoji" src="{{ '/assets/wiki/Rarities/mythic.png' | relative_url }}" alt="Mythic" width="48" height="48" loading="lazy">Mythic</td><td>0.6</td><td>0.085641%</td><td>0.083846%</td><td>3%</td><td>6%</td></tr>
<tr data-wiki-entry><td><img class="wiki-emoji" src="{{ '/assets/wiki/Rarities/special.png' | relative_url }}" alt="Special" width="48" height="48" loading="lazy">Special</td><td>15</td><td>Unavailable</td><td>2.096140%</td><td>2%</td><td>4%</td></tr>
<tr data-wiki-entry><td><img class="wiki-emoji" src="{{ '/assets/wiki/Rarities/milatier.png' | relative_url }}" alt="Milatier" width="48" height="48" loading="lazy">Milatier</td><td>0.001</td><td>0.000143%</td><td>0.000140%</td><td>10%</td><td>20%</td></tr></tbody></table>


## Seasonal availability

The supplied code uses UTC dates with an inclusive start and an **exclusive end**. Pride treats are obtainable from June 1 through June 29; the configured June 30 boundary is excluded. Seasonal treats already owned remain in the collection after the season.

## Collection bonuses

Each distinct owned treat contributes its rarity’s bonus to **/daily** and **/weekly**. Owning multiple copies does not multiply that treat’s bonus.
