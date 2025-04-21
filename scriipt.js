const galleryImages = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementsById("lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeButton = document.getElementById("close-button");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightbox.style.display = "block";
  });
});

closeButton.addEventListener("click", () => {
  lightbox.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
