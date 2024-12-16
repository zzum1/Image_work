


const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
];


const showImages = document.querySelector('.show');
const changeImages = document.querySelector('.change');
let box = '';

showImages.addEventListener('click', () => {
    for (let i = 0; i < images.length; i++) {
        box = document.createElement('img');
        box.classList.add('box');
        box.style.display = 'flex';
        box.style.width = '200px';
        box.style.height = '200px';
        box.src = `images/${images[i]}`;
        console.log(box.src);
        document.querySelector('.container').appendChild(box);
    }
});



changeImages.addEventListener('click', () => {
    const mixedImages = images.sort(() => Math.random() - 0.5);
    console.log(mixedImages);
    const allImages = document.querySelectorAll('.container img');
    for (let img of allImages) {
        img.src = `images/${mixedImages[img]}`;
    }
});




