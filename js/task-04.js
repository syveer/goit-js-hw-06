let counterValue = 0;
const valueElement = document.getElementById("value");
const incrementButton = document.querySelector("[data-action='increment']");
const decrementButton = document.querySelector("[data-action='decrement']");
const valueElement = document.getElementById("value");
const incrementButton = document.querySelector("[data-action='increment']");
const decrementButton = document.querySelector("[data-action='decrement']");
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  valueElement.textContent = counterValue;
});
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  valueElement.textContent = counterValue;
});
