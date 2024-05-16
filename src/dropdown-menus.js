export default function dropdownMenus() {
  const menuButtons = document.querySelectorAll(".btn-menu");
  const dropdowns = document.querySelectorAll(".dropdown-content");

  for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener("click", (event) => {
      const dropdown = event.target.nextElementSibling;
      dropdown.classList.toggle("show");
      for (let i = 0; i < dropdowns.length; i++) {
        if (event.target != menuButtons[i]) {
          dropdowns[i].classList.remove("show");
        }
      }
    });
  }

  window.addEventListener("click", (event) => {
    if (event.target.className != "btn-menu") {
      for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove("show");
      }
    }
  });
}
