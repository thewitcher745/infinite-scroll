const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photoArray = [];
let count = 5;

// Set all attributes together
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Hide the loader
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    count = 20;
  }
}

// Create elements for links and photos
function generatePhotos() {
  totalImages += count;
  for (var i = 0; i < count; i++) {
    const apiUrl = `https://picsum.photos/1920/1080?random=${i}`;
    const item = document.createElement("a");

    setAttributes(item, {
      href: "www.google.com",
      target: "_blank",
    });

    const img = document.createElement("img");
    setAttributes(img, {
      src: apiUrl,
    });

    img.addEventListener("load", () => {
      imageLoaded();
    });

    item.appendChild(img);
    imageContainer.appendChild(item);
  }
}

// Check to see if we are near the bottom of the page
window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight > 0.8 * document.body.offsetHeight) {
    generatePhotos();
  }
});

// On load
window.scrollTo(0, 0);
generatePhotos();
