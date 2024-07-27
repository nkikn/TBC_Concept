// let currentIndex = 0;
// let isDragging = false;
// let startX, initialPos;

// const cardWidth = 350;
// const cardMargin = 34;
// const slideWidth = cardWidth + cardMargin;
// const visibleCards = 3;
// const totalCards = document.querySelectorAll('.offers-card').length;
// const maxScroll = totalCards - visibleCards;

// const slider = document.querySelector('.offers-slider');
// const thumb = document.querySelector('.offers-thumb');
// const prevBtn = document.getElementById('offers-prev');
// const nextBtn = document.getElementById('offers-next');
// const sliderWrapper = document.querySelector('.offers-slider-wrapper');
// const scrollbar = document.querySelector('.offers-scrollbar');

// const updateSlider = () => {
//     const offset = -currentIndex * slideWidth;
//     console.log("offset:", offset);
//     slider.style.transform = `translateX(${offset}px)`;

//     const thumbWidth = scrollbar.offsetWidth * (1 / visibleCards);
//     const thumbOffset = (currentIndex / maxScroll) * (scrollbar.offsetWidth - thumbWidth);
//     console.log("thumbWidth:", thumbWidth);
//     console.log("thumbOffset:", thumbOffset);
//     thumb.style.width = `${thumbWidth}px`;
//     thumb.style.left = `${thumbOffset}px`;
//     if(currentIndex == 0){
//         prevBtn.style.color = "#AEAEAE";
//     }else if(currentIndex == 2){
//         nextBtn.style.color = "#AEAEAE";
//     }else{
//         prevBtn.style.color = "#182cc0";
//         nextBtn.style.color = "#182cc0";
//     }
// };

// const onThumbMouseDown = (e) => {
//     isDragging = true;
//     startX = e.clientX;
//     initialPos = thumb.offsetLeft;
//     e.preventDefault();
// };

// const onThumbMouseMove = (e) => {
//     if (isDragging) {
//         const moveX = e.clientX - startX;
//         const thumbWidth = thumb.offsetWidth;
//         const maxThumbOffset = scrollbar.offsetWidth - thumbWidth;
//         let thumbOffset = Math.min(Math.max(0, initialPos + moveX), maxThumbOffset);
//         thumb.style.left = `${thumbOffset}px`;
//         currentIndex = (thumbOffset / maxThumbOffset) * maxScroll;
//         console.log("currentIndex (thumb):", currentIndex);
//         updateSlider();
//     }
// };

// const onMouseUp = () => {
//     isDragging = false;
// };

// const onSliderMouseDown = (e) => {
//     isDragging = true;
//     startX = e.clientX;
//     initialPos = slider.getBoundingClientRect().left - sliderWrapper.getBoundingClientRect().left;
//     e.preventDefault();
// };

// const onSliderMouseMove = (e) => {
//     if (isDragging) {
//         const moveX = e.clientX - startX;
//         const newOffset = initialPos + moveX;
//         const maxOffset = -maxScroll * slideWidth;
//         const finalOffset = Math.max(Math.min(0, newOffset), maxOffset);
//         slider.style.transform = `translateX(${finalOffset}px)`;
//         currentIndex = Math.abs(finalOffset / slideWidth);
//         console.log("currentIndex (slider):", currentIndex);
//         updateSlider();
//     }
// };

// prevBtn.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex = Math.max(0, currentIndex - 1); // Adjust step for fractional index
//         console.log("currentIndex (prev):", currentIndex);
//         updateSlider();
//     }
// });

// nextBtn.addEventListener('click', () => {
//     if (currentIndex < maxScroll) {
//         currentIndex = Math.min(maxScroll, currentIndex + 1); // Adjust step for fractional index
//         console.log("currentIndex (next):", currentIndex);
//         updateSlider();
//     }
// });

// thumb.addEventListener('mousedown', onThumbMouseDown);
// thumb.addEventListener('mousemove', onThumbMouseMove);
// thumb.addEventListener('mouseup', onMouseUp);
// document.addEventListener('mouseup', onMouseUp);

// sliderWrapper.addEventListener('mousedown', onSliderMouseDown);
// sliderWrapper.addEventListener('mousemove', onSliderMouseMove);
// sliderWrapper.addEventListener('mouseup', onMouseUp);
// document.addEventListener('mouseup', onMouseUp);

// // Initial update
// updateSlider();