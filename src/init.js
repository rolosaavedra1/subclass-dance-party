$(document).ready(function() {
  window.dancers = [];
  var dancerObjs = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    dancerObjs.push(dancer);
    $('body').append(dancer.$node);
    let positions = [];
    //create an array for all the dancers
    const dancerElements = [...document.querySelectorAll('span')];
    //store their positions in an array [[top1, left1], [top2, left2],...]
    dancerElements.forEach(dancer => {
      const rect = dancer.getBoundingClientRect();
      const top = rect.top;
      const left = rect.left;
      const position = [top, left];
      positions.push(position);
    });
    dancerObjs.forEach(function(dancer){
      if(dancer.minDistanceFromDancers){
        for (var i = 0; i < positions.length; i++) {
          let distance = Math.sqrt(Math.pow(positions[i][0] - dancer.top, 2) + Math.pow(positions[i][1] - dancer.left, 2));
          if (distance < dancer.minDistanceFromDancers) {
            dancer.step();
          }
        }
      }
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