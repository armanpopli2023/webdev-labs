current_font_size = 1.0
const makeBigger = () => {
   current_font_size += 0.2
   document.querySelector("p").style.fontSize = `${currentFontSize}em`;
   document.querySelector("h1").style.fontSize = `${currentFontSize + 1}em`;
};

const makeSmaller = () => {
   current_font_size -= 0.2
   document.querySelector("p").style.fontSize = `${currentFontSize}em`;
   document.querySelector("h1").style.fontSize = `${currentFontSize + 1}em`;
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
