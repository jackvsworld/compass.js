function Compass(context, x, y, n) {
  this.draw = function (dx, dy, r) {
    context.beginPath();
    context.arc(n*(dx + x), n*(dy + y), n*r, 0, 2*Math.PI);
    context.stroke();
  };
}
