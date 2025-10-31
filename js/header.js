 function Header() {
     //Create menu for mobile
     const btnMenu = document.querySelector(".btn-menu");
     const btnClose = document.querySelector(".btn-close");
     const offCanvas = document.querySelector(".offCanvas");
     const divCanvas = document.querySelector(".div-canvas");
     const btnSearch = document.querySelector(".btn-search");
     const modal = document.querySelector(".modal");
     const modalSearch = document.querySelector(".modal-search");
     const btnCloseModalSr = document.querySelector(".btn-close-modal-search");
     
     btnMenu.addEventListener('click', () => {
         offCanvas.classList.add("flex");
         offCanvas.classList.remove("hidden");
         setTimeout(() => {
             divCanvas.classList.add("translate-x-0");
             divCanvas.classList.remove("translate-x-full");
         }, 200);
     });
     btnClose.addEventListener('click', () => {
         divCanvas.classList.remove("translate-x-0");
         divCanvas.classList.add("translate-x-full");
         setTimeout(() => {
             offCanvas.classList.remove("flex");
             offCanvas.classList.add("hidden");
         }, 700);
     });
     document.addEventListener('click', (e) => {
         if (offCanvas.classList.contains("flex") && !divCanvas.contains(e.target) && !btnMenu.contains(e.target))
             btnClose.click();
     });
     //Create modal search
     btnSearch.addEventListener('click', () => {
         if (modal.classList.contains("hidden")) {
             modal.classList.add("flex");
             modal.classList.remove("hidden");
             setTimeout(() => {
                 modalSearch.classList.add("-translate-y-0");
                 modalSearch.classList.remove("-translate-y-full");
             }, 300);
             setTimeout(() => {
                 modal.classList.add("items-center");
             }, 350);
         }
     });
     btnCloseModalSr.addEventListener('click', () => {
         if (!modal.classList.contains("hidden")) {
             setTimeout(() => {
                 modalSearch.classList.remove("-translate-y-0");
                 modalSearch.classList.add("translate-y-full");
             }, 300);
             setTimeout(() => {
                 modal.classList.remove("flex");
                 modal.classList.add("hidden");
                 modalSearch.classList.remove("translate-y-full");
                 modalSearch.classList.add("-translate-y-full");
                 modal.classList.remove("items-center");
             }, 800);
         }
     });
     document.addEventListener('click', (e) => {
         if (!modalSearch.contains(e.target) && !modal.classList.contains("hidden") && !btnSearch.contains(e.target))
             btnCloseModalSr.click();
     });
 }
 Header()