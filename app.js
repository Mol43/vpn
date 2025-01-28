document.addEventListener("DOMContentLoaded", function () {
  const adFlex = document.querySelector(".ad-flex");
  const adItems = adFlex.innerHTML;
  
  adFlex.innerHTML += adItems; 

  adFlex.style.whiteSpace = "nowrap"; 
  adFlex.style.overflow = "hidden"; 

  let scrollAmount = 0;
  function scrollAd() {
    scrollAmount -= 2;
    if (scrollAmount <= -adFlex.scrollWidth / 2) {
      scrollAmount = 0;
    }
    adFlex.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(scrollAd);
  }

  scrollAd();

  // Add event listener to the up-button
  const upButton = document.querySelector(".up-button");
  upButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
