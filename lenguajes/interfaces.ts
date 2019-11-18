interface Animal {
    especie: string;
}

class Perro implements Animal {
    constructor (
        public especie: string = 'Perro',
        public name: string = ''
    ) {}
}


let an1: Animal
an1 = { especie: '' }

let rufo: Perro;
let tigre : Perro;
rufo = new Perro(null, 'Rufo')
tigre = { especie: 'Perro', name: 'Tigre'} 

console.log(rufo, tigre)