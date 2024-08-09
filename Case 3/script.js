let currentImgIndex = 0;
const img = document.querySelectorAll(".slider-image");
const totalImg = img.length;
const firstButton = document.getElementById("firstButton");
const secondButton = document.getElementById("secondButton");
const imgCounter = document.getElementById("imgCounter");

function updateSlider() {
  img.forEach((img, index) => {
    img.classList.remove("active");
    if (index === currentImgIndex) {
      img.classList.add("active");
    }
  });
  imgCounter.textContent = `Изображение ${
    currentImgIndex + 1
  } из ${totalImg}`;
}

firstButton.addEventListener("click", () => {
  currentImgIndex = (currentImgIndex - 1 + totalImg) % totalImg;
  updateSlider();
});

secondButton.addEventListener("click", () => {
  currentImgIndex = (currentImgIndex + 1) % totalImg;
  updateSlider();
});

updateSlider();