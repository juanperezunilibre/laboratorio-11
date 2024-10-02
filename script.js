let btnEvaluacion = document.getElementById("eval-empleado");
let btnCheckStock = document.getElementById("check-stock");
let btnCalculateOff = document.getElementById("calculate-off");
let btnPlayground = document.getElementById("playground")


// Punto 1
btnEvaluacion.addEventListener("click", function() {
    // cal >= 90 - Destacado , >= 70 < 90 - Desempeño satisfactorio, desempeño insatifactorio

    alert("Bienvenido al módulo de evaluación de empleado, ingresa tu nombre y el valor de la evaluación del resultado de tu auditoría.")

    let name = prompt("Nombre del empleado: ")
    let calificacion = parseInt(prompt("Resultado de la evaluación: "))

    let message = `${name}, tu calificafión es: `

    if(calificacion >= 90){  // >= 90
        message += "Destacado."
    } else if (calificacion >= 70 && calificacion < 90) {
        message += "Desempeño satisfactorio."
    } else {
        message += "Desempeño insatisfactorio"
    }

    alert(message)
})

// Punto 2
btnCheckStock.addEventListener("click", function() {
    alert("Módulo de gestión de stock")
})

// Punto 3
btnCalculateOff.addEventListener("click", function() {
    alert("Módulo de descuento")
})

// Punto 4
btnPlayground.addEventListener("click", function() {
    alert("Módulo de juego de adivinanza")
})

