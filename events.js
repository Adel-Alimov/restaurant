$(function () {
    const rewiew = document.getElementById("rewiew-people");
    const firstRewiew = rewiew.firstElementChild;
    const lastRewiew = rewiew.lastElementChild;

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    const callbackCreator = function (arrowSelector) {
        return (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    $(arrowSelector).addClass("inactive-but");
                }
            });
        };
    };

    const observerLastRewiew = new IntersectionObserver(
        callbackCreator("#big-right-arrow"),
        options,
    );
    observerLastRewiew.observe(lastRewiew);

    const observerFirstRewiew = new IntersectionObserver(
        callbackCreator("#big-left-arrow"),
        options,
    );
    observerFirstRewiew.observe(firstRewiew);

    const buttonObserverOptions = {
        root: null,
        rootMargin: "0px",
        threshold: [0, 1],
    };
    let buttonIsShown = {};
    const observerButton = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            let btn = entry.target;
            buttonIsShown[btn.dataset.observeid] = entry.isIntersecting;
        });
        if (Object.values(buttonIsShown).some((x) => x)) {
            $("#open-special-offer").hide();
        } else {
            $("#open-special-offer").show();
        }
    }, buttonObserverOptions);

    $(".orange-button")
        .toArray()
        .forEach((btn, btnIdx) => {
            btn.dataset.observeid = btnIdx;
            observerButton.observe(btn);
        });
});
