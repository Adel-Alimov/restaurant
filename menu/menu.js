async function loadMenuMain() {
    const category = new URL(document.location).searchParams.get("category") ?? "mainCourse";

    const buttons = document.querySelectorAll(".menu-button");

    let food = document.querySelector(".main-food");

    try {
        const response = await fetch(`${category}.json`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        let template = document.getElementById("menuItemCard");

        for (datas of data) {
            let clone = template.content.cloneNode(true);

            let img = clone.querySelector(".menuItemPic");

            let name = clone.querySelector(".menuItemName");

            let price = clone.querySelector(".menuItemPrice");

            let dataKcal = clone.querySelector(".detailsButton");

            let dataDetails = clone.querySelector(".detailsButton");

            img.setAttribute("src", datas["img"]);
            name.textContent = datas["name"];
            price.textContent = datas["price"];
            dataKcal.dataset.kcal = datas["kcal"];
            dataDetails.dataset.details = datas["info"];
            food.appendChild(clone);
        }
    } catch {
        food.innerHTML = "<p>Ошибка загрузки меню</p>";
    }
    buttons.forEach((button) => {
        if (button.dataset.cat === category) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    });
    $(".detailsButton").on("click", function (event) {
        $("#detailsWindow").show("slow");
        let currentEvent = $(event.target);
        let title = currentEvent.closest(".menuItem").find(".menuItemName").text();
        let price = currentEvent.closest(".menuItem").find(".menuItemPrice").text();
        let kcal = currentEvent.attr("data-kcal");
        let info = currentEvent.attr("data-details");
        $("#detailsTitle").text(title);
        $("#detailsKcal").text(`${kcal}ккал`);
        $("#detailsPrice").text(`${price}₽`);
        $("#detailsInfo").text(info);
    });

    $("#detailsClose").on("click", function () {
        $("#detailsWindow").hide("slow");
    });
}
document.addEventListener("DOMContentLoaded", loadMenuMain);
