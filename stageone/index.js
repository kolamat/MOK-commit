let newDate = new Date();
// console.log(newDate)
//
// newDate.setDate(8);
// newDate.setMinutes(29);
// console.log(newDate);
// setInterval(updateTime, 1000);
//
// function updateTime() {
//   Time.innerHTML = new Date();
// }

const currentDay = document.getElementById('dayOfWeek');

currentDay.innerHTML = newDate.toDateString().substring(0, 3);

const utcTime = document.getElementById('currentUTCTime');

utcTime.innerHTML = new Date().getUTCMilliseconds();

