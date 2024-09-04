let menuBtn = document.querySelector('#menu-btn');
let menuContainer = document.querySelector('.menu-container');
let searchBar = document.querySelector('.search-bar');
let searchContainer = document.querySelector('.search-container');
let closeBtn = document.querySelector('.close-btn');



menuBtn.onclick = () =>{
    menuContainer.classList.add('show-menu-container');
}
menuContainer.onclick = () =>{
    menuContainer.classList.remove('show-menu-container');
}
searchBar.onclick = () =>{
  searchContainer.classList.add('show-search-box')
}
closeBtn.onclick = () =>{
    searchContainer.classList.remove('show-search-box')
  }