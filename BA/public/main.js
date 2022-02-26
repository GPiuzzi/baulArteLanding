let inicio = document.getElementById('inicio');
let sobre = document.getElementById('sobre')
let convo = document.getElementById('convocatoria')
let p1 =  document.getElementById('pag1');
let p2 = document.getElementById('pag2');
let p3 = document.getElementById('pag3');

inicio.addEventListener('click', function(){
  p1.classList.remove("oculto");
  p2.classList.add("oculto");
  p3.classList.add("oculto");
  
})

  sobre.addEventListener('click', function(){
p1.classList.add("oculto");
p2.classList.remove("oculto");
p3.classList.add("oculto");

  })
function changeFunc(value){
switch (value){
  case "1": {
    p1.classList.remove("oculto");
    p2.classList.add("oculto");
    p3.classList.add("oculto");
    break;
  }
  case "2":{
    p1.classList.add("oculto");
    p2.classList.remove("oculto");
    p3.classList.add("oculto");
    break;
  }
case "3":{
  window.open('https://beacons.ai/galeria.baularte' )
  break;
}
case "4":{
  p1.classList.add("oculto");
  p2.classList.add("oculto");
  p3.classList.remove("oculto");
  break;
}}


  }
  convo.addEventListener('click', function(){
p1.classList.add("oculto");
p2.classList.add("oculto");
p3.classList.remove("oculto");

  })

function moveToSelected(element) {

    if (element == "next") {
      var selected = $(".selected").next();
    } else if (element == "prev") {
      var selected = $(".selected").prev();
    } else {
      var selected = element;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();

  
    $(selected).removeClass().addClass("selected");
    $(prev).removeClass().addClass("prev button");
    $(next).removeClass().addClass("next button");
  
  }
  
  // Eventos teclado
  $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          moveToSelected('prev');
          break;
  
          case 39: // right
          moveToSelected('next');
          break;
  
          default: return;
      }
      e.preventDefault();
  });
  
  $('#carousel div').click(function() {
    moveToSelected($(this));
  });
  
  $('#prev').click(function() {
    moveToSelected('prev');
  });
  
  $('#next').click(function() {
    moveToSelected('next');
  });

  $(window).scroll(function(){
    if (window.pageYOffset > 300) {
      nav.style.background = "#152d42";
  
    } else {
      nav.style.transition =  '1s' ;
      nav.style.background=  '#152d42da';
      
    }
  })
  
