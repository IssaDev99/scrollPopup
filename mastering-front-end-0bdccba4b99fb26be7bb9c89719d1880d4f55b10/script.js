// Créer un événement au scroll
window.addEventListener("scroll", () => {
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.35) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
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
