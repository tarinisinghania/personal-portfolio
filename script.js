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


// ---------------------------
// 1️⃣ List of all projects
// ---------------------------
const allProjects = [
    { title: "UI/UX App Design", link: "tipsi.html", img: "images/tipsi_mockup2.png" },
    { title: "Fare Magazine", link: "fare.html", img: "images/fare.png" },
    { title: "Bloomberg Article", link: "editorial.html", img: "images/editorial.png" },
    { title: "Go Touch Some Grass", link: "gtsg.html", img: "images/artifact.png" },
    { title: "Mantra Merch", link: "mantra.html", img: "images/mock-up2.jpg" },
    { title: "Le Labo", link: "lelabo.html", img: "images/packaging.png" },
    { title: "Growing Relationships", link: "cookie.html", img: "images/cookie.png" },
];

// ---------------------------
// 2️⃣ List of project page filenames
// ---------------------------
const projectPages = allProjects.map(p => p.link);

// ---------------------------
// 3️⃣ Helper to get file name from path
// ---------------------------
function getFileName(path) {
    return path.substring(path.lastIndexOf("/") + 1);
}

// ---------------------------
// 4️⃣ Show random related projects
// ---------------------------
function showRandomRelated() {
    const currentFile = getFileName(window.location.pathname);

    // Only run on project pages
    if (!projectPages.includes(currentFile)) return;

    // Exclude current page from random selection
    const others = allProjects.filter(p => p.link !== currentFile);

    if (others.length === 0) return;

    // Shuffle and pick 3
    const randomThree = others.sort(() => 0.5 - Math.random()).slice(0, 3);

    // Create container
    const container = document.createElement('section');
    container.className = 'related-projects';
    container.innerHTML = `<h3>Other Projects</h3><div class="related-grid"></div>`;
    const grid = container.querySelector('.related-grid');

    randomThree.forEach(proj => {
        const item = document.createElement('a');
        item.className = 'related-item';
        item.href = proj.link;
        item.innerHTML = `<img src="${proj.img}" alt="${proj.title}"><p>${proj.title}</p>`;
        grid.appendChild(item);
    });

    document.body.appendChild(container);
}

// ---------------------------
// 5️⃣ Run on page load
// ---------------------------
window.addEventListener('DOMContentLoaded', showRandomRelated);