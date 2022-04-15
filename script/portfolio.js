const professionArr = [
  "Coder",
  "Web Developer",
  "Programmer",
  "Software Engineer",
  "Team Player",
  "Fighter",
  "Lover",
  "God",
];

const profession = document.getElementById("profession");

let pCount = 0;
const changeProfession = () => {
  if (pCount < 7) {
    profession.innerText = professionArr[pCount];
    pCount++;
  } else {
    pCount = 0;
    profession.innerText = professionArr[pCount];
  }
};

setInterval(() => {
  changeProfession();
}, 2000);
