let awardscurrentIndex = 0;
let awardsisDragging = false;
let awardsstartX, awardsinitialPos;

const awardscardWidth = 350;
const awardscardMargin = 34;
const awardsslideWidth = awardscardWidth + awardscardMargin;
const awardsvisibleCards = 3;
const awardstotalCards = document.querySelectorAll('.awards-card').length;
const awardsmaxScroll = awardstotalCards - awardsvisibleCards;

const awardsslider = document.querySelector('.awards-slider');
const awardsthumb = document.querySelector('.awards-thumb');
const awardsprevBtn = document.getElementById('awards-prev');
const awardsnextBtn = document.getElementById('awards-next');
const awardssliderWrapper = document.querySelector('.awards-slider-wrapper');
const awardsscrollbar = document.querySelector('.awards-scrollbar');

const awardsUpdateSlider = () => {
    const offset = -awardscurrentIndex * awardsslideWidth;
    console.log("offset:", offset);
    awardsslider.style.transform = `translateX(${offset}px)`;

    const thumbWidth = awardsscrollbar.offsetWidth * (1 / awardsvisibleCards);
    const thumbOffset = (awardscurrentIndex / awardsmaxScroll) * (awardsscrollbar.offsetWidth - thumbWidth);
    console.log("thumbWidth:", thumbWidth);
    console.log("thumbOffset:", thumbOffset);
    awardsthumb.style.width = `${thumbWidth}px`;
    awardsthumb.style.left = `${thumbOffset}px`;
    if(awardscurrentIndex == 0){
        awardsnextBtn.style.color = "#182cc0";
        awardsprevBtn.style.color = "#AEAEAE";
    }else if(awardscurrentIndex == 1){
        awardsprevBtn.style.color = "#182cc0";
        awardsnextBtn.style.color = "#AEAEAE";
    }
};

const awardsonThumbMouseDown = (e) => {
    awardsisDragging = true;
    awardsstartX = e.clientX;
    awardsinitialPos = awardsthumb.offsetLeft;
    e.preventDefault();
};

const awardsonThumbMouseMove = (e) => {
    if (awardsisDragging) {
        const moveX = e.clientX - awardsstartX;
        const thumbWidth = awardsthumb.offsetWidth;
        const maxThumbOffset = awardsscrollbar.offsetWidth - thumbWidth;
        let thumbOffset = Math.min(Math.max(0, awardsinitialPos + awardsmoveX), maxThumbOffset);
        thumb.style.left = `${thumbOffset}px`;
        awardscurrentIndex = (thumbOffset / maxThumbOffset) * awardsmaxScroll;
        console.log("currentIndex (thumb):", awardscurrentIndex);
        awardsUpdateSlider();
    }
};

const awardsonMouseUp = () => {
    awardsisDragging = false;
};

const awardsonSliderMouseDown = (e) => {
    awardsisDragging = true;
    awardsstartX = e.clientX;
    awardsinitialPos = awardsslider.getBoundingClientRect().left - awardssliderWrapper.getBoundingClientRect().left;
    e.preventDefault();
};

const awardsonSliderMouseMove = (e) => {
    if (awardsisDragging) {
        const moveX = e.clientX - awardsstartX;
        const newOffset = awardsinitialPos + moveX;
        const maxOffset = -awardsmaxScroll * awardsslideWidth;
        const finalOffset = Math.max(Math.min(0, newOffset), maxOffset);
        awardsslider.style.transform = `translateX(${finalOffset}px)`;
        awardscurrentIndex = Math.abs(finalOffset / awardsslideWidth);
        console.log("currentIndex (slider):", awardscurrentIndex);
        awardsUpdateSlider();
    }
};

awardsprevBtn.addEventListener('click', () => {
    if (awardscurrentIndex > 0) {
        awardscurrentIndex = Math.max(0, awardscurrentIndex - 1); // Adjust step for fractional index
        console.log("currentIndex (prev):", awardscurrentIndex);
        awardsUpdateSlider();
    }
});

awardsnextBtn.addEventListener('click', () => {
    if (awardscurrentIndex < awardsmaxScroll) {
        awardscurrentIndex = Math.min(awardsmaxScroll, awardscurrentIndex + 1); // Adjust step for fractional index
        console.log("currentIndex (next):", awardscurrentIndex);
        awardsUpdateSlider();
    }
});

awardsthumb.addEventListener('mousedown', awardsonThumbMouseDown);
awardsthumb.addEventListener('mousemove', awardsonThumbMouseMove);
awardsthumb.addEventListener('mouseup', awardsonMouseUp);
document.addEventListener('mouseup', awardsonMouseUp);

awardssliderWrapper.addEventListener('mousedown', awardsonSliderMouseDown);
awardssliderWrapper.addEventListener('mousemove', awardsonSliderMouseMove);
awardssliderWrapper.addEventListener('mouseup', awardsonMouseUp);
document.addEventListener('mouseup', awardsonMouseUp);

// Initial update
awardsUpdateSlider();