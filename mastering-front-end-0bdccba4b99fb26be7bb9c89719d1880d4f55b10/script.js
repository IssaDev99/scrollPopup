// Créer un événement au scroll
const nav = document.querySelector("nav")
const imgImprovise = document.getElementById('imgImprovise');
const popUp = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

window.addEventListener("scroll", ()=>{
  if(window.scrollY > 10){
    nav.style.height ="45px";
  }
  else {
    nav.style.height= "90px"
  }

  if(window.scrollY > 200){
    imgImprovise.style.opacity="1";
    imgImprovise.style.transform="translateX(0)"
  }

  if(window.scrollY > 1500){
    popUp.style.opacity="1";
    popUp.style.transform="translateX(0)";
  } 
})

closeBtn.addEventListener("click",()=>{
  popUp.remove();
})


