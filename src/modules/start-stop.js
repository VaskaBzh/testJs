const startStop = (func, funcStop) => {
  document.addEventListener('keydown', (e) => {
    if (e.keyCode == '27') {
      funcStop()
      document.removeEventListener('keydown', func)

      document.querySelector('.continue').style.display = 'inline-flex'
      document.querySelector('.continue').addEventListener('click', () => {
        document.addEventListener('keydown', func)
        document.querySelector('.continue').style.display = 'none'
        // document.removeEventListener('keydown', func)
      })
    }
  })
}

export {startStop}