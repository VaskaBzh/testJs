import {startStop} from './start-stop.js'
const hero = () => {
  const heroBlock = document.querySelector('.hero')
  const startFunc = (e) => {
    move(e)
  }
  const stopFunc = () => {
    return
  }

  const move = (e) => {
    if ((e.keyCode == '87' && heroBlock.offsetTop >= 55) || (e.keyCode == '38' && heroBlock.offsetTop >= 55)) {
      heroBlock.style.top = `${heroBlock.offsetTop - 5}px`;
    } else if ((e.keyCode == '83' && heroBlock.offsetTop <= 645) || (e.keyCode == '40' && heroBlock.offsetTop <= 645)) {
      heroBlock.style.top = `${heroBlock.offsetTop + 5}px`;
    } else if ((e.keyCode == '68' && heroBlock.offsetLeft <= 655) || (e.keyCode == '39' && heroBlock.offsetLeft <= 655)) {
      heroBlock.style.left = `${heroBlock.offsetLeft + 5}px`;
      heroBlock.style.transform = 'translate(-50%, -50%) scaleX(1)'
    } else if ((e.keyCode == '65' && heroBlock.offsetLeft >= 45) || (e.keyCode == '37' && heroBlock.offsetLeft >= 45)) {
      heroBlock.style.left = `${heroBlock.offsetLeft - 5}px`;
      heroBlock.style.transform = 'translate(-50%, -50%) scaleX(-1)'
    }
  };

  document.addEventListener('keydown', startFunc)

  startStop(startFunc, stopFunc)
}

export default hero