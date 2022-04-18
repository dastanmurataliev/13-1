// let count = document.getElementById('counter');
// document.getElementById('countPlus').onclick = function () {
// let num = 0;
// if (num <= 100){
//     num++;
// }
// }
// document.getElementById('countMinus').onclick = function () {
// let num
// }
//
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const score = document.getElementById('score')
const reset = document.getElementById('reset')
let num = 0;
plus.onclick = () => {
    num++
    score.innerText = num.toString()
}
minus.onclick = () => {
    num--
    if ( num < 1){
        num = 0
    }
    score.innerText = num.toString()
}
reset.onclick = () => {
    num = 0;
    score.innerText = num.toString()
}