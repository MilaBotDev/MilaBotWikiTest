---
title: "/encoder"
category: "Utilities"
summary: "Encode text."
kind: reference
---

## How to use

Type **/encoder** in Discord and select MilaBot’s command. Required inputs are marked below; optional inputs can be left blank.

## Options


<table><thead><tr><th scope="col">Option</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">What it does</th></tr></thead><tbody><tr data-wiki-entry><td><code>code</code></td><td>Text</td><td>Yes</td><td>The code to use.<br>Choices: Base64 (<code>base64</code>), Morse code (<code>morse</code>), Pigpen cipher (<code>pigpen</code>), Zodiac 408 (<code>z408</code>), Zodiac 340 (306 letters) (<code>z340</code>), Caesar cipher (<code>caesar</code>), Vigenere cipher (<code>vigenere</code>), Atbash cipher (<code>atbash</code>), Rail Fence cipher (<code>railfence</code>), A1Z26 (<code>a1z26</code>), Binary (UTF-8) (<code>binary</code>), Hexadecimal (UTF-8) (<code>hex</code>), Braille (<code>braille</code>), NATO phonetic alphabet (<code>nato</code>)</td></tr>
<tr data-wiki-entry><td><code>text</code></td><td>Text</td><td>Yes</td><td>The text to encode.<br>max length: 600</td></tr>
<tr data-wiki-entry><td><code>key</code></td><td>Text</td><td>No</td><td>Caesar shift; Vigenere keyword; or Rail Fence rail count.<br>max length: 100</td></tr>
<tr data-wiki-entry><td><code>discreet</code></td><td>Yes / no</td><td>No</td><td>Only show the response to you. Defaults to true.</td></tr></tbody></table>


## Guide

[Utilities guide]({{ '/wiki/utilities/' | relative_url }}) explains the surrounding feature. 

Use Discord’s command picker for the options offered by the running bot.
