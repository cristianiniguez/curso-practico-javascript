// @ts-check

/**
 * @param {number[]} list
 * @returns average
 */
function calculateArithmeticAverage(list) {
  const listSum = list.reduce(function (accumulated, current) {
    return accumulated + current;
  }, 0);
  const listAverage = listSum / list.length;
  return listAverage;
}
