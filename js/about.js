const holderHostes = document.querySelector("#hostes-about .holder-hostes");
const topBtn = document.querySelector("#top-about button");
const knowBtn = document.querySelectorAll(".right-know button");

function main() {
    topBtn.addEventListener('click', () => {
        window.location.href = "/html/panels.html";
    });
    knowBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const isLast = index === knowBtn.length - 1;
            window.location.href = isLast ? "/html/panels.html" : "/html/contact.html";
        });
    })
    addServises();
}

const ourHostes = [{
        name: "هاست وردپرس پایه",
        price: "300,000",
        properties: [
            "30گیگابایت حجم",
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
            "60گیگابایت حجم",
            "هارد پرسرعت NVME",
            "ترافیک نامحدود",
            "دایرکت ادمین",
            "گواهی SSL رایگان",
            "DNS اختصاصی رایگان",
            "DNS اختصاصی رایگان"
        ]
    },
    {
        name: "هاست وردپرس3",
        price: "900,000",
        properties: [
            "90گیگابایت حجم",
            "هارد پرسرعت NVME",
            "ترافیک نامحدود",
            "دایرکت ادمین",
            "گواهی SSL رایگان",
            "DNS اختصاصی رایگان",
            "DNS اختصاصی رایگان"
        ]
    }
];
const addServises = () => {
    ourHostes.forEach(item => {
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
        holderHostes.append(host);
    })
    const allHosts = [...document.querySelectorAll(".host-servise")];
    allHosts.forEach(all => {
        all.classList.add("transition-all", "duration-500", "hover:-translate-y-3");
    })
}
document.addEventListener('DOMContentLoaded', main);