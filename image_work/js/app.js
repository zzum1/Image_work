
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
        document.querySelector('.container').appendChild(box);
    }

    //I was written this code after showing images and it doesn't work, but why?
    document.querySelectorAll('img').forEach((img) => {
        img.addEventListener('dblclick', () => {
            img.src = 'images/tulip.jpeg';
        });
    });
});


changeImages.addEventListener('click', () => {
    const mixedImages = images.sort(() => Math.random() - 0.5);
    const allImages = document.querySelectorAll('.container img');
    console.log(allImages);
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].src = `images/${mixedImages[i]}`;
    }
});
