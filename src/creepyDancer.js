const CreepyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

CreepyDancer.prototype = Object.create(Dancer.prototype);

CreepyDancer.prototype.constructor = CreepyDancer;

CreepyDancer.prototype.stick = function() {
  // stick to another dancer
};
