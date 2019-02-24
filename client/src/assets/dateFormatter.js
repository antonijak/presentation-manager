function dateFormatter(date) {
  let day = date.substring(8, 10);
  let month = date.substring(5, 7);
  let year = date.substring(0, 4);
  return `${day}.${month}.${year}`;
}

export default dateFormatter;
