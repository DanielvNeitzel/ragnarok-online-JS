const newStyleChar = document.getElementById('newStyleChar');
var styleNum = 1;

function changeStyle(opt) {
  
  if (opt === 'prev' && styleNum >= 1) {
    styleNum = styleNum - 1;
  }
  if (opt === 'next' && styleNum <= 4) {
    styleNum = styleNum + 1;
  } else {
    styleNum = 1;
  }
  console.log(styleNum);
  newStyleChar.src = 'img/chars/aprendiz_' + styleNum + '.png';
}