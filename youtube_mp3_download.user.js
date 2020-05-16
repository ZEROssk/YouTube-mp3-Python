// ==UserScript==
// @name         YouTube MP3 Downloader
// @namespace    http://zerono.teamfruit.net
// @version      0.2
// @description  MP3 Download to server from YouTube
// @author       ZEROssk
// @include      https://www.youtube.com*
// @grant        none
// @license      MIT License
// @updateURL    https://github.com/ZEROssk/mp3-download-to-server-from-youtube/raw/master/youtube_mp3_download.user.js
// ==/UserScript==

var buttonCSS = {
    init: function () {
        this.insertGlobalCSS()
    },
    addGlobalStyle: function (doc, css) {
        if (document.querySelector('.mp3dl-css')) return;
        var head = doc.getElementsByTagName('head')[0];
        if (!head) { return; }
        var style = doc.createElement('style');
        style.id = 'mp3dl-css';
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    },
    insertGlobalCSS: function () {
        var css = function () {
            /*start
            #mp3dl{text-align:center; font-weight: bold; cursor: pointer}
            end*/
        }.toString().replace("/*start", '').replace("end*/", '').slice(14, -1);
        this.addGlobalStyle(document, css);
    },
}

var postData = function (url = ``) {
	return fetch(url, {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		redirect: "follow",
		referrer: "no-referrer",
	})
	.then(response => response.json());
}

var clickMP3DL = function () {
	postData(`https://dev.zerono.cloud/md/api/mp3${location.search}`)
		.then(data => console.log(JSON.stringify(data)))
		.catch(error => console.error(error));
}

var createButton = function () {
    buttonCSS.init()
    let insertPosition = document.getElementsByClassName('ytp-right-controls')[0];
    let dlbt = `<button id="mp3dl" class="ytp-button ytp-settings-button">MP3</button>`;

    insertPosition.insertAdjacentHTML('afterbegin', dlbt);

    let btEvent = document.getElementById("mp3dl");
    btEvent.addEventListener("click", clickMP3DL, false);

};

setInterval(createButton(), 250);
