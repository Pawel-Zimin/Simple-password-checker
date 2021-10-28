const input = document.querySelector('#password');
const info = document.querySelector('.passinfo');
const minValue = 10;
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const specialSigns = /[!@#$%^&*()?]/;

const passCheck = () => {
    if(input.value.length>=10 && input.value.match(letters) && input.value.match(numbers) && input.value.match(specialSigns)){
        info.textContent = 'Masz bardzo silne hasło.';
        info.style.color = 'lime';
    }else if(input.value.length>=10 && input.value.match(letters) && input.value.match(numbers)){
        info.textContent = 'Masz silne hasło.';
        info.style.color = 'gold';
    }else{
        info.textContent = 'Masz za słabe hasło.';
        info.style.color = 'crimson';
    }
}

input.addEventListener('keyup', function(){
    if(input.value !== ''){
        passCheck();
    }else{
        info.removeAttribute('style');
        info.textContent = 'Nie podałeś hasła...';
    }
});