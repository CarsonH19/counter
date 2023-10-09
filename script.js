// 
// Decrease - lower count
// Increase - raise count
// Reset - set count to 0
// Zero = black
// Positive = green
// Negative = red

// Variables
let count = 0;
const countNumber = document.querySelector('h2');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');


// Functions
function changeCountNumber() {
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