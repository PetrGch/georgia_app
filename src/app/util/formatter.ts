export function timeDurationFormatter(duration: number): string {
  if (!duration) {
    return '';
  }
  if (+duration === 1) {
    return `${duration} день`;
  }
  if (+duration > 1 && +duration < 5) {
    return `${duration} дня`;
  }
  if (+duration >= 5) {
    return `${duration} дней`;
  }

  return '';
}
