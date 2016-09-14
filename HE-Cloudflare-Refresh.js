// ==UserScript==
// @name         Hacker Experience - Cloudflare Refresh
// @version      1.0
// @description  Refresh at Cloudflare down message.
// @match        http://hackerexperience.com/*
// @match        https://hackerexperience.com/*
// @match        http://*.hackerexperience.com/*
// @match        https://*.hackerexperience.com/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

var oldTitle = $(document).attr('title');
if (oldTitle == "hackerexperience.com | 504: Gateway time-out") {
    location.reload(true);
}