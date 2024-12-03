// https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

function timeConversion(s) {
  // if PM add 12 to hours number
  let result = [];
  const numbers = s.split(':');
  const amOrPm = numbers[2].slice(2);

  numbers.forEach((num, i) => {
    // if AM and hour is 12 then change to 00
    if (amOrPm === 'AM' && num === '12' && i === 0) {
      result.push('00');
    } else if (amOrPm === 'PM' && num !== '12' && i === 0) {
      result.push(parseInt(num) + 12);
    } else {
      result.push(num);
    }
  });

  // remove AM or PM from string and return the new string
  return result.join(':').slice(0, 8);
}

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
console.log(timeConversion('12:00:00AM')); // 00:00:00
console.log(timeConversion('12:00:00PM')); // 12:00:00
console.log(timeConversion('07:05:45AM')); // 07:05:45
console.log(timeConversion('01:05:45PM')); // 13:05:45
console.log(timeConversion('11:05:45PM')); // 23:05:45
