const tileset = new URL("../assets/outside_sprites.png", import.meta.url).href;
const body = document.querySelector("body");
const image = new Image();
console.log(import.meta.url);

image.src = tileset;
image.addEventListener("load", () => {
  if (body != null) {
    body.appendChild(image);
  }
});
