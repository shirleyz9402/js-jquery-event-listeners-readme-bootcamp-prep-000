//define functions here
function getIt(){
$('p').on('click',function(){
  window.alert('Hey!')
  })
}
function frameIt(){
  $('img').on('load', function() {
    $(img).addClass('tasty')
  })
}
function pressIt () {
$(document).ready(function(){
getIt()
frameIt()
});
