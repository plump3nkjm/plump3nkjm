/**
 *
 * @param id youtubeを挿入する要素のID
 * @param videoID youtubeのID
 */

export default (id,videoID) => {

    let player;

    function youtubePlayer() {
        player = new YT.Player(`${id}`, {
            height: '1920',
            width: '1080',
            videoId: `${videoID}`,
            playerVars: {
                loop: 1,
                controls: 0,
                playlist: `${videoID}`,
                playsinline: 1,
                rel: 0,
                showinfo: 1,
                iv_load_policy: 3,
                modestbranding: 1,
                enablejsapi: 1,
                origin: location.protocol + '//' + location.hostname + "/",
                host: 'https://www.youtube.com',
            },
            events: {
                'onReady': onPlayerReady
            }
        });
    }

    function onPlayerReady(event) {
        // 動画をミュートにする
        event.target.mute();
        event.target.playVideo();
    }

    // youtubeAPIを読み込み
    function loadScript() {
        if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
            let tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            let firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }


    function loadPlayer() {
        window.onYouTubePlayerAPIReady = function () {
            youtubePlayer();
        };
    }

    loadScript();
    loadPlayer();

}
