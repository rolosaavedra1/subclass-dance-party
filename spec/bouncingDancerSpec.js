describe('bouncingDancer', function () {
  let bouncingDancer, clock;
  let timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    bouncingDancer = new BouncingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(bouncingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a function that makes the node change in size', function () {
    sinon.spy(bouncingDancer.$node, 'toggleClass');
    bouncingDancer.step();
    expect(bouncingDancer.$node.toggleClass.called).to.be.true;
  });
});
