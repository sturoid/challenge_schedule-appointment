export default function setAvailability(appointments, timeSlots) {
  const tsWithBooked = [...timeSlots];

  appointments.forEach(a => {
    const start = new Date(Number(a.start));
    const index = tsWithBooked.findIndex(
      t => t.hours === start.getHours && t.minutes === start.getMinutes()
    );
    if (index !== -1) {
      tsWithBooked[index].booked = true;
    }
    tsWithBooked[0].booked = true;
  });

  return tsWithBooked;
}
