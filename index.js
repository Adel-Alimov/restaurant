$("#right-arrow").on("click", function () {
    $(".right-gallery").removeClass("item-gallery").addClass("item-values");
    $(".left-gallery").removeClass("gal-img").addClass("val-img");
    $("#left-arrow").attr("disabled", false);
    $("#right-arrow").attr("disabled", true);
});

$("#left-arrow").on("click", function () {
    $(".right-gallery").removeClass("item-values").addClass("item-gallery");
    $(".left-gallery").removeClass("val-img").addClass("gal-img");
    $("#left-arrow").attr("disabled", true);
    $("#right-arrow").attr("disabled", false);
});

$("#right-arrow-mob").on("click", function () {
    $(".right-gallery").removeClass("item-gallery").addClass("item-values");
    $(".left-gallery").removeClass("gal-img").addClass("val-img");
    $("#left-arrow-mob").attr("disabled", false);
    $("#right-arrow-mob").attr("disabled", true);
});

$("#left-arrow-mob").on("click", function () {
    $(".right-gallery").removeClass("item-values").addClass("item-gallery");
    $(".left-gallery").removeClass("val-img").addClass("gal-img");
    $("#left-arrow-mob").attr("disabled", true);
    $("#right-arrow-mob").attr("disabled", false);
});

$("#big-right-arrow").on("click", function () {
    const rewiews = document.querySelector(".rewiew-people");
    const offsetRewiew = rewiews.querySelector(".rewiew").offsetWidth;
    rewiews.scrollLeft += offsetRewiew + 14;
    $("#big-left-arrow").removeClass("inactive-but");
});

$("#big-left-arrow").on("click", function () {
    const rewiews = document.querySelector(".rewiew-people");
    const offsetRewiew = rewiews.querySelector(".rewiew").offsetWidth;
    rewiews.scrollLeft -= offsetRewiew + 14;
    $("#big-right-arrow").removeClass("inactive-but");
});
