let left = 3;
let topNu = 3;
const array = ["sos", "drugs", "ganja", "assie", "jonko", "wiet", "cocaine", "sleutelpuntje", "toeter", "hasj", "Klappen", "Pirky", "X", "Nak", "Harken", "blokkertje", "bommetje", "hangen", "flow", "scheppen", "spacen","trip"]

for (var i = 0; i <100; i++) {
  var p = document.createElement("p");
  let random = Math.floor(Math.random()*array.length);
  var pTekst = document.createTextNode(array[random]);
  p.appendChild(pTekst);
  p.className = "bgText"
  document.querySelector('body').appendChild(p);
  p.style.top = topNu + "%"
  p.style.left = left + "%"
  left+=10;
  if(left > 97){
    left = 3;
    topNu+=10;
  }
}

let x = "sos";

const bgText = document.querySelectorAll(".bgText");

for (var i = 0; i < bgText.length; i++) {
  if(bgText[i].innerText == x){
    bgText[i].style.color = "white"
  }
}
