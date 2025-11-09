const linuxHostes = [{
        name: "هاست لینوکس5",
        price: "350,000",
        properties: [
            "40 گیگابایت حجم",
            "هارد پرسرعت NVME",
            "۸۰ گیگابایت ترافیک ماهانه",
            "گواهی SSL رایگان",
            "DNS اختصاصی رایگان",
            "افرانت, پارس آنلاین"
        ]
    },
    {
        name: "هاست لینوکس 10",
        price: "550,000",
        properties: [
            "50 گیگابایت حجم",
            "هارد پرسرعت NVME",
            "۸۰ گیگابایت ترافیک ماهانه",
            "گواهی SSL رایگان",
            "DNS اختصاصی رایگان",
            "افرانت, پارس آنلاین"
        ]
    },
    {
        name: "هاست لینوکس 20",
        price: "750,000",
        properties: [
            "60 گیگابایت حجم",
            "هارد پرسرعت NVME",
            "۸۰ گیگابایت ترافیک ماهانه",
            "گواهی SSL رایگان",
            "DNS اختصاصی رایگان",
            "افرانت, پارس آنلاین"
        ]
    }
];
const wpHostes = [{
        name: "هاست وردپرس پایه",
        price: "300,000",
        properties: [
            "30 گیگابایت حجم",
            "هارد پرسرعت NVME",
            "ترافیک نامحدود",
            "دایرکت ادمین",
            "گواهی SSL رایگان",
            "DNS اختصاصی رایگان",
            "DNS اختصاصی رایگان"
        ]
    },
    {
        name: "هاست وردپرس 2",
        price: "600,000",
        properties: [
            "60 گیگابایت حجم",
            "هارد پرسرعت NVME",
            "ترافیک نامحدود",
            "دایرکت ادمین",
            "گواهی SSL رایگان",
            "DNS اختصاصی رایگان",
            "DNS اختصاصی رایگان"
        ]
    },
    {
        name: "هاست وردپرس 3",
        price: "900,000",
        properties: [
            "90 گیگابایت حجم",
            "هارد پرسرعت NVME",
            "ترافیک نامحدود",
            "دایرکت ادمین",
            "گواهی SSL رایگان",
            "DNS اختصاصی رایگان",
            "DNS اختصاصی رایگان"
        ]
    }
];
const cloudHostes = [{
        name: "هاست ابری 20",
        price: "200,000",
        properties: [
            "20 گیگابایت حجم",
            "هارد پرسرعت NVME",
            "ترافیک نامحدود",
            "دایرکت ادمین",
            "گواهی SSL رایگان",
            "DNS اختصاصی رایگان",
            "DNS اختصاصی رایگان"
        ]
    },
    {
        name: "هاست ابری 30",
        price: "300,000",
        properties: [
            "30 گیگابایت حجم",
            "هارد پرسرعت NVME",
            "ترافیک نامحدود",
            "دایرکت ادمین",
            "گواهی SSL رایگان",
            "DNS اختصاصی رایگان",
            "DNS اختصاصی رایگان"
        ]
    },
    {
        name: "هاست ابری 40",
        price: "400,000",
        properties: [
            "40 گیگابایت حجم",
            "هارد پرسرعت NVME",
            "ترافیک نامحدود",
            "دایرکت ادمین",
            "گواهی SSL رایگان",
            "DNS اختصاصی رایگان",
            "DNS اختصاصی رایگان"
        ]
    }
];
const windowsHostes = [{
        name: "هاست ویندوز 5",
        price: "400,000",
        properties: [
            "40 گیگابایت حجم",
            "هارد پرسرعت NVME",
            "ترافیک نامحدود",
            "دایرکت ادمین",
            "گواهی SSL رایگان",
            "DNS اختصاصی رایگان",
            "DNS اختصاصی رایگان"
        ]
    },
    {
        name: "هاست ویندوز 10",
        price: "600,000",
        properties: [
            "60 گیگابایت حجم",
            "هارد پرسرعت NVME",
            "ترافیک نامحدود",
            "دایرکت ادمین",
            "گواهی SSL رایگان",
            "DNS اختصاصی رایگان",
            "DNS اختصاصی رایگان"
        ]
    },
    {
        name: "هاست ویندوز 15",
        price: "800,000",
        properties: [
            "80 گیگابایت حجم",
            "هارد پرسرعت NVME",
            "ترافیک نامحدود",
            "دایرکت ادمین",
            "گواهی SSL رایگان",
            "DNS اختصاصی رایگان",
            "DNS اختصاصی رایگان"
        ]
    }
];
const contactBtn = document.querySelector("#buying-host .btn1");
const aboutBtn = document.querySelector("#buying-host .btn2");
const ourHostes = document.getElementById("our-hostes");
const linuxTab = document.querySelector(".linux-tab");
const wpTab = document.querySelector(".wp-tab");
const cloudTab = document.querySelector(".cloud-tab");
const windowsTab = document.querySelector(".windows-tab");
let isEmpty;

function main() {
    addServises(linuxHostes);
    const allTabs = [linuxTab, wpTab, cloudTab, windowsTab];
    const allServises = [linuxHostes, wpHostes, cloudHostes, windowsHostes];
    const allEl = [...document.querySelectorAll(".host-servise")];
    allEl.forEach(el => {
        el.classList.remove("opacity-0");
        el.classList.add("opacity-100");
        el.classList.remove("translate-y-10");
        el.classList.add("translate-y-0");
    })
    allTabs.forEach((all, index) => {
        all.addEventListener('click', () => {
            if (!all.classList.contains("active-tab")) {
                allTabs.forEach(el => el.classList.remove("active-tab"))
                all.classList.add("active-tab");
                ourHostes.innerHTML = "";
                isEmpty = true;
                if (isEmpty == true) {
                    const theServis = allServises[index];
                    addServises(theServis);
                    setTimeout(() => {
                        const allEl = [...document.querySelectorAll(".host-servise")];
                        allEl.forEach(el => {
                            el.classList.remove("opacity-0");
                            el.classList.add("opacity-100")
                            el.classList.remove("translate-y-10");
                            el.classList.add("translate-y-0");
                        })
                    }, 200);
                    isEmpty = false;
                }
            }
        });
    })
    contactBtn.addEventListener('click', () => {
        window.location.href = "/html/contact.html";
    });
    aboutBtn.addEventListener('click', () => {
        window.location.href = "/html/about.html";
    });
}
const addServises = (servis) => {
    servis.forEach(item => {
        const host = document.createElement("div");
        host.classList.add("host-servise", "flex", "gap-y-5", "bg-white", "rounded-2xl", "p-4", "pt-10", "flex-col", "cursor-pointer", "lg:w-3/12", "w-10/12", "items-center", "opacity-0");
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
        ourHostes.append(host);
    })
    const allHosts = [...document.querySelectorAll(".host-servise")];
    allHosts.forEach(all => {
        all.classList.add("transition-all", "duration-500", "hover:-translate-y-3", "translate-y-10");
    })
}
document.addEventListener('DOMContentLoaded', main);