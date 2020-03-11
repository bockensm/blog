---
layout: post
title: Proxying Requests to CommandBox With Apache
description: Tips & code showing how you can set up Apache to proxy requests to CommandBox
date: 2020-03-10
img: server-with-cables.jpg
display_comments: true
allow_new_comments: true
---
I recently saw someone on [Slack](https://cfml.slack.com) asking for some guidance on how to set up Apache to work with CommandBox. There are a few reasons why someone might want to do this:

* It's a good way to terminate an SSL without CommandBox worrying about it
* Handling web requests is what Apache (and nginx, for that matter) is best suited to do
* There are some opportunities to use a load balancer or traffic filtering device

Surely there are other reasons, but that's not what this post is about.

Before you get too much further, make sure `mod_proxy` is enabled in Apache. There are  existing resources for how to do this in whichever setup you have so I won't cover it here. This article also doesn't cover securing the server or any other Apache configuration; I'll leave that to you.

Now... for the reason you're here!
{% gist d5972469fa8f5df1700b2b6bb4414913 %}

If you're going to use this Gist, be sure to replace a few pieces of information:
1. Replace `myserver.test` with the name of your server
1. In the proxy lines where you see `12345`, replace that with the port CommandBox uses
1. If you configured CommandBox to run on an IP other than `127.0.0.1`, be sure to update that as well
1. If you don't want to support HTTP/2, you can remove the line starting with `Protocols`

`ProxyPass` & `ProxyPassReverse` are the magic lines you need to tell Apache to take requests served by this VirtualHost and pass them along to CommandBox.
