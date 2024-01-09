const newStyleChar = document.getElementById('newStyleChar');

const newUserFor = document.getElementById('newUserFor');
const newUserAgi = document.getElementById('newUserAgi');
const newUserVit = document.getElementById('newUserVit');
const newUserInt = document.getElementById('newUserInt');
const newUserDes = document.getElementById('newUserDes');
const newUserSor = document.getElementById('newUserSor');

const btnAddFor = document.querySelector('.btn-add-for');
const btnAddAgi = document.querySelector('.btn-add-agi');
const btnAddVit = document.querySelector('.btn-add-vit');
const btnAddInt = document.querySelector('.btn-add-int');
const btnAddDes = document.querySelector('.btn-add-des');
const btnAddSor = document.querySelector('.btn-add-sor');

var styleNumDefault = 1;

let default_stats = {
  for: 5,
  agi: 5,
  vit: 5,
  int: 5,
  des: 5,
  sor: 5,
};

updatePoints();

function updatePoints() {
  newUserFor.innerHTML = default_stats.for;
  newUserAgi.innerHTML = default_stats.agi;
  newUserVit.innerHTML = default_stats.vit;
  newUserInt.innerHTML = default_stats.int;
  newUserDes.innerHTML = default_stats.des;
  newUserSor.innerHTML = default_stats.sor;

  btnAddFor.innerHTML = default_stats.for;
  btnAddAgi.innerHTML = default_stats.agi;
  btnAddVit.innerHTML = default_stats.vit;
  btnAddInt.innerHTML = default_stats.int;
  btnAddDes.innerHTML = default_stats.des;
  btnAddSor.innerHTML = default_stats.sor;
}

function changeStyle(opt) {
  if (opt === 'next') {
    if (styleNumDefault < 4) {
      styleNumDefault = styleNumDefault + 1;
    } else {
      styleNumDefault = 1;
    }
  }
  if (opt === 'prev') {
    if (styleNumDefault >= 2) {
      styleNumDefault = styleNumDefault - 1;
    } else {
      styleNumDefault = 4;
    }
  }
  console.log(styleNumDefault);
  newStyleChar.src = 'img/chars/aprendiz_' + styleNumDefault + '.png';
}

function addNewPoint(stats) {
  switch (stats) {
    case 'for':
      if(default_stats.for < 9){
        default_stats.for = default_stats.for + 1;
        default_stats.int = default_stats.int - 1;
      }
      break;

    case 'agi':
      if(default_stats.agi < 9){
        default_stats.agi = default_stats.agi + 1;
        default_stats.des = default_stats.des - 1;
      }
      break;

    case 'vit':
      if(default_stats.vit < 9){
        default_stats.vit = default_stats.vit + 1;
        default_stats.sor = default_stats.sor - 1;
      }
      break;

    case 'int':
      if(default_stats.int < 9){
        default_stats.int = default_stats.int + 1;
        default_stats.for = default_stats.for - 1;
      }
      break;

    case 'des':
      if(default_stats.des < 9){
        default_stats.des = default_stats.des + 1;
        default_stats.agi = default_stats.agi - 1;
      }
      break;

    case 'sor':
      if(default_stats.sor < 9){
        default_stats.sor = default_stats.sor + 1;
        default_stats.vit = default_stats.vit - 1;
      }
      break;

    default:
      break;
  }
  updatePoints();
}

function createNewPlayer() {
  
}