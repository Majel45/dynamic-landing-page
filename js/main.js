//DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

//Options
const showAmPm = true;

//Show the time
function showTime(){
  let today = new Date(),
  // let today = new Date(2021, 02, 27, 18, 21, 08),
    hour = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds();
  //Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';
  //12H Format
  hour = hour % 12 || 12;
  //Output the time
  time.innerHTML = `${hour}<span>:</span>${addZero(minute)} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

//Add Zero
function addZero(number){
  return (parseInt(number, 10) < 10 ? '0' : '') + number;
}

//Set Background & Greeting
function setBgGreeting(){
  let today = new Date(),
    hour = today.getHours();

  if(hour < 12){
    //Morning
    document.body.style.backgroundImage = "url(img/morning.jpg)";
    greeting.textContent = 'Good Morning';
  } else if(hour < 18){
    //Afternoon
    document.body.style.backgroundImage = "url(img/afternoon.jpg)";
    greeting.textContent = 'Good Afternoon';
  } else {
    //Evening
    document.body.style.backgroundImage = "url(img/evening.jpg)";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
}

//Get name
function getName(){
  if(localStorage.getItem('name') === null){
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

//Set name
function setName(event){
  if(event.type === 'keypress'){
    //Make sure enter is pressed
    if(event.which === 13 || event.keyCode === 13){
      localStorage.setItem('name', event.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', event.target.innerText);
  }
}

//Get focus
function getFocus(){
  if(localStorage.getItem("focus") === null){
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

//Set focus
function setFocus(event){
  if(event.type === 'keypress'){
    //Make sure enter is pressed
    if(event.which === 13 || event.keyCode === 13){
      localStorage.setItem('focus', event.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', event.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run
showTime();
setBgGreeting();
getName();
getFocus();