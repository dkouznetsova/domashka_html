let place = document.querySelector("section");
let kv;
let fg;

for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++) {
    kv = document.createElement('div');
    if ((i + j) % 2 !== 0) {
      kv.style.backgroundColor = "#7EBB98";
    } else {
      kv.style.backgroundColor = "#DEF2C8";
    }
    if (i === 1) {
        fg = document.createElement('img');
        fg.setAttribute("src", 'svg/пешкач.svg');
        kv.appendChild(fg);
      }
    if (i === 6) {
        fg = document.createElement('img');
        fg.setAttribute("src", 'svg/пешка.svg');
        kv.appendChild(fg);
      }
    if (j === 0 || j === 7) {
      if (i === 0){
        fg = document.createElement('img');
        fg.setAttribute("src", 'svg/ладьяч.svg');
        kv.appendChild(fg);
      } else if (i === 7) {
        fg = document.createElement('img');
        fg.setAttribute("src", 'svg/ладья.svg');
        kv.appendChild(fg);
      }
    }
    if (j === 1 || j === 6) {
      if (i === 0){
        fg = document.createElement('img');
        fg.setAttribute("src", 'svg/коньяч.svg');
        kv.appendChild(fg);
      } else if (i === 7) {
        fg = document.createElement('img');
        fg.setAttribute("src", 'svg/конь.svg');
        kv.appendChild(fg);
      }
    }
    if (j === 2 || j === 5) {
      if (i === 0){
        fg = document.createElement('img');
        fg.setAttribute("src", 'svg/слоняч.svg');
        kv.appendChild(fg);
      } else if (i === 7) {
        fg = document.createElement('img');
        fg.setAttribute("src", 'svg/слон.svg');
        kv.appendChild(fg);
      }
    }
    if (j === 3) {
      if (i === 0){
        fg = document.createElement('img');
        fg.setAttribute("src", 'svg/королевач.svg');
        kv.appendChild(fg);
      } else if (i === 7) {
        fg = document.createElement('img');
        fg.setAttribute("src", 'svg/королева.svg');
        kv.appendChild(fg);
      }
    }
    if (j === 4) {
      if (i === 0){
        fg = document.createElement('img');
        fg.setAttribute("src", 'svg/корольч.svg');
        kv.appendChild(fg);
      } else if (i === 7) {
        fg = document.createElement('img');
        fg.setAttribute("src", 'svg/король.svg');
        kv.appendChild(fg);
      }
    }
    kv.classList.add('square');
    place.appendChild(kv)
  }
}