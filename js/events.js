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
  $(input).on('keydown', function() {
    if (e.which === 71) {
      window.alert('G was pressed')
    }
  }
}
$(document).ready(function(){
getIt()
frameIt()
});
