const palabras = [
  'PALABRA', 'LIBERTADOR', 'TERMINAR', 'HABILITADO', 'MENTIRA', 'IMPRESENTABLE', 'CONDICION', 'AUSENTE', 'CENSURADO', 'TWITTER', 'FACEBOOK', 'INSTAGRAM', 'TIKTOK',
  'FELICIDAD', 'HERMOSA', 'MAQUINA', 'BESTIA', 'ENALTECER', 'CORBATA', 'DESOXIRRIBONUCLEICO', 'ENCUENTRO'];

const palabra = palabras[Math.floor(Math.random() * palabras.length)];


let palabraConGuiones = palabra.replace(/./g, '_ ');


document.getElementById('output').innerHTML = palabraConGuiones;

let fallo = false;

let contadorfallos = 0;


String.prototype.replaceAt = function (index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

document.getElementById('calcular').addEventListener('click', () => {
  let letra = document.getElementById('letra').value.toUpperCase();

  if (letra.length == 0) {
    alert("debes ingresar algo")
  }

  if (!palabra.includes(letra)) {
    contadorfallos++
    document.getElementById('ahorcado').style.backgroundPosition = (-290 * contadorfallos) + 'px 0';
    if (contadorfallos == 5) {
      alert("PERDISTE :'(")
    }
    return;
  }
  for (let i = 0; i < palabra.length; i++) {
    if (letra == palabra[i]) {
      console.log('entro aqui')
      palabraConGuiones = palabraConGuiones.replaceAt(i * 2, letra);
    }
  
  if (palabraConGuiones.indexOf('_')<0){
    alert('GANASTE :)')
  }
  }

  



  document.getElementById('output').innerHTML = palabraConGuiones;


  document.getElementById('letra').value = '';
  document.getElementById('letra').focus();

});



