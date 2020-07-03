import '../styles.scss';

const input = document.querySelector('.welcome-page__form-input');
const submit = document.querySelector('.welcome-page__form-submit');

input.addEventListener('input', () => {
    if(input.value) {
        submit.removeAttribute('disabled');
    }
});

submit.addEventListener('click', () => {
    if(input.value) {
        localStorage.setItem('user-name', input.value);
    }
});