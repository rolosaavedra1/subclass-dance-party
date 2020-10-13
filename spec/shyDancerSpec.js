describe('shyDancer', function () {
  var shyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    shyDancer = new ShyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(shyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a function that makes its node disappear when the cursor hovers over it', function () {
    sinon.spy(shyDancer.$node, 'mouseover');
    shyDancer.step();
    expect(shyDancer.$node.mouseover.called).to.be.true;
  });

  it('it should have a property "minDistanceFromDancer" indicating how far it should remain from other dancer objects', function () {
    expect(Boolean(shyDancer.minDistanceFromDancers)).to.be.true;
  });
});
