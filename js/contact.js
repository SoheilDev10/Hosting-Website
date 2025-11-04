function main() {
    accordion();
}
const accordion = () => {
    const myAccordion = document.querySelectorAll(".accordion");
    myAccordion.forEach(item => {
        item.addEventListener('click', () => {
            const answe = item.querySelector(".answer");
            const stateIcon = item.querySelector(".state-icon");
            myAccordion.forEach(el => {
                const answe = el.querySelector(".answer");
                const stateIcon = el.querySelector(".state-icon");
                el.classList.remove("opened");
                answe.classList.add("hidden", "max-h-0");
                answe.classList.remove("flex", "max-h-32");
                stateIcon.classList.add("fi-br-plus");
                stateIcon.classList.remove("fi-br-minus");
            })
            item.classList.toggle("opened");
            if (item.classList.contains("opened")) {
                answe.classList.remove("hidden", "max-h-0");
                answe.classList.add("flex", "max-h-32");
                stateIcon.classList.remove("fi-br-plus");
                stateIcon.classList.add("fi-br-minus");
            } else {
                answe.classList.remove("flex", "max-h-32");
                answe.classList.add("hidden", "max-h-0");
                stateIcon.classList.remove("fi-br-minus");
                stateIcon.classList.add("fi-br-plus");
            }
        });
    })
}
document.addEventListener('DOMContentLoaded', main);