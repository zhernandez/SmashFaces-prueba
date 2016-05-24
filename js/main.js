//Variable que se movera entre ambos arreglos
var azar; 
//Arreglo de fotos//
var personas = [
 "Ana.jpg", "Analy.jpg", 
 "Areli.jpg", "Beatriz.jpg", 
 "Cecilia.jpg", "Claudia.jpg", 
 "Daniela.jpg", "Elisa.jpg", 
 "Evelyn.jpg", "Gabriela.jpg", 
 "Grissel.jpg", "Guadalupe.jpg", 
 "Johana.jpg", "Joyce.jpg", 
 "Ofelia.jpg", "Patricia.jpg", 
 "Sharon.jpg", "Heredia.jpg", 
 "Karen.jpg", "Monica.jpg",  
 "Karla.jpg", "Leslie.jpg", 
 "Mishel.jpg", "Milca.jpg", 
 "Tayde.jpg", "Naibit.jpg", 
 "Nayeli.jpg", "Nelly.jpg", 
 "Reyna.jpg", "Adriana.jpg", 
 "Ruth-Lopez.jpg","Ruth-Vega.jpg",
 "Sandra-Bollo.jpg","Sandra-Diaz.jpg", 
 "Vianey.jpg", "Zazil.jpg"];
//Arreglos de nombres
var nombres = [
 "Ana", "Analy", 
 "Areli", "Beatriz", 
 "Cecilia", "Claudia", 
 "Daniela", "Elisa", 
 "Evelyn", "Gabriela", 
 "Grissel", "Guadalupe", 
 "Johana", "Joyce", 
 "Ofelia", "Patricia", 
 "Sharon", "Heredia", 
 "Karen", "Monica",  
 "Karla", "Leslie.", 
 "Mishel", "Milca", 
 "Tayde", "Naibit", 
 "Nayeli", "Nelly", 
 "Reyna", "Adriana", 
 "Ruth-Lopez","Ruth-Vega",
 "Sandra-Bollo","Sandra-Diaz", 
 "Vianey", "Zazil"];
//Funcion para mostrar imagenes al azar del arreglo//
function random(min,max){
  var numero = Math.random() * (max-min) + min;
  var entero = Math.floor(numero);
  return entero;
};
//Iniciar una nueva partida e ir eliminando cada imagen aprobada// 
function nuevaPartida(){
  var tamanoArreglo = nombres.length;
  
    if(tamanoArreglo >0){
      azar = random(0, tamanoArreglo);
      var imagen = 'fotos/' + personas[azar]
      $('#foto').attr('src', imagen);
    }else{
      alert('Ganaste!') 
    }
};
//Menu desplegable de sedes
function desplegable() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
});$('#sede').click




//Funciones del dropdown//
  $('.error').click(function(){
    alert ('No es tu sede');
});
  $('.sede').click(function(){
    var inicio = prompt('Bienvenida a este divertido juego, ¿Estás lista?');
    if (inicio === 'si'){
         nuevaPartida();
       }
  });

//Iniciar todo el DOM y verificar la correspondencia de texto y mandar error 
//si el usuario se equivoca
$(document).ready(function(){
  console.log('Inciando el juego');
    $('#check').click(function(){
      var nombre = $('#nombre').val();
      console.log('El usuario escribio: ' + nombre);

      var nombreAdivinar = nombres[azar];
      console.log('El nombre correcto es: ' + nombreAdivinar);

      if (nombre === nombreAdivinar){
        //quitamos el elemento que ya paso//
          nombres.splice(azar,1);
          personas.splice(azar,1);
         nuevaPartida();
       }else{
        alert('Error, no olvides las mayusculas')
       }
    });
      nuevaPartida();
  });