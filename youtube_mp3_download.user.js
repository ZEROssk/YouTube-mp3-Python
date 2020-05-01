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

var myAppInterface = {
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
            #mp3dl .mp3_button{background-color: #cc0000;border: #cc0000;border-radius: 2px;color: #FFF;padding: 2px 2px;display: inline-block;cursor:pointer}
            end*/
        }.toString().replace("/*start", '').replace("end*/", '').slice(14, -1);
        this.addGlobalStyle(document, css);
    },
}

var createButton = function () {
    var obj = document.getElementsByClassName('ytp-right-controls')[0];//document.querySelector('#primary-inner>#menu');
    if (obj != null) {
        var btnRow = document.getElementById('mp3dl');
        if (btnRow == null) {
            myAppInterface.init()
            let bu = '<div id="mp3dl" class="style-scope youtube-watch"><div class="style-scope mp3_button"></div></div>';

            obj.insertAdjacentHTML('afterbegin', bu);
        }
    }
};

setInterval(createButton(), 250);
