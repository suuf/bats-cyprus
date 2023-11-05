function init() {
  var eventDates = {};
  let day1 = formatDate(new Date(new Date().setMonth(new Date().getMonth())));
  eventDates[day1] = [
    "Bat Walk 📍 Athalassa National Forest Park 🕒 19:00",
    "Event 2 📍 Place 2 🕒 Time",
  ];
  let day2 = formatDate(
    new Date(new Date().setDate(new Date().getDate() + 10))
  );
  eventDates[day2] = ["Bat Presentation, Riverland Bio Darm"];

  // set maxDates
  let maxDate = {
    1: new Date(new Date().setMonth(new Date().getMonth() + 11)),
    2: new Date(new Date().setMonth(new Date().getMonth() + 10)),
    3: new Date(new Date().setMonth(new Date().getMonth() + 9)),
  };

  window.flatpickr = $("#calendar .placeholder").flatpickr({
    inline: true,
    minDate: "today",
    showMonths: 1,
    maxDate: maxDate[2],
    enable: Object.keys(eventDates),
    disableMobile: "true",
    onChange: function (date, str, inst) {
      var contents = "";
      if (date.length) {
        for (i = 0; i < eventDates[str].length; i++) {
          contents +=
            '<div class="event"><div class="date">' +
            flatpickr.formatDate(date[0], "l J F") +
            '</div><div class="location">' +
            eventDates[str][i] +
            "</div></div>";
        }
      }
      $("#calendar .calendar-events").html(contents);
    },
    locale: {
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
  eventCaledarResize();
});

window.onresize = function () {
  eventCaledarResize();
};

function eventCaledarResize() {
  var width = $(window).width();
  console.log(width);
  if (window.flatpickr.selectedDates.length) {
    window.flatpickr.clear();
  }
  if (width >= 1200 && window.flatpickr.config.showMonths !== 3) {
    window.flatpickr.set("showMonths", 3);
  }
  if (
    width < 1200 &&
    width >= 900 &&
    window.flatpickr.config.showMonths !== 2
  ) {
    window.flatpickr.set("showMonths", 2);
  }
  if (width < 900 && window.flatpickr.config.showMonths !== 1) {
    window.flatpickr.set("showMonths", 1);
    $(".flatpickr-calendar").css("width", "");
  }
}

function formatDate(date) {
  let d = date.getDate();
  let m = date.getMonth() + 1; //Month from 0 to 11
  let y = date.getFullYear();
  return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
}
