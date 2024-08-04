// export function fetchAPI(date) {
//   let startTime = 16;
//   let endTime = 23;
//   let probability = 0.5;
//   let result = [];
  
//   for (let hour = startTime; hour <= endTime; hour++) {
//     if (Math.random() < probability) {
//       result.push(`${hour}:00`);
//     }
//     if (Math.random() < probability) {
//       result.push(`${hour}:30`);
//     }
//   }
//   return result;
// }


const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export function fetchAPI(date) {
  let result = [];

  let random = seededRandom(date);
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}

export function submitAPI(formData) {
  return true;
}
