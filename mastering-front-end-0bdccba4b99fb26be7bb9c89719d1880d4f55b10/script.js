// Créer un événement au scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.1) {
    nav.style.height = "45px";
  } else {
    nav.style.height = "90px";
  }

  if (scrollValue > 0.4) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "translateX(0)";
  }

  if (scrollValue > 0.8) {
    popup.style.opacity = "1";
    popup.style.transform = "translateX(0)";
  }
});

closeBtn.addEventListener("click", () => {
  popup.remove();
});
