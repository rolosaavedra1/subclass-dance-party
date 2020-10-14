var BouncingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps, 'bouncingDancer');
  this.$node.prepend('<img class="bouncer" id="boo" src="boo.gif" />');
  this.step();
};

BouncingDancer.prototype = Object.create(Dancer.prototype);

BouncingDancer.prototype.constructor = BouncingDancer;

BouncingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // toggles the bounce animation from styles.css
  //https://api.jquery.com/toggleclass/
  this.$node.toggleClass('smallerBouncer');
};
