//-------------------------------------------
//! function select() {
//   let sel = document.getElementById("mySelect").selectedIndex;
//   let options = document.getElementById("mySelect").options;
//   console.log("Выбрана опция " + options[sel].text);
// }
//-------------------------------------------
//-------------------------------------------
//! function range() {
//   let rng = document.getElementById("r1");
//   let p = document.getElementById("one");
//   p.innerHTML = rng.value;
// }
//-------------------------------------------
//-------------------------------------------
//! function range() {
//   let rng = document.getElementById("r1");
//   let p = document.getElementById("i1");
//   i1.value = rng.value;
// }
//-------------------------------------------
//-------------------------------------------
function range() {
  let rng = document.getElementById("r1");
  let div = document.getElementById("test");
  div.style.width = rng.value + "px";
}
