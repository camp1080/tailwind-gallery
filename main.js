document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");

  images.forEach((image) => {
    image.addEventListener("click", function (event) {
      console.log("clicked");
      event.preventDefault();
      modalImage.src = image.src;
      modal.classList.remove("invisible");
    });
  });

  modal.addEventListener("click", function (ev) {
    if (ev.target === modal || ev.target === modalImage) {
      modal.classList.add("invisible");
      modalImage.src = "";
    }
  });
});
