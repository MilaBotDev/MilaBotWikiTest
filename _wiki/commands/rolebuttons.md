---
title: "/rolebuttons"
category: "Server tools"
summary: "Send an embed with role buttons that work without stored bot data."
kind: reference
---

## How to use

Type **/rolebuttons** in Discord and select MilaBot’s command. Required inputs are marked below; optional inputs can be left blank.

This command is for servers.

Default member permissions: **Manage Roles**. Server command settings can further restrict availability.

## Options


<table><thead><tr><th scope="col">Option</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">What it does</th></tr></thead><tbody><tr data-wiki-entry><td><code>message</code></td><td>Text</td><td>Yes</td><td>The embed text MilaBot should send with the role buttons.<br>max length: 4096</td></tr>
<tr data-wiki-entry><td><code>button1_name</code></td><td>Text</td><td>Yes</td><td>The text shown on button 1.<br>max length: 80</td></tr>
<tr data-wiki-entry><td><code>button1_type</code></td><td>Text</td><td>Yes</td><td>Whether button 1 toggles, only adds, or only removes the role.<br>Choices: Add and Remove (<code>toggle</code>), Add only (<code>add</code>), Remove only (<code>remove</code>)</td></tr>
<tr data-wiki-entry><td><code>button1_role</code></td><td>Role</td><td>Yes</td><td>The role button 1 should add or remove.</td></tr>
<tr data-wiki-entry><td><code>channel</code></td><td>Channel</td><td>No</td><td>Where MilaBot should send the message. Defaults to this channel.</td></tr>
<tr data-wiki-entry><td><code>color</code></td><td>Text</td><td>No</td><td>Embed color as hex, like #dd22cc. Defaults to #dd22cc.</td></tr>
<tr data-wiki-entry><td><code>exclude_role</code></td><td>Role</td><td>No</td><td>Users with this role cannot use any of these buttons.</td></tr>
<tr data-wiki-entry><td><code>button2_spec</code></td><td>Text</td><td>No</td><td>Button 2: Name | Add and Remove/Add only/Remove only | @Role</td></tr>
<tr data-wiki-entry><td><code>button3_spec</code></td><td>Text</td><td>No</td><td>Button 3: Name | Add and Remove/Add only/Remove only | @Role</td></tr>
<tr data-wiki-entry><td><code>button4_spec</code></td><td>Text</td><td>No</td><td>Button 4: Name | Add and Remove/Add only/Remove only | @Role</td></tr>
<tr data-wiki-entry><td><code>button5_spec</code></td><td>Text</td><td>No</td><td>Button 5: Name | Add and Remove/Add only/Remove only | @Role</td></tr>
<tr data-wiki-entry><td><code>button6_spec</code></td><td>Text</td><td>No</td><td>Button 6: Name | Add and Remove/Add only/Remove only | @Role</td></tr>
<tr data-wiki-entry><td><code>button7_spec</code></td><td>Text</td><td>No</td><td>Button 7: Name | Add and Remove/Add only/Remove only | @Role</td></tr>
<tr data-wiki-entry><td><code>button8_spec</code></td><td>Text</td><td>No</td><td>Button 8: Name | Add and Remove/Add only/Remove only | @Role</td></tr>
<tr data-wiki-entry><td><code>button9_spec</code></td><td>Text</td><td>No</td><td>Button 9: Name | Add and Remove/Add only/Remove only | @Role</td></tr>
<tr data-wiki-entry><td><code>button10_spec</code></td><td>Text</td><td>No</td><td>Button 10: Name | Add and Remove/Add only/Remove only | @Role</td></tr></tbody></table>


## Guide

[Server tools guide]({{ '/wiki/server-tools/' | relative_url }}) explains the surrounding feature. 

Use Discord’s command picker for the options offered by the running bot.
