const header = document.querySelector("header");
const footer = document.querySelector("footer");
const holderServises = document.querySelector(".holder-servises");
const toUpBtn = document.querySelector(".to-up");

function Main() {
    fetch('/html/header.html')
        .then(res => res.text())
        .then(data => {
            header.innerHTML = data;
            const script = document.createElement('script');
            script.src = '/js/header.js';
            script.onload = () => {
                Header();
            };
            document.body.appendChild(script);
        })
        .catch(err => console.log("we have a problem", err))
    fetch('/html/footer.html')
        .then(res => res.text())
        .then(data => {
            footer.innerHTML = data;
        })
        .catch(err => console.log("we have a problem", err))
    loadCarousel()
    addServises();
    handdleScrollY();
    //accordion();
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
function addServises() {
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
function loadCarousel() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        rtl: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        smartSpeed: 1500,
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
}
//Create handdle scroll
const handdleScrollY = () => {
    const target = 316;
    let state = true;
    window.addEventListener('scroll', () => {
        if (window.scrollY >= target && state == true) {
            toUpBtn.classList.toggle("hidden");
            state = false;
        } else {
            if (window.scrollY <= target) {
                state = true;
                toUpBtn.classList.add("hidden");
            }
        }
    });
    toUpBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
const accordion = () => {
    const question = document.querySelectorAll(".accordion");
    question.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector(".answer");
            const stateIcon = item.querySelector(".state-icon");
            question.forEach(el => {
                el.classList.remove("opened");
            })
            item.classList.toggle("opened");
            if (item.classList.contains("opened")) {
                answer.classList.remove("hidden", "h-0");
                stateIcon.className = "fi fi-br-minus";
            } else {
                answer.classList.add("hidden", "h-0");
                stateIcon.className = "fi fi-br-plus";
            }
        });
    })

}
document.addEventListener('DOMContentLoaded', Main);