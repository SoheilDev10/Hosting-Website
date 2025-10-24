const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const offCanvas = document.querySelector(".offCanvas");
const divCanvas = document.querySelector(".div-canvas");

function Main() {
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


}
document.addEventListener('DOMContentLoaded', Main);