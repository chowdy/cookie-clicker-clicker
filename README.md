This script clicks on the cookie, golden cookies, and buys the cheapest upgrade/product.

Go to http://orteil.dashnet.org/cookieclicker/ to play the cookie clickin' game.

Paste the following into your Google Chrome javascript console (or whatever) to get jQuery:

```javascript
var jq = document.createElement('script');
head = document.head || document.getElementsByTagName('head')[0];
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
jq.async = false;
head.insertBefore(jq, head.firstChild);
```

Then paste the contents of cookieClickerClicker.js and boom. Cookies.
