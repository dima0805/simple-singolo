const MENU = document.querySelector(".navigation");
const SLIDES = document.querySelectorAll("slider_item");
let SLIDE_NUM = 0;
const SLIDER_WRAP = document.querySelector(".slider");
const SLIDER = document.querySelector(".slider_content");
const BUTTON_LEFT = document.querySelector(".button_left");
const BUTTON_RIGHT = document.querySelector(".button_right");

const PHONE_BUTTON_VERT = document.querySelector(
  ".phone_vertical .phone_button"
);
const PHONE_BUTTON_HORIZ = document.querySelector(
  ".phone_horizontal .phone_button"
);
const SCREEN_VERTICAL = document.querySelector(
  ".phone_vertical .screen-off"
);
const SCREEN_HORIZONTAL = document.querySelector(
  "phone_horizontal .screen-off"
);
let SCREEN_STATUS_VERT = true;
let SCREEN_STATUS_HOR = true;

const TAGS_BLOCK = document.querySelector(".portfolio_tags");
const TAGS = document.querySelectorAll(".portfolio_tags li");
const BTN_PORTFOLIO_ALL = document.querySelector(".tag_all");
const BTN_PORTFOLIO_WB = document.querySelector(".tag_wb");
const BTN_PORTFOLIO_GD = document.querySelector(".tag_gd");
const BTN_PORTFOLIO_ART = document.querySelector(".tag_art");
const PORTFOLIO_ITEMS = document.querySelectorAll(".portfolio-works_item");
const PORTFOLIO_BLOCK = document.querySelector(".portfolio-works");


MENU.addEventListener("click", event => {
    MENU.querySelectorAll("li").forEach(el => {
      el.querySelector("a").classList.remove("active");
      event.target.classList.add("active");
    });
  });

BUTTON_LEFT.addEventListener("click", event => {
    SLIDES.forEach(el => {
      el.style.display = "none";
      SLIDER_WRAP.classList.remove("bg-blue");
      SLIDER.classList.remove("slider-resize");
    });
    console.log(SLIDE_NUM);
    SLIDE_NUM - 1 < 0 ? SLIDE_NUM++ : SLIDE_NUM--;
  
    if (SLIDES[SLIDE_NUM].classList.contains("slider-modify")) {
      SLIDER_WRAP.classList.add("bg-blue");
      SLIDER.classList.add("slider-resize");
    }
  
    SLIDES[SLIDE_NUM].style.display = "flex";
  });
  
  BUTTON_RIGHT.addEventListener("click", event => {
    SLIDES.forEach(el => {
      el.style.display = "none";
      SLIDER_WRAP.classList.remove("bg-blue");
      SLIDER.classList.remove("slider-resize");
    });
    console.log(SLIDE_NUM);
    SLIDE_NUM + 1 == SLIDES.length ? (SLIDE_NUM = 0) : SLIDE_NUM++;
    console.log(SLIDE_NUM);
  
    if (SLIDES[SLIDE_NUM].classList.contains("slider-modify")) {
      SLIDER_WRAP.classList.add("bg-blue");
      SLIDER.classList.add("slider-resize");
    }
  
    SLIDES[SLIDE_NUM].style.display = "flex";
  });
  
  PHONE_BUTTON_VERT.addEventListener("click", event => {
    if (SCREEN_STATUS_VERT) {
      console.log(SCREEN_VERTICAL);
      SCREEN_VERTICAL.classList.add("display-off");
      SCREEN_STATUS_VERT = false;
    } else if (!SCREEN_STATUS_VERT) {
      SCREEN_VERTICAL.classList.remove("display-off");
      SCREEN_STATUS_VERT = true;
    }
  });
  
  PHONE_BUTTON_HORIZ.addEventListener("click", event => {
    if (SCREEN_STATUS_HOR) {
      console.log(SCREEN_HORIZONTAL);
      SCREEN_HORIZONTAL.classList.add("display-off");
      SCREEN_STATUS_HOR = false;
    } else if (!SCREEN_STATUS_HOR) {
      SCREEN_HORIZONTAL.classList.remove("display-off");
      SCREEN_STATUS_HOR = true;
    }
  });

  
BTN_PORTFOLIO_ALL.addEventListener("click", event => {
    TAGS.forEach(el => {
      el.classList.remove("active-tag");
    });
    BTN_PORTFOLIO_ALL.classList.add("active-tag");
    PORTFOLIO_ITEMS[0].classList.remove("item-first");
    PORTFOLIO_ITEMS[1].classList.remove("item-first");
    PORTFOLIO_ITEMS[2].classList.remove("item-first");
    PORTFOLIO_ITEMS[3].classList.remove("item-first");
  });
  
  BTN_PORTFOLIO_WB.addEventListener("click", event => {
    TAGS.forEach(el => {
      el.classList.remove("active-tag");
    });
    BTN_PORTFOLIO_WB.classList.add("active-tag");
    PORTFOLIO_ITEMS[0].classList.remove("item-first");
    PORTFOLIO_ITEMS[1].classList.remove("item-first");
    PORTFOLIO_ITEMS[2].classList.remove("item-first");
    PORTFOLIO_ITEMS[3].classList.remove("item-first");
    PORTFOLIO_ITEMS[0].classList.add("item-first");
  });
  
  BTN_PORTFOLIO_GD.addEventListener("click", event => {
    TAGS.forEach(el => {
      el.classList.remove("active-tag");
    });
    BTN_PORTFOLIO_GD.classList.add("active-tag");
    PORTFOLIO_ITEMS[0].classList.remove("item-first");
    PORTFOLIO_ITEMS[1].classList.remove("item-first");
    PORTFOLIO_ITEMS[2].classList.remove("item-first");
    PORTFOLIO_ITEMS[3].classList.remove("item-first");
    PORTFOLIO_ITEMS[0].classList.add("item-first");
    PORTFOLIO_ITEMS[1].classList.add("item-first");
  });
  
  BTN_PORTFOLIO_ART.addEventListener("click", event => {
    TAGS.forEach(el => {
      el.classList.remove("active-tag");
    });
    BTN_PORTFOLIO_ART.classList.add("active-tag");
    PORTFOLIO_ITEMS[0].classList.add("item-first");
    PORTFOLIO_ITEMS[1].classList.add("item-first");
    PORTFOLIO_ITEMS[2].classList.add("item-first");
    PORTFOLIO_ITEMS[3].classList.add("item-first");
  });
  
  PORTFOLIO_BLOCK.addEventListener("click", event => {
    PORTFOLIO_ITEMS.forEach(el => {
      el.querySelector("img").classList.remove("border-item");
      event.target.classList.add("border-item");
    });
  });