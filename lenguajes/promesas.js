function algoAsinc() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {}, 2000)
    })
}

let x = algoAsinc()
console.log(x)