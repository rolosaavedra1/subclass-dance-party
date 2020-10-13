var Dancer = function(top, left, timeBetweenSteps, className = 'dancer') {
  // added className parameter to specify the class for each dancer
  this.$node = $(`<span class="${className}"></span>`);
  this.setPosition(top, left);
  //this.allDancerLocs = [];
  //
};

Dancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  //this.allDancerLocs.push([top, left]);
  this.$node.css(styleSettings);
};
