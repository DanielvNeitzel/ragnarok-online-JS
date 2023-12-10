var data;
var xhr = new XMLHttpRequest();

function userRequest() {
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = JSON.parse(xhr.responseText);
    }
  }
}

function verifyLogin() {
  var username = document.getElementById("input_user_id").value;
  var password = document.getElementById("input_user_pass").value;

  userRequest();

  if(data) {
    var validUser = data.users.find(function (user) {
      return user.username === username && user.password === password;
    });

    if (validUser) {
      conSuccess();
    } else {
      invalidLogin();
    }
  }

  xhr.open("GET", "users.json", true);
  xhr.send();
}

function verifyWorld() {
  var res = '';
  const items = document.getElementsByName('world');
  for (var i = 0; i < items.length; i++) {
    if (items[i].checked) {
      res = items[i].value
      break;
    }
  }  
  var validWorld = data.users.find(function (user) {
    return user.auth_server === res
  });

  if (validWorld) {
    console.log(res);
  } else {
    win_msg_error.style.zIndex = 2;
    win_msg_error.classList.remove('hide');
    title_msg_error.innerHTML = 'Mensagem'
    text_msg_error.innerHTML = 'Você não tem permissão pra entrar nesse mundo.';
  }
}

function conSuccess() {
  console.log('usuario validado com sucesso.');
  win_msg_error.classList.add('hide');
  win_login.classList.add('hide');
  win_select_world.classList.remove('hide');
  win_select_world.classList.add('fadeInAnim');
}