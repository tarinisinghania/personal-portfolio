// var envolopeBox = document.querySelector('.envolope')
// var arrowButton = document.querySelector('.arrow');
// var slidebarContent = document.querySelector('.slidebar');

// console.log(arrowButton, slidebarContent, envolopeBox);

// arrowButton.addEventListener('click', (e) => {
//     slidebarContent.classList.toggle('active');

//     console.log('Toggle clicked! Current state:', slidebarContent.classList.contains('active'));

//     e.stopPropagation();
// })

// document.addEventListener('click', (e) => {
//     if (!slidebarContent.contains(e.target) && !envolopeBox.contains(e.target)) {
//       slidebarContent.classList.remove('active');
//       console.log('Clicked outside — closed');
//     }
//   });

  var arrowButton = document.querySelector('.arrow');
var slidebarContent = document.querySelector('.slidebar');

// Toggle the slidebar when the arrow button is clicked
arrowButton.addEventListener('click', (e) => {
    slidebarContent.classList.toggle('active');
    e.stopPropagation(); // Prevent the click event from bubbling up to the document
});

// Close the slidebar when clicking outside of it
document.addEventListener('click', (e) => {
    // Check if the click target is outside the slidebar
    if (!slidebarContent.contains(e.target) && !arrowButton.contains(e.target)) {
        slidebarContent.classList.remove('active');
        console.log('Clicked outside — closed');
    }
});
