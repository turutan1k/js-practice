//-------------------------------------------
// function chbox() {
//   let chbox;
//   chbox = document.getElementById('one');

//   if (chbox.checked) {
//     console.log("Выбран");
//   } else {
//     console.log("Не выбран");
//   }
// }
//-------------------------------------------
//-------------------------------------------
function radi() {
  let radi = document.getElementsByName("r1");
  for (let i = 0; i < radi.length; i++) {
    if (radi[i].checked) {
      console.log("Выбран " + i + " элемент");
    }
  }
}
//-------------------------------------------
