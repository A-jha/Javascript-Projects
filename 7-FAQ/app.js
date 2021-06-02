const question_ans = [
  {
    id: 1,
    question: "Do you cover all the basics?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, asperiores explicabo, ea velit eaque voluptatibus labore reprehenderit adipisci ab nemo quibusdam delectus obcaecati temporibus, nulla exercitationem minima laudantium doloremque cumque.",
  },
  {
    question: "Do you cover all the basics?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, asperiores explicabo, ea velit eaque voluptatibus labore reprehenderit adipisci ab nemo quibusdam delectus obcaecati temporibus, nulla exercitationem minima laudantium doloremque cumque.",
  },
  {
    id: 2,
    question: "Do you cover all the basics?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, asperiores explicabo, ea velit eaque voluptatibus labore reprehenderit adipisci ab nemo quibusdam delectus obcaecati temporibus, nulla exercitationem minima laudantium doloremque cumque.",
  },
  {
    id: 3,
    question: "Do you cover all the basics?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, asperiores explicabo, ea velit eaque voluptatibus labore reprehenderit adipisci ab nemo quibusdam delectus obcaecati temporibus, nulla exercitationem minima laudantium doloremque cumque.",
  },
  {
    id: 4,
    question: "Do you cover all the basics?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, asperiores explicabo, ea velit eaque voluptatibus labore reprehenderit adipisci ab nemo quibusdam delectus obcaecati temporibus, nulla exercitationem minima laudantium doloremque cumque.",
  },
];

const question_title = document.querySelector(".question-title");
const question_text = document.querySelector(".question-text");

question_title.firstElementChild.textContent = element.question;
question_text.firstElementChild.textContent = element.ans;

document.createAttribute("div").appendChild;

//traversing the DOM
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
