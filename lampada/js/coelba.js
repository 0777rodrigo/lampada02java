//dom

const lampada = document . querySelector('#lampada')
const acender = document . querySelector('#ligada')
const desligar = document . querySelector('#desligada')
const quebrar = document . querySelector('#quebrada')



//evento

acender . addEventListener('click', ligaluz)
desligar . addEventListener('click', desligaluz)
quebrar . addEventListener('click', quebraluz)

//funcao - ultima parte

function ligaluz(){

lampada . src = "images/acesa.gif"

}

function desligaluz(){

lampada . src = "images/apagada (1).gif"    


}

function quebraluz(){

lampada . src = "images/quebrada (1).jpg"

}
