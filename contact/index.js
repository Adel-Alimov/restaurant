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
    let newValue = Number(peoples.value) + 1;
    peoples.setAttribute("value", String(newValue));
});

{
    /* <button class="selected">Январь</button>
                <button>Февраль</button>
                <button>Март</button> */
}

const today = new Date();
today.setHours(0, 0, 0, 0);

const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
];

function makeCalendar(monthIndex) {
    const firstDayOfMonth = new Date(
        today.getFullYear() + Math.floor((today.getMonth() + monthIndex) / 12),
        (today.getMonth() + monthIndex) % 12,
        1,
    );
    const dayShift = (firstDayOfMonth.getDay() - 1 + 7) % 7;
    const firstDayOfCalendar = new Date(firstDayOfMonth);
    firstDayOfCalendar.setDate(1 - dayShift);

    let date = new Date(firstDayOfCalendar);
    let calendar = [];

    for (let weekIndex = 0; weekIndex < 6; weekIndex++) {
        for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
            const weekDay = (date.getDay() + 6) % 7;
            calendar.push({
                day: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear(),
                weekDay: weekDay,
                disabled: date < today,
                isToday: date <= today && date >= today,
            });
            date.setDate(date.getDate() + 1);
            if (date.getMonth() > firstDayOfMonth.getMonth() && weekDay == 0) {
                return calendar;
            }
        }
    }
    return calendar;
}

function fillMonthNames() {
    for (let monthIndex = 0; monthIndex < 3; monthIndex++) {
        const monthName = monthNames[(today.getMonth() + monthIndex) % 12];
        let button = document.createElement("button");
        button.innerText = monthName;
        button.dataset["monthIndex"] = monthIndex;
        if (monthIndex == 0) {
            button.classList.add("selected");
        }
        $("#calendar .month-selector").append(button);
    }
}

let currentMonthIndex = 0;

function fillCalendar(currentMonthIndex) {
    let calendar = makeCalendar(currentMonthIndex);
    let calendarDayContainer = $("#calendar table.day-selector tbody");
    calendarDayContainer.empty();
    console.log(calendarDayContainer);

    let row = [];
    for (let day of calendar) {
        const classNames = day.disabled ? ["disabled"] : [];
        if (day.isToday) classNames.push("selected");
        const className = classNames.join(" ");
        row.push(
            `<td><div class="${className}" data-year="${day.year}" data-month="${day.month}" data-day="${day.day}">${day.day}</div></td>`,
        );
        if (day.weekDay == 6) {
            const rowHtml = "<tr>" + row.join("") + "</tr>";
            calendarDayContainer.append($(rowHtml));
            row = [];
        }
    }
}

function obtainTimeSlots(year, month, day) {
    //ToDo: make Backend
    return [
        { time: "17:00", occupied: false },
        { time: "17:30", occupied: true },
        { time: "18:00", occupied: false },
        { time: "18:15", occupied: false },
        { time: "18:30", occupied: false },
        { time: "18:45", occupied: false },
        { time: "19:00", occupied: false },
        { time: "19:10", occupied: false },
    ];
}

function fillTimeSlots(year, month, day) {
    const timeSlots = obtainTimeSlots(year, month, day);
    const container = $("#calendar .time-selector");
    container.empty();
    for (let slot of timeSlots) {
        const className = slot.occupied == true ? "occupied" : "";
        container.append(
            $(`<button class="${className}" data-time="${slot.time}">${slot.time}</button>`),
        );
    }
}

fillMonthNames();
fillCalendar(0);
fillTimeSlots(today.getFullYear(), today.getMonth() + 1, today.getDay());

$("#calendar .month-selector button").on("click", function (event) {
    let button = $(event.target);
    $("#calendar .month-selector button").removeClass("selected");
    button.addClass("selected");
    fillCalendar(button.data("monthIndex"));
});

let selectedDay = null,
    selectedMonth = null,
    selectedYear = null;

$("#calendar .day-selector").on("click", "td", function (event) {
    let cell = $(event.target).closest("td");
    let cellDiv = cell.find("div");
    if (cellDiv.attr("class") === "disabled") {
        return;
    }
    $("#calendar .day-selector td .selected").removeClass("selected");
    cellDiv.addClass("selected");
    selectedDay = cellDiv.data("day");
    selectedMonth = cellDiv.data("month");
    selectedYear = cellDiv.data("year");

    const dayString = String(selectedDay).padStart(2, "0");
    const monthString = String(selectedMonth).padStart(2, "0");
    const selectedDate = `${dayString}.${monthString}.${selectedYear}`;

    fillTimeSlots(selectedYear, selectedMonth, selectedDay);
    $("#datetimepicker").val(selectedDate);
});

$("#calendar .time-selector").on("click", "button", function (event) {
    let button = $(event.target);
    $("#calendar .time-selector .selected").removeClass("selected");
    button.addClass("selected");

    const dayString = String(selectedDay).padStart(2, "0");
    const monthString = String(selectedMonth).padStart(2, "0");
    const selectedDate = `${dayString}.${monthString}.${selectedYear}`;

    const selectedTime = button.data("time");

    $("#datetimepicker").val(`${selectedDate} ${selectedTime}`);
});

$("#datetimepicker").on("click", function () {
    $("#calendar").show();
});

$("#calendar .close").on("click", function () {
    $("#calendar").hide();
});

// $("#datetimepicker").datetimepicker({
//     step: 30,
//     minDate: 0,
//     minTime: "10:00",
//     maxTime: "22:30",
// });
