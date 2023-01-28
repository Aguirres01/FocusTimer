//DOM => Document Object Model = Event Driven

let play = document.querySelector('.play') //pesquisa pelo seletor
let pause = document.querySelector('.pause')

//Event-driven
//callback

play.addEventListener('click', function (){
    play.classList.add('hide') //adicionou hide no play
    pause.classList.remove('hide') //removey hide do pause
})
pause.addEventListener('click',function(){
    pause.classList.add('hide')
    play.classList.remove('hide')
})


// Programação imperativa