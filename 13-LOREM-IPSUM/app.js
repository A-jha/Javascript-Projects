const text = [
  `“In a small Italian town, hundreds of years ago, a small business owner owed a large sum of money to a loan-shark. The loan-shark was a very old, unattractive looking guy that just so happened to fancy the business owner’s daughter.`,
  `He decided to offer the businessman a deal that would completely wipe out the debt he owed him. However, the catch was that we would only wipe out the debt if he could marry the businessman’s daughter. Needless to say, this proposal was met with a look of disgust.
`,
  `
The loan-shark said that he would place two pebbles into a bag, one white and one black.
`,
  `
The daughter would then have to reach into the bag and pick out a pebble. If it was black, the debt would be wiped, but the loan-shark would then marry her. If it was white, the debt would also be wiped, but the daughter wouldn’t have to marry the loan-shark.
`,
  `
Standing on a pebble-strewn path in the businessman’s garden,
 the loan-shark bent over and picked up two pebbles. Whilst he was picking them up,
  the daughter noticed that he’d picked up two black pebbles  and
   placed them both into the bag.
`,
  `
He then asked the daughter to reach into the bag and pick one.
`,
  `
The daughter naturally had three choices as to what she could have done:
`,
  `
Refuse to pick a pebble from the bag.
Take both pebbles out of the bag and expose the loan-shark for cheating.
`,
  `
Pick a pebble from the bag fully well knowing it was black and sacrifice herself for her father’s freedom.
She drew out a pebble from the bag, and before looking at it ‘accidentally’ dropped it into the midst of the other pebbles. She said to the loan-shark;
`,
  `
‘Oh, how clumsy of me. Never mind, if you look into the bag for the one that is left, you will be able to tell which pebble I picked.’
`,
  `
The pebble left in the bag is obviously black, and seeing as the loan-shark didn’t want to be exposed, he had to play along as if the pebble the daughter dropped was white, and clear her father’s debt.”`,
];
// we have 10 paragraphs

const form = document.querySelector(".lorem-form");

const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");
console.log(amount);
form.addEventListener("submit", (e) => {
  //a click on a form submit button - initiates its submission to the server
  e.preventDefault();

  const random = Math.floor(Math.random() * text.length);
  if (isNaN(amount) || amount < 0 || amount > 9) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map((item) => {
        return `<p class = "result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
