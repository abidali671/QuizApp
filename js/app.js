var result = document.querySelector("#result");
var point = document.querySelector("#point");
let questions = [
  {
    id: 1,
    heading: "🍽️ Food ",
    question:
      "How much meat (beef, pork, poultry and/or seafood) do you eat on a weekly basis?",
    img: '<img src="./images/question1.png">',
    answer: "backgrond-color",
    options: [
      {
        opt: "Meat lover: I eat meat every day",
        value: 35,
      },
      {
        opt: "Average: I eat meat a few times a week, but not every day",
        value: 25,
      },
      {
        opt: "No beef: I avoid red meat, but eat pork, poultry and/or seafood",
        value: 20,
      },
      {
        opt:
          "Flexitarian: I’m working on reducing my consumption of all animal-based foods (meat, dairy and eggs) by 50%",
        value: 15,
      },
      {
        opt:
          "Plant-based diet: Plant-based foods make up the majority of my diet with only the occasional animal-based product",
        value: 15,
      },
    ],
  },
  {
    id: 2,
    heading: "🚗 Commute",
    question: "How would you describe your commute to school or work?",
    img: '<img src="./images/question2.png">',
    answer: "Central Processing Unit",
    options: [
      {
        opt: "Heavy commute by car: more than 15 miles/30 minutes each way",
        value: 50,
      },
      { opt: "Light commute by car: less than 15 miles/30 minutes", value: 25 },
      { opt: "Heavy public transit: more than 15 miles/30 minutes", value: 20 },
      { opt: "Light public transit: less than 15 miles/30 minutes", value: 10 },
      { opt: "No fuel needed: Walk, bike or work from home", value: 0 },
    ],
  },
  {
    id: 3,
    heading: "🚮 Waste",
    question: "How do you dispose of your waste?",
    img: '<img src="./images/question3.png">',
    answer: "Electronic Mail",
    options: [
      { opt: "Everything goes in the trash", value: 40 },
      { opt: "Recycle when possible", value: 30 },
      {
        opt: "Compost, recycle and opt for reusable alternatives when possible",
        value: 20,
      },
    ],
  },
  {
    id: 4,
    heading: "🔌 Energy",
    question: "Where does your energy come from?",
    img: '<img src="./images/question4.png">',
    answer: "Hyper Text Markup Language",
    options: [
      { opt: "Traditional utilities (fossil fuels)", value: 55 },
      { opt: "Renewable energy sources", value: 30 },
    ],
  },

  {
    id: 5,
    heading: "✈️ Air travel",
    question: "How often do you fly?",
    img: '<img src="./images/question5.png">',
    answer: "Hyper Text Markup Language",
    options: [
      {
        opt: "More than 2 round trip flights a year",
        value: "55",
      },
      { opt: "1-2 round trip flights a year", value: 40 },
      { opt: " Zero flights in the past year", value: 0 },
    ],
  },
  {
    id: 6,
    heading: "👩‍👩‍👧 Children",
    img: '<img src="./images/question6.png">',
    question: "How many kids do you have (or want to have)?",
    answer: "Hyper Text Markup Language",
    options: [
      { opt: "zero", value: 0 },
      { opt: "1", value: 120 },
      { opt: "More than one", value: 240 },
    ],
  },
];

let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);
};

function next() {
  if (question_count == questions.length - 1) {
    location.href = "end.html";
  }

  let user_answer = document.querySelector("li.option.active").innerHTML;
  result.textContent = Number(result.textContent) - Number(point.textContent);
  sessionStorage.setItem("result", result.textContent);

  // if (user_answer == questions[question_count].answer) {
  //   points += 10;
  //   sessionStorage.setItem("points", points);
  // }

  question_count++;
  show(question_count);
  point.textContent = 0;
}
function back() {
  if (question_count == 0) {
    console.log("hello");
  } else {
    question_count--;
    console.log(question_count);
    show(question_count);
    point.textContent = 0;
  }
}

function show(count) {
  let question = document.getElementById("questions");
  questions[count].options;
  function composeList(questions) {
    let initialOptions = ``;
    questions.forEach((element) => {
      initialOptions += `<li data-value='${element.value}' class="option">${element.opt}</li>`;
    });
    return initialOptions;
  }

  question.innerHTML = `
    <h2>${questions[count].heading}</h2>
    <h3>Q${count + 1}. ${questions[count].question}</h3>
    <div class="question-img">${questions[count].img}</div>
    <ul class="option_group">
    ${composeList(questions[count].options)}

  </ul> 
    `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
      var resultValue = Number(result.textContent);
      let user_answer_value = document
        .querySelector("li.option.active")
        .getAttribute("data-value");
      point.textContent = Number(user_answer_value);
    };
  }
}
