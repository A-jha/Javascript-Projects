//Array of colors
const colors = ["green", "red", "rgba(133,122,200)", "#f12321"];

//Select btn
const btn = document.getElementById("btn");

//select a tag with class color
const color = document.querySelector(".color");

// On the click of btn change the background and text content
btn.addEventListener("click", () => {
  // call a function getRandomnumber
  //it will retiurn a random num in range of  array length
  const randomNumber = getRandomNumber();

  //change the background color
  document.body.style.backgroundColor = colors[randomNumber];
  //change the text content of color name
  color.textContent = colors[randomNumber];
});

//function that retirn random nuber in range of aaray length
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
