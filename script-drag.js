var object = document.getElementsByClassName('draggable'),
  initX, initY, firstX, firstY;

object[0].addEventListener('mousedown', function (e) {

  object[0].style.background = "#ffffffb0";
  e.preventDefault();
  initX = this.offsetLeft;
  initY = this.offsetTop;
  firstX = e.pageX;
  firstY = e.pageY;

  this.addEventListener('mousemove', dragIt, false);

  window.addEventListener('mouseup', function () {
    object[0].style.background = "#ffffff";
    object[0].removeEventListener('mousemove', dragIt, false);
  }, false);

}, false);

object[0].addEventListener('touchstart', function (e) {

  e.preventDefault();
  initX = this.offsetLeft;
  initY = this.offsetTop;
  var touch = e.touches;
  firstX = touch.pageX;
  firstY = touch.pageY;

  this.addEventListener('touchmove', swipeIt, false);

  window.addEventListener('touchend', function (e) {
    e.preventDefault();
    object[0].removeEventListener('touchmove', swipeIt, false);
  }, false);

}, false);

function dragIt(e) {
  this.style.left = initX + e.pageX - firstX + 'px';
  this.style.top = initY + e.pageY - firstY + 'px';
}

function swipeIt(e) {
  var contact = e.touches;
  this.style.left = initX + contact.pageX - firstX + 'px';
  this.style.top = initY + contact.pageY - firstY + 'px';
}