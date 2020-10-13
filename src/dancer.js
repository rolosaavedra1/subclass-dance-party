var Dancer = function(top, left, timeBetweenSteps, className = 'dancer') {
  this.$node = $(`<span class="${className}"></span>`);
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
};

Dancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
