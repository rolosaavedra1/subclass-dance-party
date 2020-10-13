describe('shyDancer', function() {
  var shyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shyDancer = new ShyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node disappear when the cursor clicks on it', function() {
    //sinon.spy(shyDancer.$node, 'toggle');
    //shyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  //it should move away when the cursor is set next to it

  //it should stay away from other dancers
};