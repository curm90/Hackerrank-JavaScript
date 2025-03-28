// https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

function timeConversion(s) {
  let [hours, minutes, seconds] = s.slice(0, 8).split(':');
  const period = s.slice(-2);

  if (period === 'AM') {
    hours = hours == 12 ? '00' : hours;
  } else {
    hours = hours == 12 ? hours : parseInt(hours) + 12;
  }

  return `${hours}:${minutes}:${seconds}`;
}

console.log(timeConversion('07:05:45PM')); // 19:05:45
console.log(timeConversion('12:05:45AM')); // 00:05:45
console.log(timeConversion('12:05:45PM')); // 12:05:45
