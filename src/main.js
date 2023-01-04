console.log('This is working')

const texts = []
const speeds = [50, 65, 80]
const dots1 = ['.', '..', '...']
let r = 0
let s = 0
let currentAnimation = 0
let revealFunctions = [revealDivs, revealDivs2, revealDivs3]
let currentFunction = 0
let previousFunction = revealFunctions.length - 1
const autoScroll = document.getElementById('autoScroll')
function getInput() {
  let input = document.getElementById('input-f').value
  if (input) {
    document.getElementById('answer').innerHTML = input
    document.getElementById('input-f').value = ''
  }
}
function revealDivs() {
  document.getElementById('container1').style.display = 'flex'

  document.getElementById('container' + (previousFunction + 1)).style.display =
    'none'

  setTimeout(function () {
    document.getElementById('div1').style.display = 'block'
  }, 500)

  setTimeout(function () {
    document.getElementById('div1').style.display = 'none'
  }, 6000)

  setTimeout(function () {
    document.getElementById('div2').style.display = 'block'
  }, 6000)
}
function revealDivs2() {
  document.getElementById('container2').style.display = 'flex'
  document.getElementById('container' + (previousFunction + 1)).style.display =
    'none'
  setTimeout(function () {
    document.getElementById('div3').style.display = 'block'
  }, 1000)
  setTimeout(function () {
    document.getElementById('div3').style.display = 'none'
  }, 9000)
  setTimeout(function () {
    document.getElementById('div4').style.display = 'block'
  }, 9000)
}
function revealDivs3() {
  document.getElementById('container3').style.display = 'flex'
  document.getElementById('container' + (previousFunction + 1)).style.display =
    'none'
  setTimeout(function () {
    document.getElementById('div5').style.display = 'block'
  }, 1000)
  setTimeout(function () {
    document.getElementById('div5').style.display = 'none'
  }, 10000)
  setTimeout(function () {
    document.getElementById('div6').style.display = 'block'
  }, 10000)
}
function updateDots1() {
  document.getElementById('dots1').innerHTML = dots1[s]
  s = (s + 1) % dots1.length
}
function type(text, speed) {
  if (r < text.length) {
    document.getElementById('typewriter').innerText += text.charAt(r)
    r++
    autoScroll.scrollTop = autoScroll.scrollHeight
    setTimeout(function () {
      type(text, speed)
    }, speed)
  } else {
    document.getElementById('dots1').style.display = 'none'
  }
}
function animation1() {
  r = 0
  s = 0
  document.getElementById('typewriter').innerText = ''
  document.getElementById('dots1').style.display = 'inline'
  setInterval(updateDots1, 500)
  setTimeout(function () {
    type(texts[0], speeds[0])
  }, 1500)
}
function animation2() {
  r = 0
  s = 0
  document.getElementById('typewriter').innerText = ''
  document.getElementById('dots1').style.display = 'inline'
  setInterval(updateDots1, 500)
  setTimeout(function () {
    type(texts[1], speeds[1])
  }, 4000)
}
function animation3() {
  r = 0
  s = 0
  document.getElementById('typewriter').innerText = ''
  document.getElementById('dots1').style.display = 'inline'
  setInterval(updateDots1, 500)
  setTimeout(function () {
    type(texts[2], speeds[2])
  }, 2000)
}

const animations = [animation1, animation2, animation3]
document
  .getElementById('starter-button')
  .addEventListener('click', function () {
    animations[currentAnimation]()
    getInput()
    /*resetInput();*/
    currentAnimation = (currentAnimation + 1) % animations.length
    revealFunctions[currentFunction]()
    previousFunction = currentFunction
    currentFunction = (currentFunction + 1) % revealFunctions.length
  })
