var ShyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps, 'shyDancer');
  this.$node.mouseover(() => {
    const top = $('body').height() * Math.random();
    const left = $('body').width() * Math.random();
    Dancer.prototype.setPosition.call(this, top, left);
  });
  this.step();
};

ShyDancer.prototype = Object.create(Dancer.prototype);

ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};


