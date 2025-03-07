import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// const calendars = document.querySelector("input#datetime-picker")
const containers = document.querySelector(".container")
const startButton = document.querySelector("[data-start]")
startButton.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

const myInput = document.querySelector(".input#datetime-picker");
const fp = flatpickr("input#datetime-picker", {options});

startButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click")

})

flatpickr("input#datetime-picker", {
  onClose: function(selectedDates, dateStr, instance) {
      console.log("Календар закрито!");
      // if 
      startButton.disabled = false;
  }
});