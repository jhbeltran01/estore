const burgerBtn = document.querySelector('.btn-burger')!;
const nav = document.querySelector('.nav')! as HTMLElement;

let toShow = true;

burgerBtn.addEventListener('click', (): void => {
  if (toShow) {
    nav.style.height = '272px';
    toShow = false;
  } else {
    nav.style.height = '272px';
    nav.classList.remove('show');
    setTimeout(() => {
      nav.style.height = '0';
    }, 1)
    toShow = true;
  }
})

nav.addEventListener('transitionend', (): void => {
  if (!toShow) {
    nav.style.height = 'fit-content'
  }
})

export { }