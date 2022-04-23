// @ts-check

/**
 * @param {number} price
 * @param {number} discount
 * @returns {number} price with discount
 */
function calculatePriceWithDiscount(price, discount) {
  const priceWithDiscountPercentage = 100 - discount;
  const priceWithDiscount = (price * priceWithDiscountPercentage) / 100;
  return priceWithDiscount;
}
