const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const offCanvas = document.querySelector(".offCanvas");
const divCanvas = document.querySelector(".div-canvas");
const btnSearch = document.querySelector(".btn-search");
const modal = document.querySelector(".modal");
const modalSearch = document.querySelector(".modal-search");
const btnCloseModalSr = document.querySelector(".btn-close-modal-search");
const holderServises = document.querySelector(".holder-servises");

function Main() {
    //Create menu for mobile
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
    AddServises();
}
const hosting = [{
    name: "هاست وردپرس پایه",
    price: "150,000",
    properties: [
        "یک گیگابایت حجم", "هارد پرسرعت NVME", "ترافیک نامحدود", "دایرکت ادمین", "گواهی SSL رایگان", "DNS اختصاصی رایگان", "Hetzner, OVH"
    ]
}, {
    name: "هاست وردپرس 2",
    price: "300,000",
    properties: [
        "دو گیگابایت حجم", "هارد پرسرعت NVME", "ترافیک نامحدود", "دایرکت ادمین,سی پنل", "گواهی SSL رایگان", "DNS اختصاصی رایگان", "Hetzner, OVH"
    ]
}, {
    name: "هاست وردپرس 3",
    price: "500,000",
    properties: [
        "پنجاه گیگابایت حجم", "هارد پرسرعت NVME", "ترافیک نامحدود", "دایرکت ادمین,سی پنل", "گواهی SSL رایگان", "DNS اختصاصی رایگان", "Hetzner, OVH"
    ]
}];
//Add servises to website
function AddServises() {
    hosting.forEach(item => {
        const host = document.createElement("div");
        host.classList.add("host-servise", "flex", "gap-y-5", "bg-white", "rounded-2xl", "p-4", "pt-10", "flex-col", "cursor-pointer", "lg:w-3/12", "w-10/12", "items-center");
        const h5 = document.createElement("h5");
        h5.className = "text-xl font-bold text-black p-3 rounded-sm name-host text-center";
        h5.textContent = item.name;
        const price = document.createElement("p");
        price.className = "text-2xl font-bold text-black price-host";
        price.textContent = `${item.price}تومان`;
        const button = document.createElement("button");
        button.type = "button";
        button.className = "w-full rounded-full text-white button-host p-3";
        button.textContent = "خرید هاست";
        item.properties.forEach(props => {
            const prop = document.createElement("p");
            prop.classList.add("props", "text-black", "text-md");
            prop.textContent = props;
            const divProps = document.createElement("div");
            divProps.classList.add("div-props", "flex", "gap-x-3");
            const iconProps = document.createElement("i");
            iconProps.className = "icon-props text-xl text-black fi fi-rs-check-circle";
            divProps.append(iconProps, prop);
            const propContainer = document.createElement("div");
            propContainer.className = "flex w-full gap-y-4 order-1";
            propContainer.append(divProps)
            host.append(h5, price, button, propContainer);
        })
        holderServises.append(host);
    })
    const rightItem = holderServises.children[0];
    rightItem.classList.add("lg:mt-6", "mt-0");
    const leftItem = holderServises.children[2];
    leftItem.classList.add("lg:mt-6", "mt-0");
    const allHosts = [...document.querySelectorAll(".host-servise")];
    allHosts.forEach(all => {
        all.classList.add("transition-all", "duration-500", "hover:-translate-y-3");
    })
    const middleItem = allHosts[1];
    const middleItemBtn = middleItem.querySelector("button");
    middleItemBtn.style.backgroundColor = "#e50418";
}
//Coments carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    rtl:true,
    margin: 20,
    nav: false,
    dots:false,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    smartSpeed:1500,
    responsive: {
        0: {
            items: 1
        },
        640: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
document.addEventListener('DOMContentLoaded', Main);