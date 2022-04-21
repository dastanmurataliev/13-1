
let light=prompt("CHOOSE COLOUR : red, yellow, green");
switch (light) {
  case "red":
    document.getElementsByClassName('red')[0].style.background = "red";
    document.getElementsByClassName('red')[0].innerText = "STOP"
    break;
  case "yellow":
    document.getElementsByClassName('yellow')[0].style.background = "yellow";
    document.getElementsByClassName('yellow')[0].innerText = "WAIT";
    break;
  case "green":
    document.getElementsByClassName('green')[0].style.background = "green";
    document.getElementsByClassName('green')[0].innerText = "GO";
    break;
  default:
    document.getElementsByClassName('red')[0].style.background = "red";
    document.getElementsByClassName('red')[0].innerText = "PLEASE";
    document.getElementsByClassName('yellow')[0].style.background = "yellow";
    document.getElementsByClassName('yellow')[0].innerText = "TRY";
    document.getElementsByClassName('green')[0].style.background = "green";
    document.getElementsByClassName('green')[0].innerText = "AGAIN:(";
}

// const rStop = "STOP";
// const yWAit = "WAIT";
// const gGO = "GO";
// red.onclick = () => {
//   red.innerText = rStop
// }
// yellow.onclick = () => {
//   yellow.innerText = yWAit
// }
// green.onclick = () => {
//   green.innerText = gGO
// }
//

