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
 * @param {number} side1
 * @param {number} side2
 * @param {number} side3
 * @returns {number}
 */
function triangleArea(side1, side2, side3) {
  const s = (side1 + side2 + side3) / 2;
  return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
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

function calculateTrianglePerimeter() {
  const input1 = document.getElementById('triangle-side-1');
  const input2 = document.getElementById('triangle-side-2');
  const input3 = document.getElementById('triangle-side-3');
  if (
    !(input1 instanceof HTMLInputElement) ||
    !(input2 instanceof HTMLInputElement) ||
    !(input3 instanceof HTMLInputElement)
  )
    return;

  const side1 = parseFloat(input1.value);
  const side2 = parseFloat(input2.value);
  const side3 = parseFloat(input3.value);
  const perimeter = trianglePerimeter(side1, side2, side3);
  alert(perimeter);
}

function calculateTriangleArea() {
  const input1 = document.getElementById('triangle-side-1');
  const input2 = document.getElementById('triangle-side-2');
  const input3 = document.getElementById('triangle-side-3');
  if (
    !(input1 instanceof HTMLInputElement) ||
    !(input2 instanceof HTMLInputElement) ||
    !(input3 instanceof HTMLInputElement)
  )
    return;

  const side1 = parseFloat(input1.value);
  const side2 = parseFloat(input2.value);
  const side3 = parseFloat(input3.value);
  const area = triangleArea(side1, side2, side3);
  alert(area);
}

function calculateCirclePerimeter() {
  const input = document.getElementById('circle-radius');
  if (!(input instanceof HTMLInputElement)) return;

  const radius = parseFloat(input.value);
  const perimeter = circlePerimeter(radius);
  alert(perimeter);
}

function calculateCircleArea() {
  const input = document.getElementById('circle-radius');
  if (!(input instanceof HTMLInputElement)) return;

  const radius = parseFloat(input.value);
  const area = circleArea(radius);
  alert(area);
}
