const start = document.querySelector('.start');
const next = document.querySelector('.next');
const next2 = document.querySelector('.next2');
const next3 = document.querySelector('.next3');
const next4 = document.querySelector('.next4');
const next5 = document.querySelector('.next5');
const next6 = document.querySelector('.next6');
const next7 = document.querySelector('.next7');
const next8 = document.querySelector('.next8');

start.addEventListener('click', function(){
  document.querySelector('.graph').classList.add("go");
  document.querySelector('h1').classList.add("scale");
  start.style.display = "none";
  next.style.display = "block";
});

next.addEventListener('click', function(){
  document.querySelector('.graph').classList.add("removeGraph");
  document.querySelector('.display').style.opacity = 1;
  document.querySelector('h1').classList.add("removeh1");
  document.querySelector('h2').classList.add("scale");
  next.style.display = "none";
  next2.style.display = "block";
});
next2.addEventListener('click', function(){
  document.querySelector('h2').style.opacity = 0;
  document.querySelector('.tekstWolkje').style.opacity = 1;
  document.querySelector('.mouth').classList.add("mouthAnimation");
  console.log(document.querySelector('.mouth'));
  next2.style.display = "none";
  next3.style.display = "block";
  setTimeout(function(){
    setTimeout(function (){
      document.querySelector('.tekstWolkje').innerHTML = "Gap ik ben kaolo skaffa";
      document.querySelector('.oog-links').style.background ="#f18c8e";
      document.querySelector('.oog-rechts').style.background ="#f18c8e";
    },2000);
    setTimeout(function () {
      const eyelit = document.querySelectorAll('.eye-lit');
      const eyelitunder = document.querySelectorAll('.eye-lit-under');

      for (var i = 0; i < eyelit.length; i++) {
        eyelit[i].classList.add("eyelitHeight");
      }
      for (var i = 0; i < eyelitunder.length; i++) {
        eyelitunder[i].classList.add("eyelitHeight");
      }
      next3.classList.remove('disabled');
    }, 4000);

  },2000);
})
next3.addEventListener('click', function(){
  document.querySelector('.display').style.opacity = 0;
  next3.style.display = "none";
  next4.style.display = "block";
  setTimeout(function(){
    document.querySelector('.display').style.display = "none";
    document.querySelector('h3').classList.add('scale');
  },2000);
})

next4.addEventListener('click', function(){
  document.querySelector('h3').classList.remove('scale');
  document.querySelector('.uitleg1').style.display = "block";
  setTimeout(function(){
    document.querySelector('.uitleg1').style.opacity = 1;
  },100)
  next4.style.display = "none";
  next5.style.display = "block";
})

next5.addEventListener('click', function(){
  document.querySelector('.uitleg1').style.display = "none";
  document.querySelector('.uitleg2').style.display = "block";
  setTimeout(function(){
    document.querySelector('.uitleg2').style.opacity = 1;
  },100)
  next5.style.display = "none";
  next6.style.display = "block";
})

next6.addEventListener('click', function(){
  document.querySelector('.uitleg2').style.display = "none";
  document.querySelector('.uitleg3').style.display = "block";
  setTimeout(function(){
    document.querySelector('.uitleg3').style.opacity = 1;
  },100)
  next6.style.display = "none";
  next7.style.display = "block";
})

next7.addEventListener('click', function(){
  document.querySelector('.uitleg3').style.display = "none";
  document.querySelector('.uitleg4').style.display = "block";
  setTimeout(function(){
    document.querySelector('.uitleg4').style.opacity = 1;
  },100)
  next7.style.display = "none";
  next8.style.display = "block";
})
