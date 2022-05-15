/*
** Text Animation
*/
let textTag = document.querySelector('.section1 h1');
let text = textTag.innerText;

let splittedText = text.split('');

textTag.innerHTML = '';

for(let i = 0; i < splittedText.length; i++) {
    if(splittedText[i] == " ") {
        splittedText[i] = "&nbsp";
    }

    textTag.innerHTML += `<span>${splittedText[i]}</span>`
}

let k = 0;
let interval = setInterval(() => {
    let spans = textTag.querySelectorAll('span');
    let singleSpan = spans[k];

    singleSpan.className = 'fadeMove'

    k++;

    if(k === spans.length) {
        clearInterval(interval);
    }
}, 90)

/*****************************************************************/

/*
** Scroll Animation
*/
let border = document.querySelector('.border-line');
let animationWidth = 0;
window.onscroll = () => {
    /*
    ** Line Animation
    */
    if(this.oldScroll > this.scrollY) {
        animationWidth -= 2;
    } else {
        animationWidth += 2;
    }

    if(animationWidth >= 100) {
        animationWidth = 100;
    } 
    if(animationWidth <= 0) {
        animationWidth = 0;
    }

    border.style.width = animationWidth + '%';

    this.oldScroll = this.scrollY;

    /*
    ** Images Animation
    */
    let sectionForAnimation = document.querySelector('.section2 .images');
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    let leftImage = document.querySelector('.slideFromLeft');   // Left Image   
    let rightImage = document.querySelector('.slideFromRight');   // Right Image

    if(sectionPosition < screenPosition) {
        leftImage.classList.add('animated');
        rightImage.classList.add('animated');
    }
}