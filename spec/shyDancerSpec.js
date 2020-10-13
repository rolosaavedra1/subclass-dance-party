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
    //sinon.spy(shyDancer.$node, [insert jquery method string]);
    //shyDancer.step();
    //expect(shyDancer.$node.[insert jquery method].called).to.be.true;
  });

  //it should have a property "minDistanceFromCursor" indicating how much it should move when clicked
  /*
  it('it should have a property "minDistanceFromCursor" indicating how much it should move when clicked', function() {
    expect(shyDancer.minDistanceFromCursor).to.be.true;
  });

  //it should have a property "minDistanceFromDancers"
  it('it should have a property "minDistanceFromDancer" indicating how far it should remain from other dancer objects', function() {
    expect(shyDancer.minDistanceFromDancers).to.be.true;
  });
  */
});
