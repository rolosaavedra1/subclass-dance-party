var ShyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps, 'shyDancer');
  this.minDistanceFromDancers = 250;
  this.feelingOverwhelmed = false;
  this.$node.prepend('<img id="SA7Qt2r.gif" src="SA7Qt2r.gif" />');
  this.step();
};

ShyDancer.prototype = Object.create(Dancer.prototype);

ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.step = function() {
  // defined new variables for top and left
  var top = $('body').height() * Math.random();
  var left = $('body').width() * Math.random();
  Dancer.prototype.step.call(this);
  this.$node.mouseover(() => {
    // called setPosition to put shy dancer at new random location
    Dancer.prototype.setPosition.call(this, top, left);
  });
  //if other dancers are too close (see init.js)
  if (this.feelingOverwhelmed) {
    // called setPosition to put shy dancer at new random location
    Dancer.prototype.setPosition.call(this, top, left);
    this.feelingOverwhelmed = false;
  }
};
