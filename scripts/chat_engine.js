const liveChat = document.getElementById('live-chat');
const inputChat = document.getElementById('inputChat');

function rolarParaFinal() {
  liveChat.scrollTo({
    top: liveChat.scrollHeight,
    behavior: 'auto' // ou 'auto' para rolar instantaneamente
  });
}

document.addEventListener('keypress', function (event) {
  if (event.key === 'Enter' && inputChat.value.length === 0 && onMap === true) {
    inputChat.disabled = !inputChat.disabled;
    if (!inputChat.disabled) {
      inputChat.focus();
    }
  }
  if (event.key === 'Enter' && inputChat.value.length > 0 && onMap === true ) {
    liveChat.innerHTML += '<span class="msg_player">' + currentUserSelected.name + ': ' + inputChat.value + '<br></span>';
    rolarParaFinal();
    inputChat.value = '';
  }
});