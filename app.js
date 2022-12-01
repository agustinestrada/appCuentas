let cantidadDeComensales = parseInt(prompt('Introduce el total de las personas'))
let participantes = []
let totalDivision = 0
let selector = document.getElementById('select-persona')
let personas = []
let calcular = document.querySelector('button.calcular')
let tablaComensales = document.getElementById('tablaid')
let sumaTotal = 0
let division
let saldo = document.querySelector('div.saldo')


// Inputs
let nombre = document.querySelector('select#select-persona')
let carga = document.querySelector('input#aporte')

class Comensal {
    constructor(nombre) {  
      this.nombre = nombre,
      this.aporte = 0,
      this.saldito = 0
      
    }
  }

while (isNaN(cantidadDeComensales)) {
    cantidadDeComensales = parseInt(prompt('Introduce el total de las personas'))
}

for (let i = 1; i <= cantidadDeComensales; i++) {
    participantes.push(prompt(`Ingrese el nombre del comensal ${i}`))  
}

for (let i = 0; i < participantes.length ; i++) {
    selector.options[i] = new Option(`${participantes[i]}`,`${participantes[i]}`)
    personas.push(new Comensal(participantes[i]))
}

let formulario = document.querySelector('form.inputs')


function crearTabla(lista) {
    let stringTabla = "<tr><th>Nombre</th><th>Aporte Total</th><th>Saldo</th></tr>"
    
    personas.forEach(persona => {
        let fila = "<tr> <td>"
        fila += persona.nombre
        fila += "</td>"
        
        fila += "<td>"
        fila += persona.aporte
        fila += "</td>"

        fila += "<td>"
        fila += persona.saldito
        fila += "</td>"
        
        fila += "</tr>"
        
        stringTabla += fila
        
        //console.log(stringTabla);
    });
    return stringTabla
}

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

    if (carga.value <= 0) {
        alert('Por favor ingresar un numero valido')
        carga.value = 0
    }else{
        let aportante = personas.find(i => i.nombre == nombre.value)

        aportante.aporte += parseInt(carga.value)
        tablaComensales.innerHTML = crearTabla(personas)
        
        personas.forEach(persona =>{
            sumaTotal += persona.aporte
        })
    }
    carga.value = 0
})

calcular.addEventListener('click',() => {
    
    if (personas[0].saldito != 0) {
        alert('Por favor vuelva a cargar la pagina')
    }else{
        division = Math.floor(sumaTotal/cantidadDeComensales)
        saldo.innerHTML = `Son ${division} por pera`
        
        personas.forEach(persona =>{
            persona.saldito += division-persona.aporte
        })
        
        tablaComensales.innerHTML = crearTabla(personas)
    }

    
})

tablaComensales.innerHTML = crearTabla(personas)
