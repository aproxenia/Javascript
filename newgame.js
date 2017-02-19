function myInterval(){
  setInterval(myClickEvent, 10);
}
function myClickEvent() {
 var element = document.getElementById('horse1');
 var positionTop = element.offsetTop;
 var positionLeft = element.offsetLeft;
 element.style.left = positionLeft + 1 + 'px';

}
function LoadFunction() {
 var element = document.getElementById('start');
 element.addEventListener('click',myInterval);

}
document.addEventListener('DOMContentLoaded', LoadFunction);
