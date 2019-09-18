let getSel = (sel) => document.querySelector(sel);

let currentX = 0;
let transformX = 0;
let x = 0;
let mltp = 5;

let img = getSel('.photo');

img.style.backgroundImage = 'url(./1/5.jpeg)';


img.ontouchstart = function () {
    currentX = event.touches[0].clientX;
    img.addEventListener('touchmove', swipe);
}

function swipe() {
    if (event.touches[0].clientX < currentX) {
        x = currentX - event.touches[0].clientX;
        x = x * -1;
        img.style.transform = `translateX(${x * mltp}px)`;
    }
    else {
        x = event.touches[0].clientX - currentX;
        img.style.transform = `translateX(${x * mltp}px)`;
    }
    console.log('x:', x);
    console.log('now:', event.touches[0].clientX);
    console.log(x * mltp);
    
    
}


img.ontouchend = function () {
    transformX = 0;
    currentX = 0;
    x = 0;
    console.log('end');
    img.style.transform = `translateX(${transformX}px)`;
    img.removeEventListener('touchmove', swipe);
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

