const startStop = (func, funcStop) => {
  const continueGame = () => {
    const continueBlock = document.querySelector('.continue')
    continueBlock.style.display = 'inline-flex'
    continueBlock.addEventListener('click', () => {
      document.addEventListener('keydown', func)
      continueBlock.style.display = 'none'
    })
  }
  document.addEventListener('keydown', (e) => {
    if (e.keyCode == '27') {
      funcStop()
      document.removeEventListener('keydown', func)
      continueGame()
    }
  })
}

export {startStop}