---
title: Blackmila
category: Games
summary: MilaBot’s blackjack game, with Hit, Stand, and flexible aces.
kind: guide
---

## Play a hand

Run **/blackmila**. Use **Hit** to draw another card or **Stand** to keep your hand. Aim to get closer to 21 than the dealer without exceeding it. Going above 21 is a bust.

## Card values

Number cards use their printed value; ten, Jack, Queen, and King count as 10. An Ace begins as 11, but counts as 1 when needed to avoid a bust.

The dealer draws while its total is below **17**. The bot draws randomly from the thirteen card ranks rather than tracking a finite physical deck.

## Wagering version

**/gamble_blackmila** plays with your saved Milacoins. Read the [wagering guide]({{ '/wiki/wagering/' | relative_url }}) for its bet limit and shared cooldown.
