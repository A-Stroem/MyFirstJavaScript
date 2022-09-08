function out(any) {console.log(any)}
out('I am in setbackgroundcolor')

const inpColor = document.querySelector(".getColor")
const pbSetColor = document.querySelector(".pbSetColor")
const pbSetColorNum = document.querySelector(".pbSetColorNum")

out(inpColor)

const bdy = document.querySelector("body")
out(bdy)

function changeBodyColor() {
  let col = inpColor.value;
  out(col)
  bdy.style.backgroundColor = col
}

function changeBodyColorNum() {
  let col = inpColor.value;
  const num = Number(col)
  const numhx = parseInt(col, 16)
  out(num)
  out(numhx)
  let hexcol = new Number(numhx).toString(16)
  if (hexcol.length == 2) {hexcol = "0000" + hexcol}
  if (hexcol.length == 4) {hexcol = "00" + hexcol}
  out(hexcol)
  bdy.style.backgroundColor = "#" + hexcol
}

function changeBodyColorKey(key) {
  out(key)
  changeBodyColorNum();
}

pbSetColor.addEventListener('click', changeBodyColor)
pbSetColorNum.addEventListener('click', changeBodyColorNum)

inpColor.addEventListener('input', changeBodyColorKey)

///////////////\\\\\\\\\\\\\\

// Change H1 Color
out(inpColorH1)

const h1 = document.querySelector('h1')
out(h1)

function changeH1Color() {
  let col = inpColorH1.value
  out(col)
  h1.style.backgroundColor = col
}

setColorH1.addEventListener('click', changeH1Color)

///////////////\\\\\\\\\\\\\\
