let mas = [];

async function loadMenuMain() {
    const response = await fetch("mainCourse.json");
    const data = await response.json();

    let template = document.getElementById("menuItemCard");

    let food = document.querySelector(".main-food");

    for (datas of data.mainCourse) {
        mas.push(datas);
    }

    for (let i = 0; i < mas.length; i++) {
        let clone = template.content.cloneNode(true);

        let img = clone.querySelector(".menuItemPic");

        let name = clone.querySelector(".menuItemName");

        let price = clone.querySelector(".menuItemPrice");
        img.setAttribute("src", mas[i].img);
        name.textContent = mas[i].name;
        price.textContent = mas[i].price;
        food.appendChild(clone);
    }
}

async function loadMenuSalad() {
    const response = await fetch("salad.json");
    const data = await response.json();

    let template = document.getElementById("menuItemCard");

    let food = document.querySelector(".main-food");

    for (datas of data.salad) {
        mas.push(datas);
    }

    for (let i = 0; i < mas.length; i++) {
        let clone = template.content.cloneNode(true);

        let img = clone.querySelector(".menuItemPic");

        let name = clone.querySelector(".menuItemName");

        let price = clone.querySelector(".menuItemPrice");
        img.setAttribute("src", mas[i].img);
        name.textContent = mas[i].name;
        price.textContent = mas[i].price;
        food.appendChild(clone);
    }
}

async function loadMenuDesert() {
    const response = await fetch("desert.json");
    const data = await response.json();

    let template = document.getElementById("menuItemCard");

    let food = document.querySelector(".main-food");

    for (datas of data.desert) {
        mas.push(datas);
    }

    for (let i = 0; i < mas.length; i++) {
        let clone = template.content.cloneNode(true);

        let img = clone.querySelector(".menuItemPic");

        let name = clone.querySelector(".menuItemName");

        let price = clone.querySelector(".menuItemPrice");
        img.setAttribute("src", mas[i].img);
        name.textContent = mas[i].name;
        price.textContent = mas[i].price;
        food.appendChild(clone);
    }
}

loadMenuMain();

// let menuItems = document.querySelectorAll('.menuItem')
// for (menuItem of menuItems){
//     menuItem.remove()
// }
