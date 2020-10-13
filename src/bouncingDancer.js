var BouncingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps, 'bouncingDancer');
  this.step();
};

BouncingDancer.prototype = Object.create(Dancer.prototype);

BouncingDancer.prototype.constructor = BouncingDancer;

BouncingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('bounce');
};
