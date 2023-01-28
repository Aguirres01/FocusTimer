//DOM => Document Object Model = Event Driven

//refatorar = código mais entendível

const buttonPlay = document.querySelector('.play') //pesquisa pelo seletor
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
//Event-driven
//callback

buttonPlay.addEventListener('click', function (){
    buttonPlay.classList.add('hide') //adicionou hide no play
    buttonPause.classList.remove('hide') //removey hide do pause
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

})
buttonPause.addEventListener('click',function(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
})


buttonStop.addEventListener('click', function (){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
})

buttonSoundOff.addEventListener('click', function(){
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function(){
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})