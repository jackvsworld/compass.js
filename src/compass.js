function Compass(context, x, y, n) {
  this.draw = function (dx, dy, r) {
    var r = (r || 1);
    context.beginPath();
    context.arc(n*(dx + x), n*(dy + y), n*r, 0, 2*Math.PI);
    context.stroke();
  };
}
