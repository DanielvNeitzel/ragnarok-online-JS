

const inputId = document.getElementById('input_user_id');
const inputPass = document.getElementById('input_user_pass');
const clickLBtnLogin = document.querySelectorAll('.click-effect-login');
const b = document.querySelector('body');
var music_temp = '';
var effect_temp = '';

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
    if (music_temp !== 'music_login') {
        const soundGame = document.getElementById('musicGame');
        soundGame.volume = 0.1;
        soundGame.src = 'audio/login_sound.mp3';
        soundGame.play();
        music_temp = status;
    }
}

for (let btn = 0; btn < clickLBtnLogin.length; btn++) {
    clickLBtnLogin[btn].addEventListener('click', () => {
        const effectGame = document.getElementById('effectGame');
        effectGame.volume = 0.1;
        effectGame.src = 'audio/login_button_click.mp3';
        effectGame.play();
    });
}

function loginGame() {
}

function exitGame() {
}