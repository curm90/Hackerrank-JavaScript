// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

function timeConversion(s: string) {
  const time = s.slice(0, 8).split(':');
  const amPm = s.slice(-2);

  if (amPm === 'PM' && time[0] !== '12') {
    time[0] = String(Number(time[0]) + 12);
  } else if (amPm === 'AM' && time[0] === '12') {
    time[0] = '00';
  }

  return time.join(':');
}

console.log(timeConversion('07:05:45PM')); // 19:05:45
console.log(timeConversion('12:05:45AM')); // 00:05:45
console.log(timeConversion('12:05:45PM')); // 12:05:45
console.log(timeConversion('07:05:45AM')); // 07:05:45
console.log(timeConversion('12:00:00AM')); // 00:00:00
console.log(timeConversion('12:00:00PM')); // 12:00:00
