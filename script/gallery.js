const gallery = document.getElementById("gallery");
let width = [100, 200, 300];
let height = [200, 100, 200];

for (let i = 0; i < 100; i++) {
  let w = Math.floor(Math.random() * 1000);
  let h = Math.floor(Math.random() * 1000);
  width.push(w);
  height.push(h);
}
console.log(width);
console.log(height);

let text = "";
for (let i = 0; i < width.length; i++) {
  if (Math.abs(width[i] - height[i]) > 100) {
    continue;
  }
  let myText = `<div class="imgCard">
    <img src="https://source.unsplash.com/${width[i]}x${height[i]}" alt="${width[i]}"/>
    </div>`;
  text += myText;
}
gallery.innerHTML = text;
