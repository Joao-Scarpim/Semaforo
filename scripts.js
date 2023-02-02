const buttons = document.querySelector('.buttons')
const img = document.getElementById('semaforo')
let colorIndex = 0
let intervalid = null

const trafficlght = (event) => {
    clearInterval(intervalid)
    turnOn[event.target.id]();

}
const nextColor = () => {
    colorIndex++
    if (colorIndex >= 3) {
        colorIndex = 0
    }
}

function changeColor() {
    const colores = ['vermelho', 'amarelo', 'verde']
    turnOn[colores[colorIndex]]()
    nextColor() 
}

const turnOn = {
    'vermelho': () => img.src = './img/vermelho.png',
    'amarelo': () => img.src = './img/amarelo.png',
    'verde': () => img.src = './img/verde.png',
    'auto': () => intervalid = setInterval(changeColor, 1000)
}

buttons.addEventListener("click", trafficlght) 