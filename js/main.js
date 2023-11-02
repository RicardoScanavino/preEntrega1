
//Calcular edad promedio de personas ingresadas


const calcularPromedioEdad = () => {

    let cantidadPersonas = parseInt(prompt("ingrese la cantidad de personas que desea calcular el promedio de edad"))

    let totalEdades = 0

    for(i=0; i < cantidadPersonas; i++){
        let edad = parseInt(prompt("ingrese su edad"))

        totalEdades=totalEdades+edad

    }

    let promedioEdad = totalEdades/cantidadPersonas

    return "el promedio de edad es: " + promedioEdad
}

console.log(calcularPromedioEdad());
