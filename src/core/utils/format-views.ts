export default function formatViews(countViews: number) {
  if (countViews >= 1000000000) {
    return Math.round(countViews / 1000000000) + 'B';
  }

  if (countViews >= 1000000) {
    const result = Math.round(countViews / 1000000) + 'M';
    return result === '1000M' ? '1B' : result;
  }

  if (countViews >= 1000) {
    const result = Math.round(countViews / 1000) + 'K';
    return result === '1000K' ? '1M' : result;
  }

  return `${countViews}`;
}
