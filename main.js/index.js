//const para body
const body = document.querySelector('body');



const main = document.getElementById("main");
const form = document.getElementById("form");

//input de la forma
const sentimiento = document.getElementById("sentimiento");

form.addEventListener('submit', (e) => {


//editar la accion por defecto de la forma
e.preventDefault();

});

// Evento global para saber a que se esta dando click
main.addEventListener('click', (e) => {
  if(e.target.id === 'feliz'){
    body.removeAttribute('class');
    body.classList.add('feliz');
  }

  if(e.target.id === 'triste'){
    body.removeAttribute('class');
    body.classList.add('triste');
  }

  if(e.target.id === 'tranquilo'){
    body.removeAttribute('class');
    body.classList.add('tranquilo');
  }

  if(e.target.id === 'enojado'){ 
    body.removeAttribute('class');
    body.classList.add('enojado');
  }

});