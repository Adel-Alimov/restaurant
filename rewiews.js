$(function () {
    const temp = document.getElementById("rewiewTemplate");
    const sectionPeople = document.getElementById("rewiew-people");

    let rewiewMassive = [
        {
            image: "assets/reviews/reviews/reviewNatalya.png",
            name: "Наталья Иванова",
            rating: 5,
            text: "Посетили семейный ресторан вместе с мужем и детьми — отличное место для семейного ужина! Обстановка очень уютная, а обслуживание выше всяких похвал. Наши дети в восторге от детского меню, которое оказалось не только вкусным, но и заботливо подготовленным с учетом детских предпочтений. Будем рекомендовать всем друзьям и обязательно вернемся.",
        },
        {
            image: "assets/reviews/reviews/reviewAleksandr.png",
            name: "Александр Петров",
            rating: 5,
            text: "Этот ресторан — настоящая находка! Проводил здесь деловой ужин с партнерами, и все остались в восторге. Обслуживание на высшем уровне, персонал внимателен к каждой детали. Кухня порадовала своим разнообразием. Отличное место для деловых встреч и ужинов в уютной обстановке. Рекомендую! ",
        },
        {
            image: "assets/reviews/reviews/reviewIgor.png",
            name: "Игорь Ковалев",
            rating: 5,
            text: "Провели здесь день рождения — атмосфера просто великолепная. Персонал веселый и отзывчивый, кухня порадовала. Особенно понравились закуски к пиву! Обязательно будем возвращаться, чтобы попробовать все блюда из меню.",
        },
        {
            image: "assets/reviews/reviews/reviewMarina.png",
            name: "Марина Соколова",
            rating: 5,
            text: "Посетили семейный ресторан с подругами на девичнике, и это был наш лучший выбор! У нас был волшебный вечер — вкусная еда, отличные коктейли и веселая атмосфера. Обязательно вернемся сюда с мужьями! Очень рекомендую для дружеских посиделок и праздников.",
        },
    ];

    for (rewiewItem of rewiewMassive) {
        let clone = temp.content.cloneNode(true);
        let img = clone.querySelector("#rewiew-img");
        let people = clone.querySelector("#rewiew-people");
        let stars = clone.querySelector("#rewiew-star");
        let description = clone.querySelector("#rewiew-description");

        img.setAttribute("src", rewiewItem["image"]);
        people.textContent = rewiewItem["name"];
        for (let star = 0; star < rewiewItem["rating"]; star++) {
            let starImg = document.createElement("img");
            starImg.setAttribute("src", "assets/svg/svg/star.svg");
            stars.appendChild(starImg);
        }
        description.textContent = rewiewItem["text"];
        sectionPeople.appendChild(clone);
    }
});
