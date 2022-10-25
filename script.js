const toggleButton = document.getElementsByClassName('toggleButton')[0];
const navLinks = document.getElementsByClassName('navLinksWrapper')[0];
const socialMediaLogos = document.getElementsByClassName('socialMediaLogosWrapper')[0];

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  socialMediaLogos.classList.toggle('active');
})