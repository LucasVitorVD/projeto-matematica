let inputA = document.querySelector('.a')
let inputB = document.querySelector('.b')
let inputC = document.querySelector('.c')
let calcBtn = document.querySelector('.calcBtn')

calcBtn.addEventListener('click', calcular)

function calcular() {
    ponto(inputA.value, inputB.value, inputC.value)
    limparCampo()
}

function ponto(t1=0, t2=0, t3=0) {
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
    raio(c, pontos)
    return pontos
}

function raio(c, pontos) {
    let raio = Math.sqrt(c)

    if (raio % 1 !== 0) {
        raio = `√${c}`
    }
    resultado(pontos, raio)
    return raio
}

function resultado(pontos, raio) {
    const areaResultado = document.querySelector('.resultado')
    areaResultado.textContent = `Pontos: ${pontos} ; Raio: ${raio}` 
    console.log()
}

function limparCampo() {
    inputA.value = inputB.value = inputC.value = ''
}