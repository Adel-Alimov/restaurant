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
});
