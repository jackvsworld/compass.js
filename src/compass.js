function Compass(context, x, y, n) {
  this.options = {
    color: 'black',
    fill: 'transparent'
  };

  this.color = function (color) {
    this.options.color = color;
    return this;
  };

  this.fill = function (color) {
    this.options.fill = color;
    return this;
  };

  this.draw = function (dx, dy, r) {
    var r = (r || 1);
    context.strokeStyle = this.options.color;
    context.fillStyle = this.options.fill;
    context.beginPath();
    context.arc(n*(dx + x), n*(dy + y), n*r, 0, 2*Math.PI);
    context.fill();
    context.stroke();
  };
}
