const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark Mode 
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src='./Assets/Coding_dark.svg';
    image2.src='./Assets/Problem_Solving_dark.svg';
    image3.src='./Assets/Remote_work_dark.svg';
}

// Light Mode
function lightMode(){

    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src='./Assets/Coding_light.svg';
    image2.src='./Assets/Problem_Solving_light.svg';
    image3.src='./Assets/Remote_work_light.svg';
}

// Switch Theme Dynamically
function switchTheme(evt){
    if (evt.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);