/**
 * Check whether the query contains a title on page load
 * and when receiving a fixTitle message.
 * Update the title element if one is found.
 */

'use strict';

var originaltitle;

function fixTitle () {
	// If the page doesn't have a title yet, it's probably still loading
	if (!document.title) return;

	// The original page title will be used as the prefix
	if (!originaltitle) originaltitle = document.title;

	var m = document.location.href.match(/%23queryTitle%3A(.*?)%0A/);
	if (m) {
		document.title = originaltitle + " – " + decodeURIComponent(m[1]).trim();
	}
}

function fixTitleAFewTimes () {
	fixTitle();
	for (const delay of [500, 1000, 2000, 3000]) {
		setTimeout(fixTitle, delay);
	}
}

fixTitleAFewTimes();

browser.runtime.onMessage.addListener(request => {
	if (request === "fixTitle") {
		fixTitle();
	} else {
		throw new Error(`Unknown request ${request}`);
	}
});
