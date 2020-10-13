describe('creepyDancer', function() {
  var creepyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    creepyDancer = new CreepyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(creepyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node stick to other nodes', function() {
    //sinon.spy(creepyDancer.$node, 'toggle');
    creepyDancer.step();
    //expect(creepyDancer.$node.toggle.called).to.be.true;
  });

  //it should follow other dancers

  //it should stay away from other creepy dancers
};