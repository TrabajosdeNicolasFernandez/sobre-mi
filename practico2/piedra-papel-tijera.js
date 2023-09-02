// PARA QUE EL USUARIO INGRESE SUS DATOS
var nombreJugador = "";
var entradaNombre = document.getElementById("nombre");
entradaNombre.addEventListener("input", function () {
    nombreJugador = entradaNombre.value;
});


// PARA QUE EL USUARIO ELIJA SUS OPCIONES
var eleccionJugador = "";
var eleccionPC = "";
var opciones = document.getElementById("opciones-juego").getElementsByTagName("img");

for (var i = 0; i < opciones.length; i++) {
    opciones[i].addEventListener("click", function () {
        eleccionJugador = this.alt;
        eleccionPC = generarEleccionAleatoria();
        determinarGanador(eleccionJugador, eleccionPC);
    });
}

function generarEleccionAleatoria() {
    var opciones = ["Piedra", "Papel", "Tijera"];
    var indiceAleatorio = Math.floor(Math.random() * 3);
    return opciones[indiceAleatorio];
}

// PARA DETERMINAR EL GANADOR Y VER EL CONTADOR DE PUNTUACIONES
var puntuacionJugador = 0;
var puntuacionPC = 0;

function determinarGanador(jugador, pc) {
    if (jugador === pc) {
        // Empate
    } else if ((jugador === "Piedra" && pc === "Tijera") ||
               (jugador === "Papel" && pc === "Piedra") ||
               (jugador === "Tijera" && pc === "Papel")) {
        puntuacionJugador++;
    } else {
        puntuacionPC++;
    }

    document.getElementById("puntuacion-jugador").textContent = "Jugador: " + puntuacionJugador;
    document.getElementById("puntuacion-pc").textContent = "PC: " + puntuacionPC;
}

// PARA CONTROLAR LAS RONDAS

var maxIntentos = 5;
var intentoActual = 0;

function verificarFinJuego() {
    intentoActual++;
    if (intentoActual === maxIntentos || puntuacionJugador === 3 || puntuacionPC === 3) {
        mostrarGanador();
        deshabilitarOpciones();
    }
}

// PARA MOSTRAR EN PANTALLA EL GANADOR
function mostrarGanador() {
    var resultadoDiv = document.getElementById("resultado");
    if (puntuacionJugador === 3) {
        resultadoDiv.textContent = "¡Ganaste el juego!";
    } else if (puntuacionPC === 3) {
        resultadoDiv.textContent = "¡PC ganó el juego!";
    } else {
        resultadoDiv.textContent = "Fin del juego. Puntuación final:";
    }
}

function deshabilitarOpciones() {
    for (var i = 0; i < opciones.length; i++) {
        opciones[i].removeEventListener("click", function () {
            
        });
    }
}

// PARA ANUNCIAR EL GANADOR Y REINICIAR EL JUEGO

document.getElementById("boton-reiniciar").addEventListener("click", function () {
    
    puntuacionJugador = 0;
    puntuacionPC = 0;
    intentoActual = 0;
    document.getElementById("puntuacion-jugador").textContent = "Jugador: 0";
    document.getElementById("puntuacion-pc").textContent = "PC: 0";
    document.getElementById("resultado").textContent = "el resultado es: ";
    habilitarOpciones();
});


function habilitarOpciones() {
    for (var i = 0; i < opciones.length; i++) {
        opciones[i].addEventListener("click", function () {
            
        });
    }
}