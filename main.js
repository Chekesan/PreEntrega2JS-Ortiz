let nombre = prompt(`Ingresa tu nombre.`);

if (nombre === null || nombre === "") {
    alert(`Intenta de nuevo ingresa tu nombre`);
    usuario();
} else if (!/^[a-zA-Z]{3,}$/.test(nombre)) {
    alert("el nombre debe ser solo letras y con minimo 3 letras");
    usuario();
} else {
    alert(`Bienvenido ${nombre}, vamos a recomendarte una clase DND respecto a tu fecha de nacimiento`);
}

let diaNacimiento = parseInt(prompt(`Ingresa tu dia de nacimiento.`));

while (diaNacimiento < 1 || diaNacimiento > 31 || isNaN(diaNacimiento)) {
    diaNacimiento = parseInt(prompt(`favor de intregar tu dia de nacimiento, entre 1 al 31`));
}

let mesNacimeinto = parseInt(prompt(`Ingresa tu mes de nacimiento en numero.`));

while (mesNacimeinto < 1 || mesNacimeinto > 12 || isNaN(mesNacimeinto)) {
    mesNacimeinto = parseInt(prompt(`favor de intregar tu mes de nacimiento, entre 1 al 12`));
}

let hoy = new Date();
let cumpleanos = new Date(hoy.getFullYear(), mesNacimeinto - 1, diaNacimiento);

if (cumpleanos < hoy) { cumpleanos.setFullYear(cumpleanos.getFullYear() + 1); }

let diasFaltantes = Math.ceil((cumpleanos - hoy) / (1000 * 60 * 60 * 24));

alert(`Faltan ${diasFaltantes} días para tu cumpleaños.`);

let signo;
let claseDeterminada;

function claseDND() {
    if (mesNacimeinto === 1) {
        if (diaNacimiento <= 19) {
            signo = "Capricornio";
        } else {
            signo = "Acuario";
        }
    } else if (mesNacimeinto === 2) {
        if (diaNacimiento <= 18) {
            signo = "Acuario";
        } else {
            signo = "Piscis";
        }
    } else if (mesNacimeinto === 3) {
        if (diaNacimiento <= 20) {
            signo = "Piscis";
        } else {
            signo = "Aries";
        }
    } else if (mesNacimeinto === 4) {
        if (diaNacimiento <= 19) {
            signo = "Aries";
        } else {
            signo = "Tauro";
        }
    } else if (mesNacimeinto === 5) {
        if (diaNacimiento <= 20) {
            signo = "Tauro";
        } else {
            signo = "Géminis";
        }
    } else if (mesNacimeinto === 6) {
        if (diaNacimiento <= 21) {
            signo = "Géminis";
        } else {
            signo = "Cancer";
        }
    } else if (mesNacimeinto === 7) {
        if (diaNacimiento <= 22) {
            signo = "Cancer";
        } else {
            signo = "Leo";
        }
    } else if (mesNacimeinto === 8) {
        if (diaNacimiento <= 22) {
            signo = "Leo";
        } else {
            signo = "Virgo";
        }
    } else if (mesNacimeinto === 9) {
        if (diaNacimiento <= 22) {
            signo = "Virgo";
        } else {
            signo = "Libra";
        }
    } else if (mesNacimeinto === 10) {
        if (diaNacimiento <= 23) {
            signo = "Libra";
        } else {
            signo = "Escorpio";
        }
    } else if (mesNacimeinto === 11) {
        if (diaNacimiento <= 21) {
            signo = "Escorpio";
        } else {
            signo = "Sagitario";
        }
    } else if (mesNacimeinto === 12) {
        if (diaNacimiento <= 21) {
            signo = "Sagitario";
        } else {
            signo = "Capricornio";
        }
    }

    if (signo === "Capricornio" || signo === "Acuario") {
        claseDeterminada = "Brujo";
    } else if (signo === "Piscis" || signo === "Bardo") {
        claseDeterminada = "Bardo";
    } else if (signo === "Aries" || signo === "Guardabosques") {
        claseDeterminada = "Guardabosques";
    } else if (signo === "Tauro" || signo === "Monje") {
        claseDeterminada = "Monje";
    } else if (signo === "Géminis" || signo === "Druida") {
        claseDeterminada = "Druida";
    } else if (signo === "Cancer" || signo === "Paladín") {
        claseDeterminada = "Paladín";
    } else if (signo === "Leo" || signo === "Hechicero") {
        claseDeterminada = "Hechicero";
    } else if (signo === "Virgo" || signo === "Mago") {
        claseDeterminada = "Mago";
    } else if (signo === "Libra" || signo === "Pícaro") {
        claseDeterminada = "Pícaro";
    } else if (signo === "Escorpio" || signo === "Luchador") {
        claseDeterminada = "Luchador";
    } else if (signo === "Sagitario" || signo === "Bárbaro") {
        claseDeterminada = "Bárbaro";
    } else {
        claseDeterminada = "";
    }
}

claseDND();
alert(`Eres ${signo}, deberías jugar como ${claseDeterminada} ${nombre}`);
alert(`Juega y diviertete  ${claseDeterminada} ${nombre}`);

const brujo = {
    nombre, 
    claseDeterminada, 
    poderes: ['rayo negativo', 'armadura magica', 'rayo'],
    inventario: [`varita`, `anillo`, `amuleto`]
  }
  
  function mostrarContenido(brujo) {
    alert(`En poderes hay: ${brujo.poderes.join(', ')}`);
    alert(`En inventario hay: ${brujo.inventario.join(', ')}`);
  }
 mostrarContenido(brujo);

const nuevosPoderes = prompt("Ingresa nuevos poderes separados por coma");
const nuevoInventario = prompt("Ingresa nuevos elementos del inventario separados por coma");

brujo.poderes.push(...nuevosPoderes.split(',')); brujo.inventario.push(...nuevoInventario.split(','));

brujo.inventario.sort();

mostrarContenido(brujo);

const Bardo = {
    nombre, 
    claseDeterminada, 
    poderes: ['canto sonico', 'fecha magica', 'animar'],
    inventario: [`flauta`, `espada`, `arco`]
  }  

  const Guardabosques = {
    nombre, 
    claseDeterminada, 
    poderes: ['compañero animal', 'lluvia de flechas', 'deteccion'],
    inventario: [`arco`, `espada`, `arco`]
  }  