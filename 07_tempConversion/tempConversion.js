const round = function round(n, scale) {
  const m = 10 ** scale;
  return Math.round(n * m) / m;
};

const ftoc = function (f) {
  const c = (f - 32) / 1.8;
  return round(c, 1);
};

const ctof = function (c) {
  const f = 1.8 * c + 32;
  return round(f, 1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
