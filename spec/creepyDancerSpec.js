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
    //creepyDancer.step();
    //expect(creepyDancer.$node.toggle.called).to.be.true;
  });

  /*//it should follow other dancers by having a property "followingDancer", equal to the ID of the dancer it is following
  //if not following anyone, it should be equal to its own ID
  it('it should have a property "followingDancer" indicating what dancer it is following, if any', function() {
    expect(creepyDancer.followingDancer).to.be.true;
  });

  //it should stay away from other creepy dancers by having a property "minDistanceFromCreeps"
  //this means we need an array of all the dancers present, to make sure its distance from the creepy ones
  it('it should have a property "minDistanceFromCreeps"', function() {
    expect(creepyDancer.minDistanceFromCreeps).to.be.true;
  }); */
});
