// @ts-check

// FUNCTIONS

// Square

/**
 * @param {number} side
 * @returns number
 */
function squarePerimeter(side) {
  return side * 4;
}

/**
 * @param {number} side
 * @returns {number}
 */
function squareArea(side) {
  return side * side;
}

// Triangle

/**
 * @param {number} side1
 * @param {number} side2
 * @param {number} base
 * @returns {number}
 */
function trianglePerimeter(side1, side2, base) {
  return side1 + side2 + base;
}

/**
 * @param {number} base
 * @param {number} height
 * @returns {number}
 */
function triangleArea(base, height) {
  return (base * height) / 2;
}

// Circle

/**
 * @param {number} radius
 * @returns {number}
 */
function circleDiameter(radius) {
  return radius * 2;
}

/**
 * @param {number} radius
 * @returns {number}
 */
function circlePerimeter(radius) {
  const diameter = circleDiameter(radius);
  return Math.PI * diameter;
}

/**
 * @param {number} radius
 * @returns {number}
 */
function circleArea(radius) {
  return Math.PI * radius * radius;
}

// EVENTS

function calculateSquarePerimeter() {
  const input = document.getElementById('square-side');
  if (!(input instanceof HTMLInputElement)) return;

  const side = parseFloat(input.value);
  const perimeter = squarePerimeter(side);
  alert(perimeter);
}

function calculateSquareArea() {
  const input = document.getElementById('square-side');
  if (!(input instanceof HTMLInputElement)) return;

  const side = parseFloat(input.value);
  const area = squareArea(side);
  alert(area);
}
