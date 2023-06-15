// Inspiration -  Frontend Mentor
// https://www.frontendmentor.io/challenges/myteam-multipage-website-mxlEauvW
const cardControllers = document.querySelectorAll("[data-card-controller]");

cardControllers.forEach(controller => {
  controller.addEventListener("click", (e) => {
    const card = e.currentTarget.parentElement.parentElement;
    const isVisible = card.dataset.visible;

    if (isVisible === "false") {
      card.setAttribute("data-visible", true);
    } else {
      card.setAttribute("data-visible", false);
    }
  })
})


const slider = document.querySelector('.slider');
let isTransitioning = false;

function slideNext() {
  if (!isTransitioning) {
    isTransitioning = true;
    slider.style.transform = 'translateX(-100%)';
    setTimeout(() => {
      slider.appendChild(slider.firstElementChild);
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      setTimeout(() => {
        slider.style.transition = '';
        isTransitioning = false;
      });
    }, 500);
  }
}

