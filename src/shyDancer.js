var ShyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps, 'shyDancer');
  this.minDistanceFromDancers = 20;
  this.step();
};

ShyDancer.prototype = Object.create(Dancer.prototype);

ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.mouseover(() => {
    // defined new variables for top and left
    var top = $('body').height() * Math.random();
    var left = $('body').width() * Math.random();
    // called setPosition to put shy dancer at new random location
    Dancer.prototype.setPosition.call(this, top, left);
  });
};