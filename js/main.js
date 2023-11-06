
//Calcular edad promedio de personas ingresadas


const calcularPromedioEdad = () => {

    let cantidadPersonas = parseInt(prompt("ingrese la cantidad de personas que desea calcular el promedio de edad"))

    while (isNaN(cantidadPersonas)) {
        cantidadPersonas = parseInt(prompt("ingrese la cantidad de personas que desea calcular el promedio de edad. Solo se aceptan numeros"));
    }

    let totalEdades = 0

    for(i=0; i < cantidadPersonas; i++){

        let edad = parseInt(prompt("ingrese su edad"))
        while (isNaN(edad)) {
            edad = parseInt(prompt("ingrese su edad, solo se aceptan numeros"));
        }
        
        
        totalEdades=totalEdades+edad

    }

    let promedioEdad = totalEdades/cantidadPersonas

    return "el promedio de edad es: " + promedioEdad
}

console.log(calcularPromedioEdad());
