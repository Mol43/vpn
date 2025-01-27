document.addEventListener("DOMContentLoaded", function () {
  const reklamaFlex = document.querySelector(".reklama-flex");
  const reklamaItems = reklamaFlex.innerHTML;
  
  reklamaFlex.innerHTML += reklamaItems; 

  reklamaFlex.style.whiteSpace = "nowrap"; 
  reklamaFlex.style.overflow = "hidden"; 

  let scrollAmount = 0;
  function scrollReklama() {
    scrollAmount -= 2;
    if (scrollAmount <= -reklamaFlex.scrollWidth / 2) {
      scrollAmount = 0;
    }
    reklamaFlex.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(scrollReklama);
  }

  scrollReklama();
});
