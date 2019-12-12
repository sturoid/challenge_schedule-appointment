export function getDateFromTimeSlot(timeSlot) {
  return new Date().setHours(timeSlot.hours, timeSlot.minutes, timeSlot.seconds);
}

export default getDateFromTimeSlot;
