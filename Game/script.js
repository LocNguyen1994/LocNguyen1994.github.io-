const SPAN = document.querySelectorAll('span');
const HEXNUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const quote = document.querySelector('.quote');
const uitleg = document.querySelector('.uitleg');
let number = 0;
const stoprandom = document.querySelector('.stopRandom');

stoprandom.style.display = "none";



const change = function() {

  for (let i = 0; i < SPAN.length; i++) {
    let randomPixles = Math.floor(Math.random() * 25) + 10;
    let percentageTop = Math.floor(Math.random() * 80) + 10;
    let percentageLeft = Math.floor(Math.random() * 70) + 10;
    let grades = Math.floor(Math.random() * 90);
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * HEXNUMBERS.length)
      hexColor += HEXNUMBERS[random]
    }
    SPAN[i].style.color = hexColor;
    SPAN[i].style.fontSize = randomPixles + "px";
    SPAN[i].style.top = percentageTop + "%";
    SPAN[i].style.left = percentageLeft + "%";
    SPAN[i].style.transform = "rotate(" + grades + "deg)"
  }
}
change();

const woorden = document.querySelector(".woordenOver");
woorden.innerHTML = SPAN.length;
let woordenOver = SPAN.length;
const arrayWord = [];

for (var i = 0; i < SPAN.length; i++) {
  SPAN[i].addEventListener('click', function() {
    const woordenOverMsg = document.querySelector('.woordenOverMsg');
    if (arrayWord.includes(this.innerHTML)) {
      woordenOverMsg.innerHTML = "Gozer die heb je al gehad!";
    } else {
      arrayWord.push(this.innerHTML)
      woordenOver -= 1;
      switch (woordenOver) {
        case 0:
          woordenOverMsg.innerHTML = "Aait je heb alles je verdient wel een jointje";
          const nextLevel  = document.querySelector('.nextLevel');
          nextLevel.classList.add('nextLevelAni');
          setTimeout(function(){
            document.querySelector('.nextLevelMessage').style.transform = "scale(1)"
          },2000);
          break;
        case 1:
          woordenOverMsg.innerHTML = "De laatste GAP";
        case 2:
          woordenOverMsg.innerHTML = "Laat een shoetoe voor mij over";
          break;
        case 3:
          woordenOverMsg.innerHTML = "3 dagen later...";
          break;
        case 4:
          woordenOverMsg.innerHTML = "Nog 4 lijntjes!";
          break;
        case 5:
          woordenOverMsg.innerHTML = "Scoopie erbij!!!";
          break;
        case 6:
          woordenOverMsg.innerHTML = "ZO ZO";
          break;
        case 7:
          woordenOverMsg.innerHTML = "Goed de goeie kant op ouwe";
          break;
        case 8:
          woordenOverMsg.innerHTML = "Eentje gevonden! he he";
          break;
      }
      woorden.classList.add("animatie");
      woorden.innerHTML = woordenOver;
    }

    let audio = document.querySelector(`audio.${this.className}`)
    let background = document.querySelector('.drugsSlang');
    background.style.boxShadow = "0px 0px 84px 20px rgba(243,192,16,0.75)"
    audio.play();
    audio.onended = function() {
      background.style.boxShadow = "";
    }
  })
}

woorden.addEventListener('transitionend', function(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('animatie');
})
document.querySelector('.btn').addEventListener('click', function() {
  const array = ["Alles is nog goed te lezen dus", "Word toch wat lastiger om te lezen he haha?", "Niet leesbaar voor je? Zwak van je"]
  let message;
  change();
  number++;
  if (number < 5) {
    message = 0;
  } else if (number < 10) {
    message = 1;
  } else {
    message = 2;
    stoprandom.style.display = "block"
  }
  document.querySelector('.kliks').innerHTML = number;
  document.querySelector('.kliksmsg').innerHTML = array[message];
})

stoprandom.addEventListener('click', function() {
  let top = 2;
  let left = 2;
  for (var i = 0; i < SPAN.length; i++) {
    SPAN[i].style.color = "black";
    SPAN[i].style.fontSize = 16 + "px";
    SPAN[i].style.top = top + "%";
    SPAN[i].style.transform = "rotate(0deg)";
    SPAN[i].style.left = left + "%";
    top += 10;
    left += 10;
  }
})

document.querySelector('.jonko').addEventListener('click', function() {
  quote.innerHTML = "Quote: " + '\u0022' + "Hey g kom effe jonko klappen dan" + '\u0022';
  uitleg.innerHTML = "Betekenis: " + "Hey gozer kom even een joint roken dan";
})
document.querySelector('.assie').addEventListener('click', function() {
  quote.innerHTML = "Quote: " + '\u0022' + "Is dit assie of wierie?" + '\u0022';
  uitleg.innerHTML = "Betekenis: " + "Is dit hash of wiet?";
})
document.querySelector('.toeter').addEventListener('click', function() {
  quote.innerHTML = "Quote: " + '\u0022' + "Eywa vandaag dikke toeter gerookt joh" + '\u0022';
  uitleg.innerHTML = "Betekenis: " + "Vandaag een dikke joint gerookt joh";
})
document.querySelector('.spliff').addEventListener('click', function() {
  quote.innerHTML = "Quote: " + '\u0022' + "Eywa deze mixi is goeie man" + '\u0022';
  uitleg.innerHTML = "Betekenis: " + "Deze gemixde joint van wiet en hash is goed man";
})
document.querySelector('.ganja').addEventListener('click', function() {
  quote.innerHTML = "Quote: " + '\u0022' + "Ga je nog even naar de shoppa ganja halen?" + '\u0022';
  uitleg.innerHTML = "Betekenis: " + "Ga je nog wiet halen?";
})
document.querySelector('.j').addEventListener('click', function() {
  quote.innerHTML = "Quote: " + '\u0022' + "Brur paas mij die j dan" + '\u0022';
  uitleg.innerHTML = "Betekenis: " + "Mag ik de joint";
})
document.querySelector('.wake').addEventListener('click', function() {
  quote.innerHTML = "Quote: " + '\u0022' + "Wolla even wake and bakie hierzo he" + '\u0022';
  uitleg.innerHTML = "Betekenis: " + "Jij begint je dag goed met een jointje!";
})
document.querySelector('.fakkel').addEventListener('click', function() {
  quote.innerHTML = "Quote: " + '\u0022' + "Hey jongens zullen we even dikke fakkel aansteken" + '\u0022';
  uitleg.innerHTML = "Betekenis: " + "Zullen we een dikke joint roken";
})

document.querySelector('.tak').addEventListener('click', function() {
  quote.innerHTML = "Quote: " + '\u0022' + "Takkie roken!" + '\u0022';
  uitleg.innerHTML = "Betekenis: " + "Jointje roken!";
})

// Tussenscherm handelen
const nextLevelbtn = document.querySelector('.nextLevelbtn');


nextLevelbtn.addEventListener('click', function(){
  document.querySelector('.nextLevel').style.opacity = 0;
    document.querySelector('.nextLevel').style.display = "none";

    const bgText = document.querySelectorAll(".bgText");
    for (var i = 0; i < bgText.length; i++) {
        bgText[i].style.color = "rgb(59, 193, 172)"
    }

  setTimeout(function(){
    document.querySelector('.cocaine').classList.add('menuUnlockedTransition');
    document.querySelector('.cocaine').classList.remove('disabled');
    document.querySelector('.cocaine i').remove();
    document.querySelector('.cocaine').addEventListener('transitionend', function(){
      document.querySelector('.cocaine').classList.remove('menuUnlockedTransition');
    })
  },1000)

});
