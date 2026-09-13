---
title: Virtual wagering
category: Economy
summary: Bet limits, shared cooldowns, and payout behavior for Milacoin games.
kind: guide
---

## Wagers and limits

**/gamble_coinflip**, **/gamble_slots**, and **/gamble_blackmila** use your Milacoin balance. The wager must be a whole number from **1 to 100,000**, and you must have enough coins. They share a **30-second cooldown**.

The wager is deducted when the round starts. A payout is the amount returned afterwards, so a 2× payout means a net gain of one wager, not two.

## Slots

The result determines the multiplier; fractional payouts round down.

| Result | Amount returned |
| --- | --- |
| Pair / Close Call | 1.5× wager |
| Triple / Big Win | 2× wager |
| Jackpot | 3× wager |
| No winning result | 0 |

For example, a pair with a wager of 5 returns 7 coins after the initial 5-coin deduction.

## Coinflip and Blackmila

Choose your side for **/gamble_coinflip**. In **/gamble_blackmila**, use Hit and Stand to play your hand against the dealer. The [Blackmila guide]({{ '/wiki/blackmila/' | relative_url }}) explains card values and dealer behavior.

A winning coinflip returns **2× the wager**; a loss returns nothing. Blackmila returns **2× on a win**, the original wager on a draw, and nothing on a loss.

The ordinary **/coinflip**, **/sloths**, and **/blackmila** commands are separate from these balance-wagering commands.
