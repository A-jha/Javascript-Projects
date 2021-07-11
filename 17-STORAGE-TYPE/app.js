const toogle_btn = document.getElementById("tgl_btn");

toogle_btn.addEventListener("click", () => {
  let a = document.querySelector(".nav-links");
  // a.classList.toggle("active");
  if (a.style.display === "none") {
    a.style.display = "";
  } else {
    a.style.display = "none";
  }
});
