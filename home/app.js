var head = document.querySelectorAll (".head")[0];
var blocks = document.querySelectorAll (".block")[0];
let word = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
let hexcolor = (y) => {
  for (let x = 0; x < word.length/2 - 2; x++) {
    let n = Math.floor(Math.random()*word.length);
    let hexcode = word[n];
    y=y+hexcode;
  }
  return y;
};
setInterval(hexcolor,2000);
let color = ("#"+hexcolor(""));
  for (let x = 0; x < 200; x++) {
    var block = document.createElement ("div");
    head.appendChild (block);
    block.classList.add("block");
    block.style.backgroundColor = color;
  }
  const animationBlocks = () => {
    anime({
      targets: '.block',
      translateX: function(){
        return anime.random(-700,700);
      },
      translateY: function(){
        return anime.random(-1000,1000);
      },
      translateZ: function(){
        return anime.random(-500,500);
      },
      scale: function(){
        return anime.random(0.2,1.3);
      },
      easing: 'easeInOutBack',
      duration: 2000,
      opacity: 0.5,
      delay: anime.stagger(10),
      complete: animationBlocks,
    });
  };
  
animationBlocks();