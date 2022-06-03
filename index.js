function calcular(t1 = 0, t2 = 0, t3 = 0) {
    let a = (t1 / 2)
    let b = (t2 / 2)
    let c = (t3 * (-1)) + (Math.pow(a, 2)) + (Math.pow(b, 2))

    if (a < 0 || b < 0) {
        a *= -1 
        b *= -1
    } else {
        a *= -1 
        b *= -1
    }

    let pontos = `(${a}, ${b})`

    let raio = Math.sqrt(c)

    if (raio % 1 !== 0) {
        raio = `√${c}`
    }

    return `Pontos: ${pontos} ; raio: ${raio}`
}

console.log(calcular(-6, -2, -6))

