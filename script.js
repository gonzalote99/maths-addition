let firstNumber = parseInt(Math.random() * 10);
let secondNumber = parseInt(Math.random() * 10);

let total = firstNumber + secondNumber;

let primry = document.getElementById('primary-number');
primry.innerHTML = `<p>${firstNumber}</p>`;

let secondary = document.getElementById('secondary-number');
secondary.innerHTML = `<p>${secondNumber}</p>`;

let button = document.getElementById('btn');

button.addEventListener('click', function() {
  let guess = document.getElementById('guess').value;
  guess = Number(guess);

  if(guess === total) {
   alert('correct');
   window.location.reload();
  } else {
    alert('incorrect, the correct was ' + total + ' ')
    window.location.reload()
  }
})