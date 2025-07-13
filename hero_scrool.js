// Scroll progress bar for hero-1
const progressBar = document.getElementById('scroll-progress');
const hero1 = document.querySelector('.hero-1');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const start = hero1.offsetTop;
  const end = start + hero1.offsetHeight;

  if (scrollY >= start && scrollY <= end) {
    const progressPercent = ((scrollY - start) / (end - start)) * 100;
    progressBar.style.width = progressPercent + '%';
  } else if (scrollY < start) {
    progressBar.style.width = '0%';
  } else {
    progressBar.style.width = '100%';
  }
});

// Parallax rotation for hero-2 image
const img = document.getElementById('parallax-img');
if (img) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    img.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  });
}

// Hero 3 scroll animations
const hero3BgLeft = document.querySelector('.hero-3-bg-left');
const hero3BgRight = document.querySelector('.hero-3-bg-right');
const hero3Blocks = document.querySelector('.hero-3-blocks');
const heroBlockCenter = document.querySelector('.hero-block-center');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  const hero2 = document.querySelector('.hero-2');
  const hero3 = document.querySelector('.hero-3');

  const hero2Top = hero2.offsetTop;
  const hero2Bottom = hero2Top + hero2.offsetHeight;

  const hero3Top = hero3.offsetTop;
  const hero3Bottom = hero3Top + hero3.offsetHeight;

  // Show hero-3 backgrounds when scrolled past hero-2 by some margin
  if (scrollY + windowHeight > hero2Bottom - hero2.offsetHeight / 3) {
    hero3BgLeft.classList.add('active');
    hero3BgRight.classList.add('active');
  } else {
    hero3BgLeft.classList.remove('active', 'close');
    hero3BgRight.classList.remove('active', 'close');
  }

  // Animate hero-3 blocks between hero3Top and hero3Bottom
  if (scrollY > hero3Top - windowHeight / 2 && scrollY < hero3Bottom - windowHeight / 2) {
    hero3Blocks.classList.add('active');
    heroBlockCenter.classList.add('active');

    hero3Blocks.querySelector('.hero-block-left').classList.add('active');
    hero3Blocks.querySelector('.hero-block-right').classList.add('active');

    hero3Blocks.querySelector('.hero-block-left').classList.remove('exit');
    hero3Blocks.querySelector('.hero-block-right').classList.remove('exit');
    heroBlockCenter.classList.remove('exit');

    hero3BgLeft.classList.remove('close');
    hero3BgRight.classList.remove('close');
  }
  // After hero-3 section, hide blocks with exit animation
  else if (scrollY >= hero3Bottom - windowHeight / 2) {
    hero3Blocks.querySelector('.hero-block-left').classList.remove('active');
    hero3Blocks.querySelector('.hero-block-right').classList.remove('active');
    hero3Blocks.querySelector('.hero-block-left').classList.add('exit');
    hero3Blocks.querySelector('.hero-block-right').classList.add('exit');

    heroBlockCenter.classList.remove('active');
    heroBlockCenter.classList.add('exit');

    hero3BgLeft.classList.remove('active');
    hero3BgRight.classList.remove('active');
    hero3BgLeft.classList.add('close');
    hero3BgRight.classList.add('close');
  }
  // Before hero-3 section
  else {
    hero3Blocks.classList.remove('active');
    heroBlockCenter.classList.remove('active');

    hero3Blocks.querySelector('.hero-block-left').classList.remove('active', 'exit');
    hero3Blocks.querySelector('.hero-block-right').classList.remove('active', 'exit');
    heroBlockCenter.classList.remove('active', 'exit');

    hero3BgLeft.classList.remove('active', 'close');
    hero3BgRight.classList.remove('active', 'close');
  }
});
