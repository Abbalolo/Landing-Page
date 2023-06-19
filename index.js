const menu = document.querySelector('.menu-bar');
const nav = document.querySelector('.nav');
const close = document.querySelector('.close');
const blur = document.querySelector(".blur")
const currentImage = document.getElementById('current-image');
const preBtn = document.querySelector('.previous');
const nexBtn = document.querySelector('.next');

menu.addEventListener('click', () => {
  nav.classList.add('open-nav');
  blur.style.display = "flex"
});

close.addEventListener('click', () => {
  nav.classList.remove('open-nav');
  blur.style.display = "none"
});

blur.addEventListener("click", () => {
  nav.classList.remove('open-nav');
  blur.style.display = "none"
})


const images = [
  "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=787&q=80",
  "https://plus.unsplash.com/premium_photo-1674165228639-ac4b9bb9b3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1574189555774-7cbcd66d0fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
];

let currentPage = 0;

function updateImage() {
  const imageUrl = images[currentPage];
  currentImage.src = imageUrl;
}

preBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
  } else {
    currentPage = images.length - 1;
  }
  updateImage();
});

nexBtn.addEventListener('click', () => {
  if (currentPage < images.length - 1) {
    currentPage++;
  } else {
    currentPage = 0;
  }
  updateImage();
});

updateImage();
