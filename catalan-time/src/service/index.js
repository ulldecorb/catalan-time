// CATALAN TIME LOGIC

export function dateConverter(date) {
  const { hour, minute } = date;
  let convertedDate = '';

  if (minute <= 9) convertedDate = `${hour === 1 ? 'La 1' : `Les ${hour}`}${getMinute(minute)}`;
  if (minute >= 10 && minute <= 24) convertedDate = `Un quart${getMinute(minute)} de ${hour + 1 === 13 ? 1 : hour + 1}`;
  if (minute >= 25 && minute <= 39) convertedDate = `Dos quarts${getMinute(minute)} de ${hour + 1 === 13 ? 1 : hour + 1}`;
  if (minute >= 40 && minute <= 54) convertedDate = `Tres quarts${getMinute(minute)} de ${hour + 1 === 13 ? 1 : hour + 1}`;
  if (minute >= 55) convertedDate = `${hour === 12 ? 'La 1' : `Les ${hour + 1}`}${getMinute(minute)}`;
  if (!minute) convertedDate = `${hour} en punt`;

  return convertedDate;
}

export function getMinute(minute) {
  const remainder = minute % 15;
  let convertedMinute = '';

  if (!remainder) return '';
  if (remainder < 10) convertedMinute += ` i ${remainder === 1 ? '1 minut' : `${remainder} minuts`}`;
  if (remainder >= 10) convertedMinute += ` menys ${remainder === 14 ? '1 minut' : `${15 - remainder} minuts`}`;

  return convertedMinute;
}
