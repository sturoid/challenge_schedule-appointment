export function getDateFromTimeSlot(timeSlot) {
  return new Date().setHours(timeSlot.hours, timeSlot.minutes, 0, 0);
}

export default getDateFromTimeSlot;
