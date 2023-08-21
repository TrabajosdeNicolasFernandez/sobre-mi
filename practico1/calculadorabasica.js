//funcion para dividir

function division(digito1, digito2) {
    if (digito2 === 0) {
        return "No es posible dividir por cero";
    } else {
        return digito1 / digito2;
    }
}

//funcion para multiplicar

function multiplicacion(digito1, digito2) {
    return digito1 * digito2;
}

//funcion para restar

function resta(digito1, digito2) {
    return digito1 - digito2;
}

//funcion para sumar

function suma(digito1, digito2) {
    return digito1 + digito2;
}

// funcion para que la calculadora nos devuelva los resultados
function ObtenerResultados() {

    let digito1 = parseFloat(document.getElementById("digito1").value);
    let digito2 = parseFloat(document.getElementById("digito2").value);
    let operacion = document.getElementById("operaciones").value;
    let resultado;

    switch (operacion) {
        case "division":
            resultado = division(digito1, digito2);
            break;

        case "multiplicacion":
            resultado = multiplicacion(digito1, digito2);
            break;

        case "resta":
            resultado = resta(digito1, digito2);
            break;

        case "suma":
            resultado = suma(digito1, digito2);
            break;

        default:
            resultado = "NO INGRESO DIGITOS"
    }

    document.getElementById("resultado").textContent = "= " + resultado;
}

//me falta el boton para limpiar, lo se, no me salio, asi que directamente lo borre//





    
    

