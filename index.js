$("#right-arrow").on("click", function () {
    $(".title-gallery").removeClass("gal-title").addClass("val-title");
    $(".text-gallery").removeClass("gal-text").addClass("val-text");
    $(".left-gallery").removeClass("gal-img").addClass("val-img");
    $("#left-arrow").attr("disabled", false);
    $("#right-arrow").attr("disabled", true);
});

$("#left-arrow").on("click", function () {
    $(".title-gallery").removeClass("val-title").addClass("gal-title");
    $(".text-gallery").removeClass("val-text").addClass("gal-text");
    $(".left-gallery").removeClass("val-img").addClass("gal-img");
    $("#left-arrow").attr("disabled", true);
    $("#right-arrow").attr("disabled", false);
});

$("#right-arrow-mob").on("click", function () {
    $(".title-gallery").removeClass("gal-title").addClass("val-title");
    $(".text-gallery").removeClass("gal-text").addClass("val-text");
    $(".left-gallery").removeClass("gal-img").addClass("val-img");
    $("#left-arrow-mob").attr("disabled", false);
    $("#right-arrow-mob").attr("disabled", true);
});

$("#left-arrow-mob").on("click", function () {
    $(".title-gallery").removeClass("val-title").addClass("gal-title");
    $(".text-gallery").removeClass("val-text").addClass("gal-text");
    $(".left-gallery").removeClass("val-img").addClass("gal-img");
    $("#left-arrow-mob").attr("disabled", true);
    $("#right-arrow-mob").attr("disabled", false);
});
