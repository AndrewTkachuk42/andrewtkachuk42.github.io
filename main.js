let getSel = (sel) => document.querySelector(sel);

let currentX = 0;
let transformX = 0;

let img = getSel('.photo');

img.style.backgroundImage = 'url(./1/5.jpeg)';

// img.onmousedown = function(){
//     img.addEventListener('mousemove', swipe);
//     currentX = event.clientX;
//     document.onmouseup = function(){
//     img.removeEventListener('mousemove', swipe);
//     transformX = 0;
// };
// };

img.ontouchstart = function () {
    img.addEventListener('ontouchmove', swipe);
    currentX = event.clientX;
    document.ontouchend = function () {
        img.removeEventListener('ontouchmove', swipe);
        transformX = 0;
    };
};



function swipe() {
    console.log('swipe');
    
    if (event.clientX < currentX) {
        transformX -= 10;
        console.log(transformX);
    }
    else {
        transformX += 10;
        console.log(transformX);
    }
    img.style.transform = `translateX(${transformX}px)`;
}

