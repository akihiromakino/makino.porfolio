const contentsList = document.querySelectorAll('.contentsList');
document.addEventListener('scroll', () => {
  for (let i = 0; i < contentsList.length; i++) {
    const getElementDistance = contentsList[i].
    getBoundingClientRect().top + contentsList[i].clientHeight * 0.5;
  
    if (window.innerHeight > getElementDistance) {
      contentsList[i].classList.add('show');
    }
  }
})