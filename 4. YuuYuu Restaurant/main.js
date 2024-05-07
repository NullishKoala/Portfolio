const dropdownMenuDiv = document.getElementById("dropdown-menu-div");

const inputHamburgerMenu = document.getElementById("check");

function showDiv() {
  inputHamburgerMenu.checked
    ? (dropdownMenuDiv.style.display = "flex")
    : (dropdownMenuDiv.style.display = "none");
}

inputHamburgerMenu.addEventListener("click", showDiv);
