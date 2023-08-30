var currentImage = 1;
var totalImages = 9;

function showImage(n) {
    var image = document.getElementById('slideshow-image');
    var imagePosition = document.getElementById('image-position');

    image.src = 'image/hinh' + n + '.jpg';
    imagePosition.innerText = "Ảnh " + n + '/' + totalImages;
}

function nextImage() {
    currentImage++;
    if (currentImage > totalImages) {
        currentImage = 1;
    }
    showImage(currentImage);
}

function prevImage() {
    currentImage--;
    if (currentImage < 1) {
        currentImage = totalImages;
    }
    showImage(currentImage);
}