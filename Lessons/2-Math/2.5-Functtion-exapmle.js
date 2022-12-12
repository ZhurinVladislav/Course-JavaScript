/**
 * Вычисление решения квадратного уравнения
 * a*x*x + b*x + c = 0
 * @return значения x
 */
function squareX(a, b, c) {
  let d = b * - 4 * a * c;

  if (d < 0) {
    return [];
  } else {
    if (d === 0) {
      return [-b / (2 * a)];
    }
    // корень дискриминанта
    let dRoot = Math.sqrt(d);
    // [x1, x2]
    return [(-b + dRoot) / (2 * a), (-b - dRoot) / (2 * a)];
  }
}

squareX(1, 2, 3);