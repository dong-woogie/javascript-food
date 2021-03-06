import TabView from "./view/TabView.js";
import SlideContent from "./view/slide/SlideContent.js";
import SlideDots from "./view/slide/SlideDots.js";
import SlideController from "./view/slide/SlideController.js";
import MenuSlide from "./view/MenuSlide.js";
import ScrollBtnView from "./view/ScrollBtnView.js";
import AutoComplete from "./view/AutoComplete.js";
import { removeExpirationItems } from "./util.js";

const _e = {
  body: document.querySelector("body"),
  bestSeller: document.querySelector(".best-seller"),
  mainSlide: document.querySelector(".main-slide-wrap"),
  subSlide: document.querySelector(".sub-slide-wrap"),
  mainDish: document.querySelector(".dish-list-wrap.main-dish"),
  sideDish: document.querySelector(".dish-list-wrap.side-dish"),
  soupDish: document.querySelector(".dish-list-wrap.soup-dish"),
  courseDish: document.querySelector(".dish-list-wrap.course-dish"),
  scrollBtn: document.querySelector(".scroll"),
  searchBar: document.querySelector(".searchbar"),
};

const contentURL = {
  bestSeller:
    "https://raw.githubusercontent.com/dong-woogie/javascript-food/master/data/best.json",
  mainSlide:
    "https://raw.githubusercontent.com/dong-woogie/javascript-food/master/data/mainSlide.json",
  subSlide:
    "https://raw.githubusercontent.com/dong-woogie/javascript-food/master/data/subSlide.json",
  mainDish:
    "https://raw.githubusercontent.com/dong-woogie/javascript-food/master/data/main.json",
  sideDish:
    "https://raw.githubusercontent.com/dong-woogie/javascript-food/master/data/side.json",
  soupDish:
    "https://raw.githubusercontent.com/dong-woogie/javascript-food/master/data/soup.json",
  courseDish:
    "https://raw.githubusercontent.com/dong-woogie/javascript-food/master/data/course.json",
  autoComplete: "/ac/",
};

const tabView = new TabView({
  bestSellerEl: _e.bestSeller,
  urlRequestData: contentURL.bestSeller,
});

const mainSlideContent = new SlideContent({
  slideListEl: _e.mainSlide.querySelector(".slide-list"),
  naviEl: _e.mainSlide.querySelector(".slides-navi"),
  main: true,
});
const mainSlideDots = new SlideDots({
  dotListEl: _e.mainSlide.querySelector(".slide-dots"),
});
const mainSlideContoller = new SlideController({
  slideContent: mainSlideContent,
  slideDots: mainSlideDots,
  throttleTime: 1000,
  urlRequestData: contentURL.mainSlide,
});

const subSlideContent = new SlideContent({
  slideListEl: _e.subSlide.querySelector(".slide-list"),
  naviEl: _e.subSlide.querySelector(".slides-navi"),
  main: false,
});
const subSlideDots = new SlideDots({
  dotListEl: _e.subSlide.querySelector(".slide-dots"),
});
const subSlideController = new SlideController({
  slideContent: subSlideContent,
  slideDots: subSlideDots,
  throttleTime: 500,
  urlRequestData: contentURL.subSlide,
});

const mainDishSlide = new MenuSlide({
  urlRequestData: contentURL.mainDish,
  slideListEl: _e.mainDish.querySelector(".slide-list"),
  naviEl: _e.mainDish.querySelector(".slides-navi"),
});

const sideDishSlide = new MenuSlide({
  urlRequestData: contentURL.sideDish,
  slideListEl: _e.sideDish.querySelector(".slide-list"),
  naviEl: _e.sideDish.querySelector(".slides-navi"),
});

const soupDishSlide = new MenuSlide({
  urlRequestData: contentURL.soupDish,
  slideListEl: _e.soupDish.querySelector(".slide-list"),
  naviEl: _e.soupDish.querySelector(".slides-navi"),
});

const courseDishSlide = new MenuSlide({
  urlRequestData: contentURL.courseDish,
  slideListEl: _e.courseDish.querySelector(".slide-list"),
  naviEl: _e.courseDish.querySelector(".slides-navi"),
});

const scrollBtnView = new ScrollBtnView({
  scrollEl: _e.scrollBtn,
});

const autoComplete = new AutoComplete({
  searchBarEl: _e.searchBar,
  urlRequestData: contentURL.autoComplete,
});

function init() {
  _e.body.addEventListener("click", (e) => {
    if (e.target.tagName !== "A") return;
    e.preventDefault();
  });
  window.addEventListener("load", removeExpirationItems);
  tabView.init();
}
init();
