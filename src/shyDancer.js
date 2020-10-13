var ShyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps, 'shyDancer');
  //this.minDistanceFromDancers = 20;
  this.$node.mouseover(() => {
    // defined new variables for top and left
    var top = $('body').height() * Math.random();
    var left = $('body').width() * Math.random();
    // called setPosition to put shy dancer at new random location
    Dancer.prototype.setPosition.call(this, top, left);
  });
  this.step();
};

ShyDancer.prototype = Object.create(Dancer.prototype);

ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //iterate over allDancerLocs array, if any of them are within this.mindDistanceFromDancers, relocate
  /*for (var i = 0; i < this.dancers.length; i++) {
     //use pythagorean theorem to calculate distance between them
     let distance = Math.sqrt(Math.pow(this.r allDancerLocs[i][0] - this.top, 2) + Math.pow(this.r allDancerLocs[i][1] - this.left, 2));
     if (distance > thus.minDistanceFromDancers) {
      Dancer.prototype.setPosition.call(this, $('body').height() * Math.random(), $('body').width() * Math.random());
    }
  }
  */

};