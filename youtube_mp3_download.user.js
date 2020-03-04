// ==UserScript==
// @name         YouTube MP3 Downloader
// @namespace    http://zerono.teamfruit.net
// @version      0.1
// @description  MP3 Download to server from YouTube
// @author       ZEROssk
// @include      https://www.youtube.com*
// @grant        none
// @license      MIT License
// @updateURL    https://github.com/ZEROssk/mp3-download-to-server-from-youtube/raw/master/youtube_mp3_download.user.js
// ==/UserScript==

(function () {
    'use strict';
    window.onload = function() {
        console.log("done");
        function click() {
            console.log("click");
        }
        let findArea = document.getElementsByClassName("style-scope ytd-menu-renderer")[0]
        let btn =
            "<div>"+
                "<button onclick='click()'>Click</button>"+
            "</div>"
        ;
        findArea.insertAdjacentHTML('afterbegin', btn);
        console.log(findArea);
    }
})();
