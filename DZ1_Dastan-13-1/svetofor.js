const colour = prompt('Выберите цвет: red, yellow, green!');

switch (colour) {
  case 'red':
      alert('Стой!!!')
      break;
  case 'yellow':
    alert('Погоди чутка')
    break;
  case 'green':
      alert('ыды отсюда')
    break;
  default:
      alert('undefined')
    break;
}