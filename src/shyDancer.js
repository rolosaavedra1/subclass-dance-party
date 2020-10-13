var ShyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps, 'shyDancer');
  this.minDistanceFromDancers = 250;
  this.feelingOverwhelmed = false;
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
  //if other dancers are too close (see init.js)
  if (this.feelingOverwhelmed) {
    var top = $('body').height() * Math.random();
    var left = $('body').width() * Math.random();
    // called setPosition to put shy dancer at new random location
    Dancer.prototype.setPosition.call(this, top, left);
    this.feelingOverwhelmed = false;
  }
};
