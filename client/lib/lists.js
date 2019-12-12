export function getScheduleTime() {
  const array = [];
  for (let i = 0; i < 24; i += 1) {
    array.push({ hours: i, minutes: 0 });
    array.push({ hours: i, minutes: 30 });
  }
  return array;
}

export default getScheduleTime;
