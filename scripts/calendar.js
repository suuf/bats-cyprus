function init() {
  var eventDates = {};
  let today = new Date();
  // set maxDates
  window.maxDate = {
    1: new Date(new Date().setMonth(new Date().getMonth() + 3)),
    2: new Date(new Date().setMonth(new Date().getMonth() + 2)),
    3: new Date(new Date().setMonth(new Date().getMonth() + 1)),
  };

  /*

  // Once-off Events
  let day1 = formatDate(new Date("2023-11-02"));
  eventDates[day1] = [
    "Event Name 📍 Location 🕒 Time",
    // add 2nd event if needed
  ];

  let dayThursdays = new Date("2023-11-02");
  // Weekly Events
  let weeklyEventName =
    "Weekly Event Name 📍 Weekly Event Location 🕒 Weekly Event Time";
  for (let i = 1; i < 3; i++) {
    // set i to number of repeat times
    let dayx = formatDate(
      new Date(new Date(dayThursdays).setDate(dayThursdays.getDate() + i * 7))
    );
    if (eventDates[dayx]) {
      eventDates[dayx].push(weeklyEventName);
    } else {
      eventDates[dayx] = [weeklyEventName];
    }
  }

  // Fortnight Events
  let fortnightEventName =
    "Fortnight Event Name 📍 Fortnight Event Location 🕒 Fortnight Event Time";
  for (let i = 1; i < 3; i++) {
    // set i to number of repeat times
    let dayx = formatDate(
      new Date(new Date(dayThursdays).setDate(dayThursdays.getDate() + i * 14))
    );

    if (eventDates[dayx]) {
      eventDates[dayx].push(fortnightEventName);
    } else {
      eventDates[dayx] = [fortnightEventName];
    }
  }
  */

  window.flatpickr = $("#calendar .placeholder").flatpickr({
    inline: true,
    minDate: today.getFullYear() + "-" + (today.getMonth() + 1),
    showMonths: 1,
    maxDate: window.maxDate[1],
    enable: Object.keys(eventDates),
    disableMobile: "true",
    monthSelectorType: "static",
    // yearSelectorType: "static", // this might get implemented one day :')
    onChange: function (date, str, inst) {
      var contents = "";
      contents +=
        '<div class="event"><div class="date">' +
        window.flatpickr.formatDate(date[0], "l J F Y");
      if (date.length) {
        for (i = 0; i < eventDates[str].length; i++) {
          contents +=
            '<div class="event">' +
            //'<div class="date">' +
            // window.flatpickr.formatDate(date[0], "l J F Y") +
            // '</div>' +
            '<div class="location">' +
            eventDates[str][i] +
            "</div></div><br />";
        }
      }
      $("#calendar .calendar-events").html(contents);
    },
    locale: {
      firstDayOfWeek: 1,
      weekdays: {
        shorthand: ["S", "M", "T", "W", "T", "F", "S"],
        longhand: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  init();
  eventCaledarResize($(window));
});

$(window).on("resize", function () {
  eventCaledarResize($(this));
});

function eventCaledarResize($el) {
  var width = $el.width();
  console.log(width);
  /*
  if (flatpickr.selectedDates.length) {
    flatpickr.clear();
  }
  */
  if (width >= 1200 && flatpickr.config.showMonths !== 3) {
    flatpickr.set("showMonths", 3);
    flatpickr.set("maxDate", maxDate[3]);
  }
  if (width < 1200 && width >= 900 && flatpickr.config.showMonths !== 2) {
    flatpickr.set("showMonths", 2);
    flatpickr.set("maxDate", maxDate[2]);
  }
  if (width < 900 && flatpickr.config.showMonths !== 1) {
    flatpickr.set("showMonths", 1);
    flatpickr.set("maxDate", maxDate[1]);
    $(".flatpickr-calendar").css("width", "");
  }
}

function formatDate(date) {
  let d = date.getDate();
  let m = date.getMonth() + 1; //Month from 0 to 11
  let y = date.getFullYear();
  return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
}
