function showPage(pageId, element) {

    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Remove active nav highlight
    document.querySelectorAll('.nav-right a').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    if(element){
        element.classList.add('active');
    }

    // Hide description on non-work pages
    const description = document.querySelector('.name-description');

    if(pageId === "work"){
        description.style.display = "inline";
    } else {
        description.style.display = "none";
    }
}

// Check URL for page parameter on load
window.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page");

    if (page) {
        showPage(page);
    } else {
        showPage("work"); // default page
    }
});


const slideshowImages = [
    "archive/Banaras_Ghat.jpg",
    "archive/Menstruation Cycles.jpg",
    "archive/litho.jpeg",
    "archive/webpost.png",
    "archive/Singhania, Tarini_Manifesto.jpg",
    "archive/fashion.png",
    "archive/sky map.jpg",
    "archive/Reflections of myself .jpg",
    "archive/Junk owl .jpg"
];

let currentImageIndex = 0;
const slideshow = document.getElementById("about-slideshow");

function changeImage() {
    currentImageIndex++;
    if (currentImageIndex >= slideshowImages.length) {
        currentImageIndex = 0;
    }
    slideshow.src = slideshowImages[currentImageIndex];
}

// Change image every 3 seconds
setInterval(changeImage, 3000);