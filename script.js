const toTop =document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if(window.pageYOffset > 100){
    toTop.classList.add(".toTop.active");
  }
  else{
    toTop.classList.remove(".toTop.active");
  }
})