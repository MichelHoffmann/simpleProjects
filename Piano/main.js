//get all keys
const keys = document.querySelectorAll('.key')

console.log(keys)

//play notes

function playNote(event) {
  let audioKeyCode = getKeyCode(event)

  //typed or pressed key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

  // if key exist
  const cantFoundAnyKey = !key

  if (cantFoundAnyKey) {
    return
  }

  key.classList.add('playing')

  playAudio(audioKeyCode)
}

function getKeyCode(event) {
  let keyCode

  const isKeyboard = event.type === 'keydown'

  //Se for keyboard pega o KeyCode, se for mouse pega a key
  if (isKeyboard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

function playAudio(audioKeyCode) {
  //play audio
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0
  audio.play()
}

function removeClassPlaying(key) {
  key.target.classList.remove('playing')
}

//Pega todas as keys e passa em cada uma delas
//cada uma que for pressionada ira executar o evento click
keys.forEach(function (key) {
  key.addEventListener('click', playNote)
  key.addEventListener('transitionend', removeClassPlaying)
})

//keyboard type
window.addEventListener('keydown', playNote)
