const buttonMinus = document.getElementById("button-minus");
const buttonPlus = document.getElementById("button-plus");
const peoples = document.getElementById("peoples");

buttonMinus.addEventListener("click", function () {
    if (Number(peoples.value) > 1) {
        let newValue = Number(peoples.value) - 1;
        peoples.setAttribute("value", String(newValue));
    }
});

buttonPlus.addEventListener("click", function () {
    if (Number(peoples.value) < 15) {
        let newValue = Number(peoples.value) + 1;
        peoples.setAttribute("value", String(newValue));
    }
});
