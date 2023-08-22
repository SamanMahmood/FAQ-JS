const FAQQuestion = [
  {
    id: 1,
    question: `What does a frontend roadmap entail for web development?`,
    answer: `A frontend roadmap outlines the learning path for web developers to master HTML, CSS, JavaScript, frameworks, and responsive design. It guides beginners through building user interfaces and web applications.`,
  },
  {
    id: 2,
    question: `What does a backend roadmap entail for web development?`,
    answer: `A backend roadmap guides web developers in mastering server-side programming languages, databases, server management, and security. It focuses on creating the server logic and database interactions that power web applications.`,
  },
  {
    id: 3,
    question: `What does a graphic design roadmap?`,
    answer: `A graphic design roadmap outlines the journey to master visual communication, typography, color theory, software skills, and branding. It guides designers through creating compelling visuals for various mediums like print, digital, and social media.`,
  },
  {
    id: 4,
    question: `What does a data science roadmap?`,
    answer: `A data science roadmap includes learning statistics, programming languages (e.g., Python, R), data manipulation, machine learning, and data visualization. It guides individuals in extracting insights and making data-driven decisions.`,
  },
  {
    id: 5,
    question: `Write a Python roadmap?`,
    answer: `A Python roadmap involves stages of learning from basics (syntax, data types) to advanced topics (web development, data science). It includes hands-on projects and exploring Python's diverse applications like web development (Django, Flask), data analysis (NumPy, Pandas), and more.`,
  },
  {
    id: 6,
    question: `JavaScript roadmap?`,
    answer: `A JavaScript roadmap outlines progression from fundamentals (variables, functions) to advanced topics (DOM manipulation, APIs). It covers frameworks like React and Node.js, enabling front-end and back-end development. Roadmap involves hands-on projects to create interactive web applications.`,
  },
  {
    id: 7,
    question: `What are the main tools and libraries used in JavaScript development?`,
    answer: `Key tools and libraries in JavaScript development include:

        1.Code Editors (e.g., Visual Studio Code)
        2.Version Control (e.g., Git)
        3.Package Managers (e.g., npm, yarn)
        4.Debugging Tools (e.g., Chrome DevTools)
        5.Frameworks (e.g., React, Angular, Vue.js)
        6.Testing Libraries (e.g., Jest, Mocha)
        7.Build Tools (e.g., Webpack, Babel)
        8.Server-Side Runtime (e.g., Node.js)
        9.Data Visualization (e.g., D3.js)
        10.AJAX Libraries (e.g., Axios, jQuery)`,
  },
];

const faqContEl = document.getElementById("faqCont");
function createFAQEl(data) {
  const faqEl = document.createElement("div");
  faqEl.classList.add("faq");

  // Question Content

  const questionCont = document.createElement("div");
  questionCont.classList.add("questionCont");
  faqEl.appendChild(questionCont);
  const questionEl = document.createElement("div");
  questionEl.classList.add("question");
  const questionPara = document.createElement("p");
  questionPara.innerHTML = data.question;
  questionEl.appendChild(questionPara);

  // icon

  const iconEl = document.createElement("div");
  iconEl.classList.add("icon");
  const iconBtn = document.createElement("button");
  iconBtn.innerHTML = `<ion-icon name="chevron-down"></ion-icon>`;
  iconEl.appendChild(iconBtn);
  questionCont.appendChild(questionEl);
  questionCont.appendChild(iconEl);

  //   Answer Content

  const answerCont = document.createElement("div");
  answerCont.classList.add("answerCont");
  const answerEl = document.createElement("div");
  answerEl.classList.add("answer");
  const answerPara = document.createElement("p");
  answerPara.innerHTML = data.answer;
  answerEl.appendChild(answerPara);
  answerCont.appendChild(answerEl);
  faqEl.appendChild(answerCont);
  faqContEl.appendChild(faqEl);

  // Event listener

  questionCont.addEventListener("click", (e) => {
    const allFaq = document.querySelectorAll(".faqCont .faq");
    allFaq.forEach((item) =>
      item !== faqEl ? item.classList.remove("active") : false
    );
    faqEl.classList.toggle("active");
    createRipple(e);
  });

  // Ripple Effect

  function createRipple(pos) {
    let topPos = pos.clientY - faqEl.getBoundingClientRect().top;
    let leftPos = pos.clientX - faqEl.getBoundingClientRect().left;

    const spanEl = document.createElement("span");
    spanEl.classList.add("ripple");
    questionCont.appendChild(spanEl);
    spanEl.style.cssText = `height:1000px;
          width:1000px;background-color:#647dee33;
          position:absolute;transform:translate(-50%,-50%);border-radius:50%;opacity:1;
          animation:rippleEffect 1s ease-in-out;
          top:${topPos}px;
          left:${leftPos}px;
          opacity:0;
          `;

    spanEl.addEventListener("animationend", (e) => {
      spanEl.remove();
    });
  }
}

FAQQuestion.forEach((question) => {
  createFAQEl(question);
});
