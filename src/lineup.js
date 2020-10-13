document.querySelector('#lineUp').addEventListener('click', (e) => {
  e.preventDefault;
  const dancers = [...document.querySelectorAll('span')];
  const gap = $('body').width() / dancers.length;
  const offset = gap / 2;
  dancers.forEach((dancer, i) => {
    const middle = $('body').height() / 2;
    const x = (i * gap) + offset;
    
    dancer.style.top = middle + 'px';
    dancer.style.left = x + 'px';
  });
});
