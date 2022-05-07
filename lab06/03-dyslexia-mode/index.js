/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const initPage = () => {
  const toggleButton  = document.querySelector('#dyslexia-toggle');
  toggleButton.addEventListener('click', toggleDyslexiaMode)

  const dyslexic = window.localStorage.getItem("dyslexic") === "true";
  if (dyslexic) {
    document.body.classList.toggle("dyslexia-mode");
    toggleButton.setAttribute('aria-pressed','true');
  } else {
    toggleButton.setAttribute('aria-pressed','false');
  }

}

const toggleDyslexiaMode = ev => {
  document.body.classList.toggle("dyslexia-mode");

  let pressed = ev.currentTarget.getAttribute('aria-pressed') === 'true';

  ev.currentTarget.setAttribute('aria-pressed', String(!pressed));
  pressed = !pressed;
  window.localStorage.setItem("dyslexic",pressed);
}

initPage();