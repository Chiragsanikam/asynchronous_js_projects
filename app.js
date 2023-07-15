let startBtn = document.querySelector('.start')
let stopBtn = document.querySelector('.stop')

let randomColour = function(){
    let hex = '0123456789ABCDEF'
    let colour = '#'
    for(let i =0 ; i<6; i++){
        colour = colour + hex[Math.floor(Math.random()*16)]
        
    }
    return colour
}
let invalid;
const startchangingcolour=  function(){
    invalid = setInterval(randomcolor,1000)

 function randomcolor(){
    document.body.style.backgroundColor = randomColour()}
}



function stopchangingcolour(){
    clearInterval(invalid)
}

// let uninvalid = clearInterval(invalid)

startBtn.addEventListener('click', startchangingcolour)

stopBtn.addEventListener("click", stopchangingcolour)