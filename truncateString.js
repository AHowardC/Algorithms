function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }
  if (num <= 3) {
    return str.slice(0, num) + '...';
    return str.slice(0, num - 3) + '...';
  }
}

truncateString('The cow jumped over the moon', 4)
// slice()method first arg; where to start. second where to stop.
