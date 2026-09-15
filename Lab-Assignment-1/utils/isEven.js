function isEven(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return false;
  }

  return value % 2 === 0;
}

module.exports = {
  isEven,
};
