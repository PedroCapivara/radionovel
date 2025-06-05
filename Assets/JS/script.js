document.querySelectorAll(".play").forEach(function (div) {
  div.addEventListener("click", function () {
    this.classList.toggle("play-active");
  });
});

function toggleSubmenu() {
  const submenu = document.querySelector('#submenu');
  if (submenu.style.display === 'block') {
    submenu.style.display = 'none';
  } else {
    submenu.style.display = 'block';
  }
}
