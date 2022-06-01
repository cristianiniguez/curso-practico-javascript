// @ts-check

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
  const listLength = list.length;
  const listSorted = list.sort((a, b) => a - b);
  const listMiddle = Math.floor(listLength / 2);

  let median;
  if (listLength % 2 === 0) {
    const element1 = listSorted[listMiddle - 1];
    const element2 = listSorted[listMiddle];
    median = calculateArithmeticAverage([element1, element2]);
  } else {
    median = listSorted[Math.floor(listMiddle)];
  }

  return median;
}

/**
 * @param {number[]} list
 * @returns {number} mode
 */
function calculateMode(list) {
  /**
   * @type {{[key: number]: number}}
   */
  const listCount = {};
  list.forEach(function (element) {
    if (listCount[element]) {
      listCount[element] += 1;
    } else {
      listCount[element] = 1;
    }
  });

  const listArray = Object.entries(listCount).sort(([, a], [, b]) => a - b);
  const mode = listArray[listArray.length - 1][0];
  return +mode;
}
