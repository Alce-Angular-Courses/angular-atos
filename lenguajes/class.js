class Person {
    constructor(name = '', edad = null) {
        this.name = name,
        this.edad = edad
    }

    saludar() {
        console.log(`Hola, soy ${this.name}`)
    }
}

const p1 = new Person()

class Alumno extends Person {
    constructor(name = '', edad = null, curso = '') {
        super(name, edad)
        this.curso = curso
    }

    saludar() {
        super.saludar()
        console.log('Estoy estudiando')
    }
}

const a1 = new Alumno('Pepe') 
a1.saludar()
const a2 = new Alumno('Juan') 

a1.altura = 176

console.log(a1, a2)