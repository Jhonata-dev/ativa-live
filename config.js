
const _nameCond = "Empresários do Brasil";
const _urlCam = "http://betroniccorporation.com:4321/cam_2.cgi";

const exampleKey = 13;

const title = document.getElementById('title');
const cam = document.getElementById('cam');
const _container = document.getElementById('container');

// document.addEventListener('keydown', keyEvent);

console.log(_nameCond);
title.innerText = _nameCond;
if (cam)
    cam.src = _urlCam;


window.addEventListener('keydown', keyEvent);

function keyEvent(event) {
    var key = event.keyCode || event.which;
    if (key == exampleKey) {
        window.location.assign("index_Firefox.html")
    }
}