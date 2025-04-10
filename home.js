var envolopeBox = document.querySelector('.envolope')
var arrowButton = document.querySelector('.arrow');
var slidebarContent = document.querySelector('.slidebar');

console.log(arrowButton, slidebarContent, envolopeBox);

arrowButton.addEventListener('click', (e) => {
    slidebarContent.classList.toggle('active');

    console.log('Toggle clicked! Current state:', slidebarContent.classList.contains('active'));

    e.stopPropagation();
})

document.addEventListener('click', (e) => {
    if (!slidebarContent.contains(e.target) && !envolopeBox.contains(e.target)) {
      slidebarContent.classList.remove('active');
      console.log('Clicked outside — closed');
    }
  });