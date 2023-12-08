

const input_user_id = document.getElementById('input_user_id');
const input_user_pass = document.getElementById('input_user_pass');

const win_select_world = document.getElementById('win_select_world');
const win_last_login = document.getElementById('win_last_login');
const block_message_login = document.getElementById('block_message_login');

const block_login_form = document.getElementById('block_login_form');

const win_msg_error = document.getElementById('win_msg_error');
const title_msg_error = document.getElementById('title_msg_error');
const text_msg_error = document.getElementById('text_msg_error');

const clickLBtnLogin = document.querySelectorAll('.click-effect-login');

const block_login = document.querySelector('.block_login');
const block_news = document.querySelector('.block_news');

var music_temp = '';
var effect_temp = '';

function clickInput(type) {
    switch (type) {
        case 'id':
            input_user_id.focus();
            break;

        case 'pass':
            input_user_pass.focus();
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
                input_user_id.focus();
                black_screen.style.display = "none";
            });
        }, 1000
    );
}

function cmd(selected) {
    switch (selected) {
        case 'exitGame':
            document.querySelector('#win_confirm_exit').style.zIndex = 1;
            document.querySelector('#win_confirm_exit').classList.remove('hide');
            break;

        case 'closeConfirmExit':
            document.querySelector('#win_confirm_exit').classList.add('hide');
            break;

        case 'resetPage':
            document.querySelector('#win_confirm_exit').classList.add('hide');
            location.replace(location.href);
            break;

        case 'loginGame':
            if (input_user_id.value !== '' || input_user_pass.value !== '') {
                verificaLogin();
            } else {
                invalidLogin();
            }
            break;

        case 'fecharBlcMsgError':
            resetMsgError();
            input_user_id.focus();
            break;

        case 'fecharWinSelectWorld':
            block_login.classList.remove('hide');
            block_news.classList.remove('hide');
            win_select_world.classList.add('hide');
            block_login.classList.add('fadeInAnim');
            block_news.classList.add('fadeInAnim');
            break;

        default:
            break;
    }
}

function invalidLogin() {
    win_msg_error.style.zIndex = 1;
    win_msg_error.classList.remove('hide');
    title_msg_error.innerHTML = 'Mensagem'
    text_msg_error.innerHTML = 'Usuário ou senha incorretos. Por favor, tente novamente';
    block_message_login.classList.remove('hide');
    block_login_form.classList.add('hide');
    input_user_pass.value = '';
}

function resetMsgError() {
    win_msg_error.classList.add('hide');
    block_message_login.classList.add('hide');
    block_login_form.classList.remove('hide');
    title_msg_error.innerHTML = ''
    text_msg_error.innerHTML = '';
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