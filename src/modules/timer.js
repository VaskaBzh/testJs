import {startStop} from './start-stop.js'
const timer = () => {
  const timerBlock = document.querySelector('.timer')
  let timer
  let x = 60
  const startFunc = () => {
    timer = setTimeout(countdown, 1000)
    document.removeEventListener('keydown', startFunc)
  }
  const stopFunc = () => {
    clearTimeout(timer) 
  }
  const startBtn = document.querySelector('.wid__btn')
  function countdown(){
    x--
    timerBlock.innerHTML = x
    
    if (x < 0){
      stopFunc()
      alert('вы выйграли треш!!')
    }
    else {
      startFunc()
    }
  }

  document.addEventListener('keydown', startFunc)
  startStop(startFunc, stopFunc)
}

export default timer