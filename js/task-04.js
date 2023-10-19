const counterValue = document.querySelector("#value");
let count = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener("click", () => {
  count -= 1;
  counterValue.textContent = count;
});

incrementButton.addEventListener("click", () => {
  count += 1;
  counterValue.textContent = count;
});
