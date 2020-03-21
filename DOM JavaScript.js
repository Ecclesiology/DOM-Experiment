const container = document.querySelector('#container');

const content = document.createElement('div');
  content.classList.add('content');
  content.textContent = 'This is the glorious text-content!';
  container.appendChild(content);

const redText = document.createElement("p");
  redText.classList.add("redText");
  redText.textContent = "Hey I'm red!";
  redText.style.color = "red";
  container.appendChild(redText);

const blueText = document.createElement("h3");
  blueText.classList.add("blueText");
  blueText.textContent = "I'm a blue h3!";
  blueText.style.color = "blue";
  container.appendChild(blueText);
  
const bigDiv = document.createElement("div");
  bigDiv.classList.add("bigDiv");
  bigDiv.style.backgroundColor = "pink";
  bigDiv.style.borderColor = "black";
  container.appendChild(bigDiv);
  
const greatHeader = document.createElement("h1");
  greatHeader.classList.add("greatHeader");
  greatHeader.textContent = "I'm in a div!"
  bigDiv.appendChild(greatHeader);
  
const meekParagraph = document.createElement("p");
  meekParagraph.classList.add("meekParagraph");
  meekParagraph.textContent = "ME TOO!";
  bigDiv.appendChild(meekParagraph);
  
const btn = document.querySelector('#btn');
  btn.addEventListener('click', () => {
    alert("Hello World");
  });
  
const btn2 = document.querySelector('#btn2');
  btn2.addEventListener('click', () => {
    alert("Hello World");
  });
  
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

const btn3 = document.querySelector("#btn3");
  btn3.addEventListener('click', alertFunction);
  
const btn4 = document.querySelector("#btn4");
  btn4.addEventListener("click", function (e) {
      console.log(e.target);
  });
