export function formatViews(countViews: number) {
  if (countViews >= 1000000000) {
    return Math.round(countViews / 1000000000) + 'B';
  }

  if (countViews >= 1000000) {
    return Math.round(countViews / 1000000) + 'M';
  }

  if (countViews >= 1000) {
    return Math.round(countViews / 1000) + 'K';
  }

  return `${countViews}`;
}
