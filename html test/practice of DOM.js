const ul = document.body.firstElementChild.nextElementSibling;
const firstLis = ul.firstElementChild;
console.log(firstLis);


const section = document.querySelector('section');
const button = document.querySelector('button');
 
// section.style.backgroundColor = 'blue';


section.className = 'red-bg';
// section.className = '';

// const button = document.querySelector('button');
// button.className = 'new-btn';
button.addEventListener('click', () => {
    // if (section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible';
    // } else {
    //     section.ClassName = 'red-bg visible';
    // }
    section.classList.toggle('invisible');
});