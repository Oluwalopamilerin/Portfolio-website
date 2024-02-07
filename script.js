const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelector(".hamnav-links")
const cvButton = document.querySelector(".btn.btn-color-2");

hamburgerIcon.addEventListener("click", () => {
  menuLinks.classList.toggle("active-menu");
  hamburgerIcon.classList.toggle("active-menu");
});

menuLinks.addEventListener("click", () =>{
  menuLinks.classList.toggle("active-menu");
  hamburgerIcon.classList.toggle("active-menu");
})

cvButton.addEventListener("click", () => {
  window.open("./assets/OYEWOLE, DEBORAH PAMILERIN's CV.pdf");
})








// const sidebarMenu = document.querySelector(".menu-icon");
// const sidebar = document.querySelector(".sidebar-nav");
// const sidebarClose = document.querySelector(".sidebar-close")

// sidebarMenu.addEventListener("click", () => {
//   sidebar.classList.add("active-sidebar")
// })

// sidebarClose.addEventListener("click", () => {
//   sidebar.classList.remove("active-sidebarp")
// })
// const tabLinks = document.querySelectorAll(".tab-links");
// const tabContents = document.querySelectorAll(".tab-contents");
// const tabContent1 = tabContents[0];
// const tabContent2 = tabContents[1];
// const tabContent3 = tabContents[2];
// const tabId1 = document.getElementById("Skills").getAttribute("id");
// const tabId2 = document.getElementById("Experience").getAttribute("id");
// const tabId3 = document.getElementById("Education").getAttribute("id");
 

//  tabLinks.forEach(tabLink => {
//   tabLink.addEventListener("click", () => {
//     tabLink.classList.add("active-link");
//    if (tabLink.textContent == tabId1){
//       tabContent1.classList.add("active-tab")
//       tabContent2.classList.remove("active-tab")
//       tabContent3.classList.remove("active-tab")
//     } 
//     else if(tabLink.textContent == tabId2){
//       tabContent2.classList.add("active-tab")
//       tabContent1.classList.remove("active-tab")
//       tabContent3.classList.remove("active-tab")
//     }
//     else if(tabLink.textContent == tabId3){
//       tabContent3.classList.add("active-tab")
//       tabContent1.classList.remove("active-tab")
//       tabContent2.classList.remove("active-tab")
//     }
//   })
//   document.addEventListener("click", (event) => {
//     if (event.target !== tabLink){
//       tabLink.classList.remove("active-link");
//     }
//   })
//  });



