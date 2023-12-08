function verificaLogin() {
  var username = document.getElementById("input_user_id").value;
  var password = document.getElementById("input_user_pass").value;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {

      var data = JSON.parse(xhr.responseText);

      var validUser = data.users.find(function (user) {
        return user.username === username && user.password === password;
      });

      if (validUser) {
        conSuccess();
      } else {
        invalidLogin();
      }
    }
  };

  xhr.open("GET", "users.json", true);
  xhr.send();
}

function conSuccess() {
  console.log('usuario validade com sucesso.');
  win_msg_error.classList.add('hide');
  win_login.classList.add('hide');
  win_select_world.classList.remove('hide');
  win_select_world.classList.add('fadeInAnim');
}