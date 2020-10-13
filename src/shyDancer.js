const ShyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

ShyDancer.prototype = Object.create(Dancer.prototype);

ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.move = function() {
  // move on hover
};
