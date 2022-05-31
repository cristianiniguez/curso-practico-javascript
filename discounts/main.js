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

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById('input-price');
  const inputDiscount = document.getElementById('input-discount');

  if (!(inputPrice instanceof HTMLInputElement))
    throw new Error('#input-price is not an HTMLInputElement');
  if (!(inputDiscount instanceof HTMLInputElement))
    throw new Error('#input-discount is not an HTMLInputElement');

  const priceValue = parseFloat(inputPrice.value);
  const discountValue = parseFloat(inputDiscount.value);

  const priceWithDiscount = calculatePriceWithDiscount(priceValue, discountValue);

  const result = document.getElementById('result');
  result.innerText = 'The price with discount is: $' + priceWithDiscount;
}
