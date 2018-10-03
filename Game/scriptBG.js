let left = 3;
let topNu = 3;
const array = ["Jonko", "Assie", "Toeter", "Mixi", "Fakkel", "Ganja", "Een J", "Takkie", "Wake"]

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

const spanTekst = document.querySelectorAll('span');

for (var i = 0; i < spanTekst.length; i++) {
  spanTekst[i].addEventListener('click', function(){
    for (var i = 0; i < bgText.length; i++) {
      if(bgText[i].innerText == this.innerHTML){
        bgText[i].style.color = "white"
      }
    }


  })
}
