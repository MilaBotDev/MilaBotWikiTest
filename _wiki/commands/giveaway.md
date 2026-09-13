---
title: "/giveaway"
category: "Server tools"
summary: "Create a reaction giveaway with manual closing and drawing."
kind: reference
---

## How to use

Type **/giveaway** in Discord and select MilaBot’s command. Required inputs are marked below; optional inputs can be left blank.

This command is for servers.

Default member permissions: **Kick Members, Ban Members, Moderate Members**. Server command settings can further restrict availability.

## Options


## start

Start a giveaway. The displayed time is informational only.


<table><thead><tr><th scope="col">Option</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">What it does</th></tr></thead><tbody><tr data-wiki-entry><td><code>duration</code></td><td>Text</td><td>Yes</td><td>Informational duration; entries and winners are managed manually.<br>Choices: 1h (<code>1h</code>), 3h (<code>3h</code>), 6h (<code>6h</code>), 12h (<code>12h</code>), 1day (<code>1day</code>), 3days (<code>3days</code>), 7days (<code>7days</code>)</td></tr>
<tr data-wiki-entry><td><code>winners</code></td><td>Whole number</td><td>Yes</td><td>Number of winners to draw manually.<br>min value: 1<br>max value: 20</td></tr>
<tr data-wiki-entry><td><code>prize</code></td><td>Text</td><td>Yes</td><td>What people are entering to win.<br>max length: 256</td></tr>
<tr data-wiki-entry><td><code>channel</code></td><td>Channel</td><td>No</td><td>Text channel for the giveaway and its private storage thread.</td></tr></tbody></table>


## Guide

[Server tools guide]({{ '/wiki/server-tools/' | relative_url }}) explains the surrounding feature. 

Use Discord’s command picker for the options offered by the running bot.
