const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch Theme Dynamically
function switchTheme(evt){
    if (evt.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);