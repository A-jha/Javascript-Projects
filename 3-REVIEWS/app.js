const reviews = [
  {
    id: 1,
    name: "Jerry Mouse",
    job: "King of Ideas",
    img: "../public/images/jerry.jpg",
    text: "erry Mouse is a fictional character and one of the two titular main protagonists (the other being Tom Cat) in Metro-Goldwyn-Mayer's series of Tom and Jerry theatrical animated short films. ",
  },
  {
    id: 2,
    name: "Tom Cat",
    job: "Always in Problem",
    img: "../public/images/tom.png",
    text: 'Thomas "Tom" Cat is a fictional character and one of the two titular main protagonists in Metro-Goldwyn-Mayer\'s series of Tom and Jerry theatrical animated short films.',
  },
  {
    id: 3,
    name: "Nibbles Mouse",
    job: "intern",
    img: "../public/images/nibbles.png",
    text: "Nibbles is a fictional character from the Tom and Jerry cartoon series. He is the little, blue/gray, diaper-wearing orphan mouse whose cartoon debut came in the 1946 short The Milky Waif.",
  },
  {
    id: 4,
    name: "Spike",
    job: "Good Dog",
    img: "../public/images/spikes.png",
    text: "Spike Bulldog is the deuteragonist of the Tom & Jerry franchise. ... quality time with his son, Tyke because he's too busy chasing Jerry to watch where he's going. ",
  },
  {
    id: 5,
    name: "Butch Cat",
    job: "Self Made",
    img: "../public/images/butch.jpg",
    text: "Butch Cat is a anti-hero of the animated series Tom and Jerry. He was initially, an antagonist and, but later, he join to the good side. He is a black and white alley cat who is Tom and Jerry's friend and former arch-nemesis. ",
  },
];

const img = document.getElementById("person-img");

const author = document.getElementById("author");

const job = document.getElementById("job");

const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");

const nextBtn = document.querySelector(".next-btn");

const randomBtn = document.querySelector(".random-btn");

// set satarting item as 0
let currentItem = 0;

//load initail item
window.addEventListener("DOMContentLoaded", () => {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

//show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//add next btn
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

//add prev btn
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

//any random person
randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
