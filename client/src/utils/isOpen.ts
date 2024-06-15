interface OpenCloseHours {
  open: number | null;
  close: number | null;
}

export default function isOpen(openingHours: {[key: string]: OpenCloseHours}) {
  const now = new Date();
  const dayOfWeek = now.toLocaleString('en-us', { weekday: 'long' });
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const hours = openingHours[dayOfWeek];
  if (!hours || hours.open === null || hours.close === null) {
    return false;
  }
  return currentMinutes >= hours.open && currentMinutes < hours.close;
}
