const body = document.querySelector("body");

body.onload = () => {
  // Preloader
  setTimeout(() => {
    const preloader = document.querySelector(".preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
    }
  });

  // Header burger
  const burger = document.querySelector(".header__burger");
  const headerCa = document.querySelector(".header__ca-header");
  const headerCartCall = document.querySelector(".main-header__cart-call");

  burger.addEventListener("click", () => {
    body.classList.toggle("active");
    burger.classList.toggle("active");
    headerCa.classList.toggle("active");
    headerCartCall.classList.toggle("active");
  });

  // Sliders
  const heroSlider = new Swiper(".hero__slider", {
    navigation: {
      prevEl: ".desc__slide-prev",
      nextEl: ".desc__slide-next",
    },
    pagination: {
      el: ".desc__slide-pagination",
      type: "fraction",
    },
    speed: 1000,
    effect: "coverflow",
    coverflowEffect: {
      modifier: 2,
      rotate: 30,
      slideShadows: false,
    },
  });

  const benefitsSlider = new Swiper(".benefits__slider", {
    navigation: {
      prevEl: ".benefits__slider-prev",
      nextEl: ".benefits__slider-next",
    },
    speed: 800,
    breakpoints: {
      960: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // Tabs
  const tabsBtns = document.querySelectorAll(".categories__tab-title");
  const tabsLists = document.querySelectorAll(".categories__cards-list");

  tabsBtns.forEach((element) => {
    element.addEventListener("click", () => {
      for (let i = 0; i < tabsBtns.length; i++) {
        tabsBtns[i].classList.remove("active");
      }
      for (let i = 0; i < tabsLists.length; i++) {
        tabsLists[i].classList.remove("active");
      }
      element.classList.add("active");
      if (element.classList.contains("beds")) {
        tabsLists.forEach((ele) => {
          if (ele.classList.contains("beds__list")) {
            ele.classList.add("active");
          }
        });
      } else if (element.classList.contains("sofas")) {
        tabsLists.forEach((ele) => {
          if (ele.classList.contains("sofas__list")) {
            ele.classList.add("active");
          }
        });
      } else if (element.classList.contains("chairs")) {
        tabsLists.forEach((ele) => {
          if (ele.classList.contains("chairs__list")) {
            ele.classList.add("active");
          }
        });
      } else if (element.classList.contains("dressers")) {
        tabsLists.forEach((ele) => {
          if (ele.classList.contains("dressers__list")) {
            ele.classList.add("active");
          }
        });
      } else if (element.classList.contains("cabinets")) {
        tabsLists.forEach((ele) => {
          if (ele.classList.contains("cabinets__list")) {
            ele.classList.add("active");
          }
        });
      } else if (element.classList.contains("kitchens")) {
        tabsLists.forEach((ele) => {
          if (ele.classList.contains("kitchens__list")) {
            ele.classList.add("active");
          }
        });
      }
    });
  });

  if (window.innerWidth < 960) {
    const navTabs = document.querySelectorAll(".nav-tabs__link");
    const sublistAnchors = document.querySelectorAll(".tabs__sublist");
    const phonesLink = document.querySelector(".ca-header__phones");
    const phonesSublist = document.querySelector(".phones__sublist");

    navTabs.forEach((el) => {
      const main = document.querySelector(".main");
      el.addEventListener("click", () => {
        for (let i = 0; i < navTabs.length; i++) {
          navTabs[i].classList.remove("active");
        }
        el.classList.add("active");
      });
      sublistAnchors.forEach((ele) => {
        ele.addEventListener("click", () => {
          el.classList.remove("active");
        });
      });
      main.addEventListener("click", () => {
        el.classList.remove("active");
      });
    });
    phonesLink.addEventListener("click", () => {
      phonesSublist.classList.toggle("active");
    });
  }

  // Form phone mask
  [].forEach.call(document.querySelectorAll(".tel"), function (input) {
    let keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+38 (0__) ___ __ __",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      let reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
};
