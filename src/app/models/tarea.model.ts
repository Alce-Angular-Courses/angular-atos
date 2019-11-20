export class TareaModel {
    constructor(
        public nombre: string = '',
        public isCompleted: boolean = false
    ) {}
}


// Otra opcion seria:
export interface TareaIf {
    nombre: string,
    isCompleted: boolean
}
