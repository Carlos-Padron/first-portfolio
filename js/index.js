const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
};

function changeTabs() {
  let tabs = document
    .querySelectorAll(".tab-header")[0]
    .getElementsByTagName("div");

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
      document
        .querySelectorAll(".tab-header")[0]
        .getElementsByClassName("active")[0]
        .classList.remove("active");

      tabs[i].classList.add("active");

      document
        .querySelectorAll(".tab-content")[0]
        .getElementsByClassName("active")[0]
        .classList.remove("active");
      document
        .querySelectorAll(".tab-content")[0]
        .getElementsByTagName("div")
        [i].classList.add("active");
    });
  }
}

function hideSideBarWhileScrolling() {
  window.onscroll = function (e) {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    if (burger.classList.contains("toggle")) {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    }
  };
}

function initialAnimations() {
  const nav = document.querySelector("nav");

  nav.classList.add("animate__animated", "animate__slideInDown");
  nav.classList.remove("d-none");
  setTimeout(() => {
    whoamiAnimation();
  }, 200);
}

function whoamiAnimation() {
  const whoami = document.querySelector(".whoami");

  whoami.classList.add("animate__animated", "animate__slideInLeft");
  whoami.classList.remove("d-none");

  setTimeout(() => {
    greetingAnimation();
  }, 100);
}

function greetingAnimation() {
  const intro = document.querySelectorAll(".sub-title-fs");
  const greeting1 = intro[0];
  const greeting2 = intro[1];

  greeting1.classList.add("animate__animated", "animate__slideInLeft");
  greeting2.classList.add("animate__animated", "animate__slideInLeft");
  greeting1.classList.remove("d-none");
  greeting2.classList.remove("d-none");

  setTimeout(() => {
    contactAnimation();
  }, 100);
}

function contactAnimation() {
  const contact1 = document.querySelector("#contact1");
  const contact2 = document.querySelector("#contact2");

  contact1.classList.add("animate__animated", "animate__slideInLeft");
  contact2.classList.add("animate__animated", "animate__slideInLeft");
  contact1.classList.remove("d-none");
  contact2.classList.remove("d-none");

  setTimeout(() => {
    heroAnimation();
  }, 100);
}

function heroAnimation() {
  const heroImg = document.querySelector(".hero-img");
  const body = document.querySelector('body')
  heroImg.classList.add("animate__animated", "animate__fadeIn");
  heroImg.classList.remove("d-none");

  body.style.overflowX = 'hidden'
}

function setNavActiveClass() {
  let navLinks = document.querySelectorAll(".nav-links a");
  
  console.log(navLinks);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      let activeLink = Array.from(navLinks).find((elem) =>
        elem.classList.contains("active")
      );

      if (activeLink != undefined) {
        activeLink.classList.remove("active");
        link.classList.add("active");
      }else{
        link.classList.add("active");
      }
    });
  });
}

initialAnimations();
hideSideBarWhileScrolling();
navSlide();
changeTabs();
setNavActiveClass();
