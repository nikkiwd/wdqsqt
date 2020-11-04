/**
 * Listen for changes to the URL hash.
 * Send a fixTitle message to the main script when a change is detected.
 */

'use strict';

browser.webNavigation.onReferenceFragmentUpdated.addListener(({ tabId }) => {
	browser.tabs.sendMessage(tabId, "fixTitle");
}, {
	url: [
		{ hostEquals: "query.wikidata.org" },
		{ hostEquals: "wcqs-beta.wmflabs.org" },
	],
});
