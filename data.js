let n = document.querySelector("input[name=n]");
let s = document.querySelector("input[name=s]");
let p = document.querySelector("input[name=p]");
let e = document.querySelector("input[name=e]");
let nq = document.querySelector(".name");
let sq = document.querySelector(".surname");
let pq = document.querySelector(".phone");
let eq = document.querySelector(".email");

n.oninput = function () {
  nq.textContent = n.value;
}

s.oninput = function () {
  sq.textContent = s.value;
}

p.oninput = function () {
  pq.textContent = p.value;
}

e.oninput = function () {
  eq.textContent = e.value;
}