const block = document.querySelector('.block');
let position = 0;
let topPosition = 0;

const move = () => {
    if (position <= 440 && topPosition === 0 ) {
        position += 16;
        block.style.left = `${position}px`;
        setTimeout(move, 100);
    } else if (position >= 440 && topPosition <= 440) {
        topPosition += 16;
        block.style.top = `${topPosition}px`
        setTimeout(move, 100);
    } else if (topPosition >= 440 && position !== 0) {
        position -= 16;
        block.style.left = `${position}px`;
        setTimeout(move, 100);
    } else if (position <= 0 &&  topPosition >= 0) {
        topPosition -=16;
        block.style.top = `${topPosition}px`
        setTimeout(move, 100);
    }
};
move();

let number = 0;
const score = () => {
    number++;
    console.log(number + ' second');
}
const time = setInterval(score, 1000);