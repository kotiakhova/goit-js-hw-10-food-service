const input = document.querySelector('.js-switch-input');

const body = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const currentTheme = localStorage.getItem('theme');


body.classList.add(Theme.LIGHT);

handleLocalStorageTheme();

input.addEventListener('change', handleClick);

function handleLocalStorageTheme (){
    if(currentTheme){
        if(currentTheme === 'LIGHT') {
            input.checked = false;
            body.classList.add(Theme.LIGHT);
            body.classList.remove(Theme.DARK);

        } else if (currentTheme === 'DARK'){
            body.classList.add(Theme.DARK);
            body.classList.remove(Theme.LIGHT);
            input.checked = true;
        }
      }
      
}


function handleClick() {
    if(input.checked) {
        localStorage.setItem('theme', 'DARK');
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        input.checked = true;
    } else {
        body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        localStorage.setItem('theme', 'LIGHT');
        input.checked = false;
        }

    }

;
console.log(body);