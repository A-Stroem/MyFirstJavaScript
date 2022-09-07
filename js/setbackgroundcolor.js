function out(any) {console.log(any)}
out('I am in setbackgroundcolor')

const inpColor = document.querySelector('.getColor')
const pbSetColor = document.querySelector('.pbSetColor')

const inpColorH1 = document.querySelector('.getColorH1')
const setColorH1 = document.querySelector('.pbSetColorH1')


// Change background Color
out(inpColor)

const bdy = document.querySelector("body")
out(bdy)

function changeBodyColor() {
  let col = inpColor.value
  out(col)
  bdy.style.backgroundColor = col
}

pbSetColor.addEventListener('click', changeBodyColor)

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
