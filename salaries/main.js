// @ts-check

// HELPERS

/**
 * @param {number} number
 * @returns {boolean}
 */
function isEven(number) {
  return number % 2 === 0;
}

/**
 * @param {number[]} list
 * @returns {number} average
 */
function calculateArithmeticAverage(list) {
  const listSum = list.reduce(function (accumulated, current) {
    return accumulated + current;
  }, 0);
  const listAverage = listSum / list.length;
  return listAverage;
}

/**
 * @param {number[]} list
 * @returns {number} median
 */
function calculateMedian(list) {
  const listMiddle = Math.floor(list.length / 2);

  if (isEven(list.length)) {
    const element1 = list[listMiddle - 1];
    const element2 = list[listMiddle];
    const median = calculateArithmeticAverage([element1, element2]);
    return median;
  } else {
    const median = list[listMiddle];
    return median;
  }
}

const colombiaSalaries = data.map(({ salary }) => salary);

const colombiaSalariesSorted = colombiaSalaries.sort((a, b) => a - b);

const colombiaSalariesMedianGeneral = calculateMedian(colombiaSalariesSorted);

console.log(colombiaSalariesMedianGeneral);

const spliceStart = colombiaSalariesSorted.length * 0.9;
const spliceCount = colombiaSalariesSorted.length - spliceStart;
const top10PercentSalaries = colombiaSalariesSorted.splice(spliceStart, spliceCount);

const top10PercentSalariesMedian = calculateMedian(top10PercentSalaries);

console.log(top10PercentSalariesMedian);
