let p = document.querySelectorAll(".drum");
let len = p.length;

for(let i = 0; i < len; i++)
{
  p[i].addEventListener("click" , function()
{
  makesound(this.classList[0]);
  btn_animation(this.classList[0]);
})
};

for(let i = 0; i < len; i++)
{
  p[i].addEventListener("keydown" , function(event)
{
  makesound(event.key);
  btn_animation(event.key);
})
};



function makesound(key)
{

  switch(key)
  {
    case "w" :
    var a = new Audio("sounds/tom-1.mp3");
    a.play();
    break;
    case "a" :
    var a = new Audio("sounds/tom-2.mp3");
    a.play();
    break;
    case "s" :
    var a = new Audio("sounds/tom-3.mp3");
    a.play();
    break;
    case "d" :
    var a = new Audio("sounds/tom-4.mp3");
    a.play();
    break;
    case "j" :
    var a = new Audio("sounds/snare.mp3");
    a.play();
    break;
    case "k" :
    var a = new Audio("sounds/kick-bass.mp3");
    a.play();
    break;
    case "l" :
    var a = new Audio("sounds/crash.mp3");
    a.play();
    break;
  };
}

function btn_animation(key)
{
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function()
{
  document.querySelector("." + key).classList.remove("pressed");
} , 200);
}
