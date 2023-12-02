

const inputId = document.getElementById('input_id');
const inputPass = document.getElementById('input_pass');
const b = document.querySelector('body');
var status_temp = '';

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