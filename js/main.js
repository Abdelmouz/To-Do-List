let btn = document.getElementById("btn1");
let input = document.getElementById("input");
let boody = document.getElementById("boody");
let item = document.getElementsByClassName("item");
let spann = document.getElementsByClassName("name");
let body = document.querySelector("body");
/*
1-to add value to thelist
2- check the input is not empty
*/
let x = 1;
let add = () => {
  if (input.value != "") {
    let value = input.value;
    if (x == 1) {
      boody.innerHTML += `<div class="item2" id="item">
          <span id="name" class="name">${value}</span>
          <span class="close">X</span>
        </div>`;
      x = 0;
    } else {
      boody.innerHTML += `<div class="item" id="item">
          <span id="name" class="name">${value}</span>
          <span class="close">X</span>
        </div>`;
      x = 1;
    }

    input.value = "";
  } else {
    alert("Plese Enter The Text");
  }
};
/*
1- remove the item
 */
btn.addEventListener("click", add);
boody.addEventListener("click", (moham) => {
  if (moham.target.className == "close") {
    moham.target.parentElement.remove();
  }
});
/*
1- to add Centerline
 */
boody.addEventListener("click", (mom) => {
  if (mom.target.className == "item" || mom.target.className == "item2") {
    console.log("xsxs");
    mom.target.classList.add("cheack");
  } else if (
    mom.target.className == "item cheack" ||
    mom.target.className == "item2 cheack"
  ) {
    console.log("mmmmmmmmmmmmm");
    mom.target.classList.remove("cheack");
  }
});
