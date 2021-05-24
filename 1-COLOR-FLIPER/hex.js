//Hex - 0 1 2 3 4 5 6 7 8 9 A B C D E F
// An array  of Hex digits
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//Selecty the btn
const btn = document.getElementById("btn");

//select the element with class color
const color = document.querySelector(".color");

//add event listner to change color
btn.addEventListener("click", () => {
  // initialize your color
  let hexColor = "#";

  //run a for loop to get a valid color code
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  //set color to background color
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
