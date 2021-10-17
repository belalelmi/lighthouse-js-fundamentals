function calculateRectangleArea(length, width) {
  const RecArea = length * width;
  if (RecArea < 0 || RecArea == 0) {
    return undefined;
  } else {
    return RecArea;
  }

}
function calculateTriangleArea(base, height) {
  const triArea = base * height / 2;
  if (triArea < 0 || triArea == 0) {
    return undefined;
  } else {
    return triArea;
  }

}
function calculateCircleArea(radius) {
  const circArea = radius * radius * Math.PI;
  if (circArea < 0 || circArea === 0) {
    return undefined;
  } else {
    return circArea;
  }

}




console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined