
const _nameCond = "EMPRESÁRIOS DO BRASIL";
const _urlCam = "http://betroniccorporation.com:4321/cam_2.cgi";


const title = document.getElementById('title');
const cam = document.getElementById('cam');

title.innerHTML = _nameCond;
if (cam)
    cam.src = _urlCam;

