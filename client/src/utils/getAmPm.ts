export default function getAmPm(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  const period = hours >= 12 ? 'PM' : 'AM';

  const hours12 = hours % 12 || 12;

  const formattedMinutes = mins < 10 ? `0${mins}` : mins;

  return `${hours12}:${formattedMinutes} ${period}`;
}
