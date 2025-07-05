
let rng=new Math.seedrandom('Hello World')
function NewLine(){
    
    document.body.innerHTML+=`<game-tile column=${Math.round(rng()*3)+1}></game-tile>`
}


let PxSpeed=10

function vibrer(){
    if (window.navigator.vibrate){
        window.navigator.vibrate(200)
    }
}


