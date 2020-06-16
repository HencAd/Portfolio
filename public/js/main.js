window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
});

class onSkillMouseover {
    constructor() {
    this.skills = document.querySelectorAll(".skills__icon");
    this.contentToShow = document.querySelector(".about__content");
    this.events();
  }
  
  events() {
    this.skills.forEach((el) => {
      let skill = el.childNodes[3].textContent;
      el.addEventListener("mouseover", () => {
        switch (skill) {
          case "HTML5":
            return (this.contentToShow.innerHTML =
                `<div class="skillA" > I'm always trying to keep my HTML well organized, semantic and easy to maintain. I also use BEM naming.</div>`);
          case "CSS3":
            return (this.contentToShow.innerHTML =
              `<div class="skillA" >In my projects, I am trying to write the most reusable code. I have no problem with basic SCSS features like mixins, functions, variables.</div>`);
          case "JavaScript":
            return (this.contentToShow.innerHTML =
              `<div class="skillA" >I'm using Javascript's newest features to keep my code modern and clean. I know almost all the ES6 features and know how to use them.</>`);
          case "NodeJS":
            return (this.contentToShow.innerHTML =
              `<div class="skillA" >I know the very basics. Still learning.</div>`);
          case "Bootstrap":
            return (this.contentToShow.innerHTML =
              `<div class="skillA" >I have no problems with layouts but for more specific components like navigation, I need documentation.</div>`);
          default:
            return (this.contentToShow.innerHTML = "err");
        }
      });
      el.addEventListener("mouseout", () => {
        this.contentToShow.innerHTML =
        `<div class="skillA" >No monster will scare me! I like challenges. I am constantly developing, using acquired knowledge and learning new technologies. I have several of my own projects listed below. I have no problems with team working and communication. I am very eager to learn.</div>`
      });
    });
  }
  }
new onSkillMouseover();




/* Validate */

const form = document.getElementById('contactForm');
const name= document.getElementById('name');
const email = document.getElementById('email');
const msg = document.getElementById('msg');
const inputs = [name,email,msg];

form.setAttribute("novalidate", true);

const removeFieldError = function (field) {
  const errorText = field.nextElementSibling;
  if(errorText !== null){
    if(errorText.classList.contains('form__error')){
      errorText.remove();
    }
  }
};


const createFieldError = function (field,text){
  removeFieldError(field);

  const div = document.createElement("div");
  div.classList.add("form__error");
  div.innerText = text;
  if(field.nextElementSibling === null) {
    field.parentElement.appendChild(div);
  } else {
    if(!field.nextElementSibling.classList.contains("form__error")){
      field.parentElement.insertBefore(div,field.nextElementSibling);
    }
  }
};

const toggleFieldError = function(field,show){
  const errorText = field.nextElementSibling;
  if(errorText !== null){
    if(errorText.classList.contains("form__error")){
      errorText.style.display = show ? "block" : "none";
    }
  }
};


/* Send Form */
form.addEventListener("submit", e =>{
  e.preventDefault();


  let formHasErrors = false;

  for (const el of inputs) {
    removeFieldError(el);
    el.classList.remove("field__error");

    if (!el.checkValidity()) {
        createFieldError(el, el.dataset.textError);
        el.classList.add("field__error");
        formHasErrors = true;
    }
  }

  if (!formHasErrors) {


  const name= document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('msg').value.trim();

  const data = {
    name,
    email,
    msg
  };

  const firstName= name.split(' ');

  const acteptEmail = document.querySelector('.contact__body');
  const window = `<div class="lightbox">
    <div class="lightbox__content">
    <h2 class="lightbox__header">${firstName[0]},thanks for your E-mail!!!</h2>
    <div class="lightbox__actions">
      <button class="btn btn--extra" onclick="remove()" >Close</button>
      </div>
      </div>
      </div>`;
    const position = 'afterbegin';
    acteptEmail.insertAdjacentHTML(position, window);

  

  $.post('/email',data,function(){
    console.log('Server received our data');

  });

  clear();
              
};
});


function remove(){
  const el = document.querySelector('.lightbox');
  console.log(el)
  el.remove();
};


function clear(el){
    for (const el of inputs) {
      el.value='';
  }
};

