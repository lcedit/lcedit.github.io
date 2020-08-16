let running = false
let timeleft = 20
let clicks = 0
function addClick() {
if (running === false) {
  setInterval(()=>{
    timeleft = timeleft - 1
    remainingTime.innerHTML = `You have 0:${timeleft < 0 ? "00" : timeleft < 10 ? "0" + timeleft : timeleft} left`
  }, 1000)
 }
  running = true
  if (timeleft < 0) return;
  clicks++
  times.innerHTML = `You have clicked ${clicks} time(s)`
  if (timeleft === 12) {
    button.href = "https://assfugil.github.io"
  }
}
