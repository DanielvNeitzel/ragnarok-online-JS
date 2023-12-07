

const inputId = document.getElementById('input_user_id');
const inputPass = document.getElementById('input_user_pass');
const clickLBtnLogin = document.querySelectorAll('.click-effect-login');

const block_login = document.querySelector('.block_login');
const block_news = document.querySelector('.block_news');

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

function showLoginScreen() {
    setTimeout(
        function () {
            var black_screen = document.querySelector(".black_screen");
            black_screen.style.transition = "opacity " + .6 + "s";
            black_screen.style.opacity = 0;
            black_screen.addEventListener("transitionend", function () {
                console.log("loading complete");
                block_login.classList.remove('hide');
                block_news.classList.remove('hide');
                block_login.classList.add('fadeInAnim');
                block_news.classList.add('fadeInAnim');
                inputId.focus();
                black_screen.style.display = "none";
            });
        }, 1000
    );
}

function cmd(selected) {
    switch (selected) {
        case 'exitGame':
            document.querySelector('#win-confirm-exit').style.zIndex = 1;
            document.querySelector('#win-confirm-exit').classList.remove('hide');
            break;

        case 'closeConfirmExit':
            document.querySelector('#win-confirm-exit').classList.add('hide');
            break;

        case 'resetPage':
            document.querySelector('#win-confirm-exit').classList.add('hide');
            location.replace(location.href);
            break;

        case 'loginGame':
            if (inputId.value !== '' || inputPass.value !== '') {
                verificaLogin();
            } else {
                document.querySelector('#blc_msg_error').style.zIndex = 1;
                document.querySelector('#blc_msg_error').classList.remove('hide');
                document.querySelector('#title-msg-error').innerHTML = 'Mensagem'
                document.querySelector('#text-msg-error').innerHTML = 'Usuário ou senha incorretos. Por favor, tente novamente';
                document.querySelector('#block_message_login').classList.remove('hide');
                document.querySelector('#block_login_form').classList.add('hide');
            }
            break;

        case 'fecharBlcMsgError':
            resetMsgError();
            inputId.focus();
            break;

        default:
            break;
    }
}

function resetMsgError() {
    document.querySelector('#blc_msg_error').classList.add('hide');
    document.querySelector('#block_message_login').classList.add('hide');
    document.querySelector('#block_login_form').classList.remove('hide');
    document.querySelector('#title-msg-error').innerHTML = ''
    document.querySelector('#text-msg-error').innerHTML = '';
}

function verificaLogin() {
    
}

function playMsc(status) {
    if (music_temp !== 'music_login') {
        const soundGame = document.getElementById('musicGame');
        soundGame.volume = 0.1;
        soundGame.src = 'audio/login_sound.mp3';
        soundGame.play();
        music_temp = status;
    }
    showLoginScreen();
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