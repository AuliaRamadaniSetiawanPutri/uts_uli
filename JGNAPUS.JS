// Ambil elemen
const popupOverlay = document.getElementById("popupOverlay");
const popupImg = document.querySelector(".popup-img");
const popupTitle = document.querySelector(".popup-title");
const popupDesc = document.querySelector(".popup-desc");
const closePopup = document.querySelector(".close-popup");
const btnClose = document.querySelector(".btn-close");

// Tambahkan event ke semua gambar di section SEKAI
document.querySelectorAll(".semua-foto img").forEach(img => {
  img.addEventListener("click", () => {
    popupImg.src = img.src;
    popupTitle.textContent = "Sekai Preview";
    popupDesc.textContent = "A glimpse into one of the many worlds within Project Sekai — where emotions take form through music and dreams.";
    popupOverlay.style.display = "flex";
  });
});

// Tutup popup
closePopup.addEventListener("click", () => popupOverlay.style.display = "none");
btnClose.addEventListener("click", () => popupOverlay.style.display = "none");

// Klik luar area popup juga nutup
popupOverlay.addEventListener("click", e => {
  if (e.target === popupOverlay) popupOverlay.style.display = "none";
});