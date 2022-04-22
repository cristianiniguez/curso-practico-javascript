// Square

console.group('Square');

const squareSide = 5;
console.log(`Square sides are ${squareSide}cm`);

const squarePerimeter = squareSide * 4;
console.log(`Square perimeter is ${squarePerimeter}cm`);

const squareArea = squareSide * squareSide;
console.log(`Square area is ${squareArea}cm^2`);

console.groupEnd('Square');

// Triangle

console.group('Triangle');

const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
console.log(`Triangle sides are ${triangleSide1}cm, ${triangleSide2}cm and ${triangleBase}cm`);

const triangleHeight = 5.5;
console.log(`Triangle height is ${triangleHeight}cm`);

const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
console.log(`Triangle perimeter is ${trianglePerimeter}cm`);

const triangleArea = (triangleBase * triangleHeight) / 2;
console.log(`Triangle area is ${triangleArea}cm^2`);

console.groupEnd('Triangle');

// Circle

console.group('Circle');

const circleRadius = 4;
console.log(`Circle radius is ${circleRadius}cm`);

const circleDiameter = circleRadius * 2;
console.log(`Circle diameter is ${circleDiameter}cm`);

const PI = Math.PI;
console.log(`PI is ${PI}`);

const circlePerimeter = PI * circleDiameter;
console.log(`Circle perimeter is ${circlePerimeter}cm`);

const circleArea = PI * circleRadius * circleRadius;
console.log(`Circle area is ${circleArea}cm^2`);

console.groupEnd('Circle');
