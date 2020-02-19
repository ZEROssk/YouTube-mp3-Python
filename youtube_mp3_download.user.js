// ==UserScript==
// @name         YouTube MP3 Downloader
// @namespace    http://zerono.teamfruit.net
// @version      0.1
// @description  MP3 Download to server from YouTube
// @author       ZEROssk
// @match        https://www.youtube.com/watch*
// @grant        none
// @license      MIT License
// @updateURL    https://github.com/ZEROssk/mp3-download-to-server-from-youtube/raw/master/youtube_mp3_download.user.js
// ==/UserScript==

(function () {
	'use strict';

	window.onload = function() {
		let btCreate = document.getElementsByTagName("ytd-subscribe-button-renderer")[0]
		let button =
			'<button id="api-button">Button</button>'
		;
		btCreate.insertAdjacentHTML('beforebegin', button);

		console.log("done");
	}

})();

