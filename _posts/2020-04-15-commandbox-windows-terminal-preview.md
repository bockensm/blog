---
layout: post
title: Adding a CommandBox Profile to Windows Terminal Preview
description: Learn how to add CommandBox as an option to the profile list in Windows Terminal Preview
date: 2020-04-15
img:
display_comments: true
allow_new_comments: true
---
With the recent release of the [Windows Terminal (Preview)](https://www.microsoft.com/en-us/p/windows-terminal-preview/9n0dx20hk701?activetab=pivot:overviewtab) app, and in the spirit of "Living the Box Life", I set out to find a way to add CommandBox as a shell option.

![Before adding CommandBox](/assets/img/posts/terminal-before-commandbox.jpg)

Luckily, it's as simple as clicking that "Settings" link you see in the screenshot above and adding a little bit of code.

{% gist e9802cbea2f6548d168a5b50c8fcbc81 %}

This snippet above can be added to the Profiles -> List array in your settings. You can get to it through the steps mentioned above the snippet.

Let's walk through that snippet line-by-line to understand what's going on:

`guid` is the globally unique identifier for the entry. You want this to be unique, so I suggest going to a [GUID Generator](https://www.guidgenerator.com/online-guid-generator.aspx) and generating a GUID for your case.

`name` is the display name for your entry. "CommandBox" seems appropriate here.

`commandline` is whatever your computer needs to run to start CommandBox. If you have CommandBox on your system path, you can simply use "box" or "box.exe". If you don't have it on your path, the full path to the binary will work.

`icon` is optional, but you can provide a favicon-like image (PNG preferred) to spruce up the display a bit.

`hidden` should be false.

In the end, you should wind up with something that looks like this:
![After adding CommandBox](/assets/img/posts/terminal-after-commandbox.jpg)
