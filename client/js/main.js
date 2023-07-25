const data = [
  {
    id: 1,
    src: "html.svg",
    alt: "HTML 마크",
  },
  {
    id: 2,
    src: "javascript.svg",
    alt: "JavaScript 마크",
  },
  {
    id: 3,
    src: "react.svg",
    alt: "React 마크",
  },
  {
    id: 4,
    src: "typescript.svg",
    alt: "TypeScript 마크",
  },
  {
    id: 5,
    src: "git.svg",
    alt: "Git 마크",
  },
  {
    id: 6,
    src: "nodejs.svg",
    alt: "Node.js 마크",
  },
  {
    id: 7,
    src: "vue.svg",
    alt: "Vue 마크",
  },
  {
    id: 8,
    src: "fire.svg",
    alt: "불꽃 마크",
  },
];

const swiper = new Swiper(".swiper", {
  autoplay: {
    disableOnInteraction: false,
  },
  effect: "coverflow",
  loop: true,
  speed: 2000,
  parallax: true,
  spaceBetween: 1,
  loopAdditionalSlides: 1,
  centeredSlides: true,
  coverflowEffect: {
    slideShadows: false, 
    rotate: 50,
    stretch: 0,
    depth: 50,
    modifier: 1
  },
  allowTouchMove: true,
  pagination: {
    el: ".pagination",
    clickable: true,
    bulletClass: "bullet",
    bulletActiveClass: "is-active",
    renderBullet: function (index, className) {
      return /* html */ `
        <span class="${className}">
          <img src="./assets/${data[index].src}" alt=""/>
        </span>
      `;
    },
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});
