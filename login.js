var xhr = new XMLHttpRequest();
var data;
var userData;
var username;
var password;
var res;

userRequest();

function userRequest() {
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = JSON.parse(xhr.responseText);
    }
  }
  xhr.open("GET", "users.json", true);
  xhr.send();
}

function findUserObject(obj, username) {
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      const userObject = obj[key].find(item => item.hasOwnProperty(username));
      if (userObject) {
        return userObject[username];
      }
    }
  }
  return null;
}

function verifyLogin() {
  username = document.getElementById("input_user_id").value;
  password = document.getElementById("input_user_pass").value;
  userData = findUserObject(data, username);
  if (userData) {
    if (userData[0].password === password) {
      conSuccess();
    } else {
      invalidLogin();
    }
  }
}

function verifyWorld() {
  const items = document.getElementsByName('world');
  for (var i = 0; i < items.length; i++) {
    if (items[i].checked) {
      resp = items[i].value
      break;
    }
  }

  if (userData) {
    var validWorld = userData[0].auth_server === resp
    if (validWorld !== undefined) {
      return validWorld;
    }else {
      return "data error";
    }
  }
}

function loadCharSelected(id) {
  if(userData[0].slots[0]){
    
  }
}