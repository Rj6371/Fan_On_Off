let on=document.querySelector('.on');
let off=document.querySelector('.off');
let img=document.querySelector('img');

let one=document.querySelector('.one');
let two=document.querySelector('.two');
let three=document.querySelector('.three');


on.addEventListener('click',()=>{
 img.style.animationDuration=3+'s';
});

off.addEventListener('click', () => {
 img.style.animationDuration = 0 + 's';
});

one.addEventListener('click', () => {
 img.style.animationDuration = 2 + 's';
});

two.addEventListener('click', () => {
 img.style.animationDuration = 1 + 's';
});

three.addEventListener('click', () => {
 img.style.animationDuration = .7 + 's';
});
