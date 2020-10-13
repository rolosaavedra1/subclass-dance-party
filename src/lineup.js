// selects all lineup ids
document.querySelector('#lineUp').addEventListener('click', (e) => {
  // prevents opening new tab
  e.preventDefault;
  // put all dancers in an array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  // https://stackoverflow.com/questions/52128519/what-type-of-data-does-queryselectorall-return
  const dancers = [...document.querySelectorAll('span')];
  console.log(document.querySelectorAll('span'));
  // gaps between dancers
  const gap = $('body').width() / dancers.length;
  // centers dancers
  const offset = gap / 2;
  dancers.forEach((dancer, i) => {
    // centers vertically
    const middle = $('body').height() / 2;
    // centers horizontally and places them on line and adds gaps
    const x = (i * gap) + offset;
    dancer.style.top = `${middle}px`;
    dancer.style.left = `${x}px`;
  });
});
