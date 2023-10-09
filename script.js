// Variables
let count = 0;
const countNumber = document.querySelector('h2');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');

// Functions
function changeCountNumber() {
  if (count > 0) {
    countNumber.style.color = 'green';
  } else if (count < 0) {
    countNumber.style.color = 'red';
  } else {
    countNumber.style.color = 'black';
  }
  countNumber.textContent = count;
}

function decreaseCount() {
  count--;
  changeCountNumber();
}

function increaseCount() {
  count++;
  changeCountNumber();
}

function resetCount() {
  count = 0;
  changeCountNumber();
}

// Event Listeners
decreaseBtn.addEventListener('click', decreaseCount);
resetBtn.addEventListener('click', resetCount);
increaseBtn.addEventListener('click', increaseCount);