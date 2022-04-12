document.getElementById("nav").onmouseover = function (event) {
  let target = event.target;
  if (target.className == "menu-item") {
    let s = target.getElementsByClassName("submenu");
    closeMenu();
    s[0].style.display = "block";
  }
};

document.onmouseover = function (event) {
  let target = event.target;
  console.log(event.target);
  if (target.className != "menu-item" && target.className != "submenu") {
    closeMenu();
    console.log(target);
  }
};

function closeMenu() {
  let menu = document.getElementById("nav");
  let submenu = document.getElementsByClassName("submenu");
  for (let i = 0; i < submenu.length; i++) {
    submenu[i].style.display = "none";
  }
}
