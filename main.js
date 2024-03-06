let on=document.querySelector('.on');
let off=document.querySelector('.off');
let i=document.querySelector('i');

let one=document.querySelector('.one');
let two=document.querySelector('.two');
let three=document.querySelector('.three');


on.addEventListener('click',()=>{
 i.style.animationDuration=3+'s';
});

off.addEventListener('click', () => {
 i.style.animationDuration = 0 + 's';
});

one.addEventListener('click', () => {
 i.style.animationDuration = 2 + 's';
});

two.addEventListener('click', () => {
 i.style.animationDuration = 1 + 's';
});

three.addEventListener('click', () => {
 i.style.animationDuration = .7 + 's';
});
