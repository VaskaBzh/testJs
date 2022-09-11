import {startStop} from './start-stop.js'
const score = () => {
  const scoreVal = document.querySelector('.score')

  let timer
  let x = 0
  const startTimer = () => {
    timer = setTimeout(countdown, 2500)
  }
  const startFunc = (e) => {
    if (e.keyCode == '87' || e.keyCode == '38' || e.keyCode == '83' || e.keyCode == '40' || e.keyCode == '68' || e.keyCode == '39' || e.keyCode == '65' || e.keyCode == '37') {
      startTimer()

      document.removeEventListener('keydown', startFunc)
    }
  }
  const stopFunc = () => {
    clearTimeout(timer)
  }
  const countdown = () => { 
    x = x + 10
    scoreVal.innerHTML = x

    startTimer()
  }

  document.addEventListener('keydown', startFunc)

  startStop(startFunc, stopFunc)
}

export default score