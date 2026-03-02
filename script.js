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


