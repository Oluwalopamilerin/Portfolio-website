
const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");
const tabContent1 = tabContents[0];
const tabContent2 = tabContents[1];
const tabContent3 = tabContents[2];
const tabId1 = document.getElementById("Skills").getAttribute("id");
const tabId2 = document.getElementById("Experience").getAttribute("id");
const tabId3 = document.getElementById("Education").getAttribute("id");
 

 tabLinks.forEach(tabLink => {
  tabLink.addEventListener("click", () => {
    tabLink.classList.add("active-link");
   if (tabLink.textContent == tabId1){
      tabContent1.classList.add("active-tab")
      tabContent2.classList.remove("active-tab")
      tabContent3.classList.remove("active-tab")
    } 
    else if(tabLink.textContent == tabId2){
      tabContent2.classList.add("active-tab")
      tabContent1.classList.remove("active-tab")
      tabContent3.classList.remove("active-tab")
    }
    else if(tabLink.textContent == tabId3){
      tabContent3.classList.add("active-tab")
      tabContent1.classList.remove("active-tab")
      tabContent2.classList.remove("active-tab")
    }
  })
  document.addEventListener("click", (event) => {
    if (event.target !== tabLink){
      tabLink.classList.remove("active-link");
    }
  })
 });



