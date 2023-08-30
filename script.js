const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

function setCurrentColor(newColor) {
  currentColor = newColor
}

function setCurrentMode(newMode) {
  activateButton(newMode)
  currentMode = newMode
}

function setCurrentSize(newSize) {
  currentSize = newSize
}

function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  reloadGrid()
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('block')
    gridElement.addEventListener('mousedown', changeColor)
    grid.appendChild(gridElement)
  }
}

window.onload = () => {
  setupGrid(DEFAULT_SIZE)
  activateButton(DEFAULT_MODE)
}
