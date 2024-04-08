(() => {
  const titleAnimate = document.querySelectorAll('.animate-letter');
  let titleArray = [...titleAnimate];


  titleArray.forEach(leter => {
    let letterArr = leter.innerHTML.split('');
    let titleTarget = leter;
    leter.innerHTML = '';

    letterArr.forEach(char => {
      const span = document.createElement('span');
      span.classList.add('elem-title');
      titleTarget.appendChild(span);

      if (char == " ") {
        char = '_';
        span.textContent = char;
        span.classList.add('transparent');
      }

      span.textContent = char;
    });
  })

  let timer = setInterval(setChar, 100);
  let char = 0;

  function setChar() {
    const arrSpan = document.querySelectorAll('.elem-title');
    const spanChar = document.querySelectorAll('.elem-title')[char];
    spanChar.classList.add('fade');
    char++;
    char === arrSpan.length && clearInterval(timer);
  }
})();

const scrollItems = document.querySelectorAll('.animate');

  const scrollAnimation = () => {
    let windowCentr = (window.innerHeight) + window.scrollY;
    scrollItems.forEach(el => {
      let scrollOffset = el.offsetTop + el.offsetHeight;

      if (windowCentr >= scrollOffset) {
        el.classList.add('element-show');
      }
      else {
        el.classList.remove('element-show');
      }
    })
  };

  window.addEventListener('scroll', () => {
    scrollAnimation();

  });

