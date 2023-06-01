const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const epochToDate = (epoch) => {
  const date = new Date(epoch);

  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
}

export const centsToWholeDollars = (cents) => `${Number(cents/100)}`