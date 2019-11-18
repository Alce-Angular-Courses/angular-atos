let saludo: string;
let edad: number;
let isAlumno: boolean;
saludo = 'Hola mundo';
edad = 23;
isAlumno = true;
let algo: any;
let id: string | number;

console.log(saludo);

const empresa: string = 'Atos';

let datos: any[]
let datos2: Array<any>
let tupla: [any, any]

datos = []
datos.push(1)


const aNumbers = [1, 3, 5]
let aNumbers2 = aNumbers

aNumbers.push(12, 67, 89)
console.log(aNumbers2)

let aClonNumbers = [...aNumbers]
let aClonNumbers2 = aNumbers.map( item => item )
let aClonNumbers3 = JSON.parse(JSON.stringify(aNumbers))


let aClonNumbers4 = Object.assign([], aNumbers)

