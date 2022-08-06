const toggleBtn = document.querySelector('.navbar_toggleBtn');
const main = document.querySelector('.navbar_main');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    main.classList.toggle('active');
    icons.classList.toggle('active');
});