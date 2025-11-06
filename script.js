const popupOverlay = document.getElementById("popupOverlay");
const popupImg = document.querySelector(".popup-img");
const popupTitle = document.querySelector(".popup-title");
const popupDesc = document.querySelector(".popup-desc");
const closePopup = document.querySelector(".close-popup");
const btnView = document.querySelector(".btn-view");

document.querySelectorAll(".semua-foto img").forEach(img => {
  img.addEventListener("click", () => {
    popupImg.src = img.src;
    popupTitle.textContent = img.getAttribute("data-title") || "Sekai Preview";
    popupDesc.textContent = img.getAttribute("data-desc") || "A glimpse into the world of Project Sekai.";
    popupOverlay.style.display = "flex";

    btnView.onclick = () => window.open(img.src, "_blank");
  });
});

closePopup.addEventListener("click", () => popupOverlay.style.display = "none");
popupOverlay.addEventListener("click", e => {
  if (e.target === popupOverlay) popupOverlay.style.display = "none";
});

document.querySelectorAll('.hover-img').forEach(img => {
  const original = img.src;
  const hover = img.dataset.hover;

  img.addEventListener('mouseenter', () => img.src = hover);
  img.addEventListener('mouseleave', () => img.src = original);
});
