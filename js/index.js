const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    //  isOpened = false;

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

navSlide();
changeTabs();
