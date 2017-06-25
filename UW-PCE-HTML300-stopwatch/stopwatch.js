const start = document.querySelector('button.start')
const stop = document.querySelector('button.stop')
const lapList = document.querySelector('#lapList')
const stopwatchTime = document.querySelector('#stopwatchTime')

const laps = []
const intervalRate = 10
let intervalId = null
let rawTime = 0
// turns the time into a human readable format
function formatTime (raw) {
  let seconds = Math.floor(raw / 1000)
  let fractionalSeconds = (raw % 1000) / 1000
  let minutes = Math.floor(seconds / 60)
  seconds = seconds - (60 * minutes) + fractionalSeconds

  return `${zeroPad(minutes)}:${zeroPad(seconds.toFixed(2))}`
}


function stopwatchStart (event) {
  event.preventDefault()
  console.log('started!')





 intervalId = setInterval(stopwatchUpdate, intervalRate)
}




function stopwatchUpdate (){
rawTime += intervalRate
stopwatchTime.innerHTML = formatTime(rawTime)

}

function stopwatchStop (event) {

  event.preventDefault()
  console.log('Stopped!')

 clearInterval(intervalId)

}

function stopwatchLap (event) {
event.preventDefault()
console.log('Lap added!')
lap.push(intervalId)

}





// adds a leading zero because humans like them
function zeroPad (value) {
  let pad = value < 10 ? '0' : ''
  return `${pad}${value}`
}

document.addEventListener("DOMContentLoaded", function () {
  console.log('ready!')
})
start.addEventListener("click", stopwatchStart)

stop.addEventListener("click", stopwatchStop)

lap.addEventListener("click", stopwatchLap)
