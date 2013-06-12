function Compass(context, x, y, n, m) {
  this.draw = function (dx, dy, r) {
    context.beginPath();
    context.arc(n * (x + dx), n * (y + dy), n * r, 0, m * Math.PI);
    context.stroke();
  };
}
