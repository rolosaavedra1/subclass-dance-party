var ShyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('shyDancer');
  this.move();
};

ShyDancer.prototype = Object.create(Dancer.prototype);

ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.move = function() {
  // move on hover
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

