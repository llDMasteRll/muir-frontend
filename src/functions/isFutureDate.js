const isFutureDate = (value) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return date > today;
};

export default isFutureDate;