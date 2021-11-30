document.getElementById('button').onclick = function () {
    player.stopVideo(0);
    window.location = window.location.origin + "/Codigo/home/index.html";
};



const tag = document.createElement("script");
tag.id = "iframe-demo";
tag.src = "https://www.youtube.com/iframe_api";
const [firstScriptTag] = document.getElementsByTagName("script");
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;

window.onPlayerReady = (event) => {
    event.target.playVideo();
};

window.onPlayerStateChange = (event) => {
    if (event.data === 0) {
        window.location = window.location.origin + "/Codigo/home/index.html";
    }
};

window.onYouTubeIframeAPIReady = () => {
    player = new window.YT.Player("player", {
        width: 1120,
        height: 630,
        videoId: "3zAsyYgSaxU",
        playerVars: {
            controls: 0,
        },
        events: {
            onReady: window.onPlayerReady,
            onStateChange: window.onPlayerStateChange
        }
    });
};