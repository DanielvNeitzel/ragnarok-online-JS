var object = document.getElementById('block_login'),
initX, initY, firstX, firstY;

const inputId = document.getElementById('input_id');
const inputPass = document.getElementById('input_pass');
const b = document.querySelector('body');
var status_temp = '';

object.addEventListener('mousedown', function (e) {

    object.style.background = "#ffffffb0";
    e.preventDefault();
    initX = this.offsetLeft;
    initY = this.offsetTop;
    firstX = e.pageX;
    firstY = e.pageY;

    this.addEventListener('mousemove', dragIt, false);

    window.addEventListener('mouseup', function () {
        object.style.background = "#ffffff";
        object.removeEventListener('mousemove', dragIt, false);
    }, false);

}, false);

object.addEventListener('touchstart', function (e) {

    e.preventDefault();
    initX = this.offsetLeft;
    initY = this.offsetTop;
    var touch = e.touches;
    firstX = touch[0].pageX;
    firstY = touch[0].pageY;

    this.addEventListener('touchmove', swipeIt, false);

    window.addEventListener('touchend', function (e) {
        e.preventDefault();
        object.removeEventListener('touchmove', swipeIt, false);
    }, false);

}, false);

function dragIt(e) {
    this.style.left = initX + e.pageX - firstX + 'px';
    this.style.top = initY + e.pageY - firstY + 'px';
}

function swipeIt(e) {
    var contact = e.touches;
    this.style.left = initX + contact[0].pageX - firstX + 'px';
    this.style.top = initY + contact[0].pageY - firstY + 'px';
}

function clickInput(type) {
    switch (type) {
        case 'id':
            inputId.focus();
            break;

        case 'pass':
            inputPass.focus();
            break;

        default:
            break;
    }

}

function playMsc(status) {
    if (status_temp !== 'music_on') {
        const soundGame = document.getElementById('musicGame');
        soundGame.src = 'audio/login_sound.mp3';
        soundGame.play();
        status_temp = status;
    }
    
}

function loginGame(e) {
    e.preventDefault();
}

function exitGame(e) {
    e.preventDefault();
}