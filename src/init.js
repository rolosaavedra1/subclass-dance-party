$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    let positions = [];
    const dancers = [...document.querySelectorAll('span')];
    dancers.forEach(dancer => {
      const rect = dancer.getBoundingClientRect();
      const position = [rect.top, rect.left];
      positions.push(position);
    });
  });
  /*
  //select all dancer objects, update their .allDancerLocs property to the latest one
  document.querySelector('')
  //go through dancer objects, collect their locations in an array [top, left]
  // go through shyDancer objects, if the distance between them and any of the other locations in the array are greater than .minDistanceFromDancers, execute step()

  let distance = Math.sqrt(Math.pow(arrayOfLocs[i][0] - this.top, 2) + Math.pow(arrayOfLocs[i][1] - this.left, 2));
   */
});
//iterate over objects, update their allDancers property to match the longest present
