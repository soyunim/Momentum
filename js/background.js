const images = ["1.jpeg","2.jpeg","3.JPG","4.JPG","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"];
const randomImg = images[Math.floor(Math.random()*images.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${randomImg}`;

document.body.appendChild(bgImg);