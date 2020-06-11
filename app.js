window.addEventListener("scroll", function(){

  var sc = document.querySelector(".toTop");
  sc.classList.toggle("active" , window.scrollY > 500);
})

function scrolltop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}