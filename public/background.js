localStorage.setItem("interval", 20);
localStorage.setItem("isRunning", false);
setTimeout(timer, 16);

var runningIcon = new Image();
var stopIcon = new Image();
runningIcon.src = './icon/38w/Running.png';
stopIcon.src = './icon/38w/Stop.png';

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(0,0,0,0.1)";

var audio = new Audio("sound.mp3");

var rot = 5;

function imageLoad(flag) {
    if (flag) {
        ctx.fillRect(0, 0, 38, 38);
        ctx.translate(19, 19);
        ctx.rotate(rot * Math.PI / 180);
        ctx.translate(-19, -19);
        ctx.drawImage(runningIcon, 0, 0);
    } else {
        ctx.fillRect(0, 0, 38, 38);
        ctx.drawImage(stopIcon, 0, 0);
    }
    return ctx.getImageData(0, 0, 38, 38);
}

function changeRunning() {
    var isRunning = localStorage.getItem("isRunning");
    localStorage.setItem("isRunning", isRunning === "true" ? "false" : "true")
}

function checkInterval() {
    var interval = localStorage.getItem("interval");
    var date = new Date();
    var minutes = date.getHours() * 60 + date.getMinutes();
    if (date.getSeconds() == 0 && minutes % interval == 0)
    {
        audio.play();        
    }
}

function timer() {
    var isRunning = localStorage.getItem("isRunning");
    if (isRunning == "true")
    {
        chrome.browserAction.setIcon({
            imageData: imageLoad(true)
        });
        checkInterval();
    }
    else
    {
        chrome.browserAction.setIcon({
            imageData: imageLoad(false)
        });
    }
    setTimeout(timer, 16);
}

(function()
{
    chrome.browserAction.onClicked.addListener(changeRunning);
})();