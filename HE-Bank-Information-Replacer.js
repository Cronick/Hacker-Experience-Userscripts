// ==UserScript==
// @name        Hacker Experience - Bank Information Replacer
// @version     1.0
// @description Transfer money to your own bank account fast
// @match       http://hackerexperience.com/internet?bAction=show
// @match       https://hackerexperience.com/internet?bAction=show
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant       GM_addStyle
// ==/UserScript==

$("input[name='acc']").val ("228694704"); // Account Number
$("input[name='ip']").val ("24.61.139.163"); // Bank IP