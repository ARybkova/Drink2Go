export const burgerMenu=()=>{let n=document.querySelector(".main-navigation"),a=document.querySelector(".main-navigation__toggle");n.classList.remove("main-navigation--nojs"),n.classList.add("main-navigation--closed"),a.addEventListener("click",(function(){n.classList.contains("main-navigation--closed")?(n.classList.remove("main-navigation--closed"),n.classList.add("main-navigation--opened")):(n.classList.add("main-navigation--closed"),n.classList.remove("main-navigation--opened"))}))};