document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo-svg');
  if (!logo) return;

  const gears = logo.querySelectorAll('#c .h path, #e');
  let animationTimeout;

  const handleAnimationStart = () => {
    logo.classList.add('animating');
    // Clear any existing timeout to prevent premature removal
    if (animationTimeout) {
      clearTimeout(animationTimeout);
    }
  };

  const handleAnimationEnd = () => {
    // Set a small delay before removing the class to prevent immediate restart
    animationTimeout = setTimeout(() => {
      logo.classList.remove('animating');
    }, 50);
  };

  gears.forEach(gear => {
    gear.addEventListener('animationstart', handleAnimationStart);
    gear.addEventListener('animationend', handleAnimationEnd);
  });
});
