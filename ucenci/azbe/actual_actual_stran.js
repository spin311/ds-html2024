const display = document.getElementById("display");

display.addEventListener("numberUpdated", function update_display(event) {
  display.innerText = event.detail.number;
});

document.getElementById("plus").onclick = function counter_add() {
  const number = parseInt(display.innerText, 10);
  const numberUpdatedEvent = new CustomEvent("numberUpdated", {
    detail: {
      number: number + 1
    }
  });
  display.dispatchEvent(numberUpdatedEvent);
};

document.getElementById("minus").onclick = function counter_remove() {
  const number = parseInt(display.innerText, 10);
  const numberUpdatedEvent = new CustomEvent("numberUpdated", {
    detail: {
      number: number - 1
    }
  });
  display.dispatchEvent(numberUpdatedEvent);
};