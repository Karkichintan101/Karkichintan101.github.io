const cslide = document.querySelector('.c-slide');
const cimages = document.querySelectorAll('.c-slide img');

const prevBtn  = document.querySelector('#prevBtn');
const nextBtn  = document.querySelector('#nextBtn');

//button listeners
let counter = 1;
const size = cimages[0].clientWidth;

cslide.style.transform = 'translateX('+(-size * counter) + 'px)';

nextBtn.addEventListener('click', () =>{
    if (counter >= cimages.length -1) return;
    cslide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    cslide.style.transform = 'translateX('+(-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () =>{
    if (counter <= 0) return;
    cslide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    cslide.style.transform = 'translateX('+(-size * counter) + 'px)';
});

cslide.addEventListener('transitionend', () => {
    
    if (cimages[counter].id === 'lastclone'){
        cslide.style.transition = "none";
        counter = cimages.length -2;
        cslide.style.transform = 'translateX('+(-size * counter) + 'px)';
    }
    if (cimages[counter].id === 'firstclone'){
        cslide.style.transition = "none";
        counter = cimages.length - counter;
        cslide.style.transform = 'translateX('+(-size * counter) + 'px)';
    }
});