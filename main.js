let getSel = (sel) => document.querySelector(sel);

let currentX = 0;
let transformX = 0;
let x = 0;
let negX = 0;
let mltp = 20;
let currentImg = 5;

let img = getSel('.photo');

img.style.backgroundImage = 'url(./1/5.jpeg)';


img.ontouchstart = function () {
    currentX = event.touches[0].clientX;
    img.addEventListener('touchmove', swipe);
}

function swipe() {
    if (event.touches[0].clientX < currentX) {
        x = currentX - event.touches[0].clientX;
        negX = x * -1;
        img.style.transform = `translateX(${negX * (x / mltp)}px)`;
    }
    else {
        x = event.touches[0].clientX - currentX;
        img.style.transform = `translateX(${x * (x / mltp)}px)`;
    }
    // else if 
    console.log('x:', x);
    console.log('now:', event.touches[0].clientX);
    console.log(x * (x / mltp));


}


img.ontouchend = function () {
    if (currentImg === 9) {
        currentImg = 1;
    }
    if (x * (x / mltp) > 550) {
        img.style.backgroundImage = `url(./1/${currentImg + 1}.jpeg)`;
        transformX = 0;
        currentX = 0;
        x = 0;
        currentImg++;
        opct();
    }
    
    transformX = 0;
    currentX = 0;
    x = 0;
    console.log('end');
    img.style.transform = `translateX(${transformX}px)`;
    img.removeEventListener('touchmove', swipe);
    
}
function opct() {
    img.classList.toggle('op-0');
    setTimeout(function(){img.classList.toggle('op-0');},500);
}



// img.onmousedown = function(){
//     img.addEventListener('mousemove', swipe);
//     currentX = event.clientX;
//     document.onmouseup = function(){
//     img.removeEventListener('mousemove', swipe);
//     transformX = 0;
// };
// };

// img.ontouchstart = function () {
//     img.addEventListener('ontouchmove', swipe);
//     currentX = event.clientX;
//     document.ontouchend = function () {
//         img.removeEventListener('ontouchmove', swipe);
//         transformX = 0;
//     };
// };



// function swipe() {
//     console.log('swipe');

//     if (event.clientX < currentX) {
//         transformX -= 10;
//         console.log(transformX);
//     }
//     else {
//         transformX += 10;
//         console.log(transformX);
//     }
//     img.style.transform = `translateX(${transformX}px)`;
// }

