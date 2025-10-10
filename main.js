console.log('Hello World!');
function show(){
  document.getElementById('sidebar').style.display ='flex';
}
function hide(){
  document.getElementById('sidebar').style.display ='block';
}
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { // Corrected typo
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  
  rootMargin:"0px 0px -400px 400px"
});

sections.forEach((section) => {
  observer.observe(section);
});
const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('click', darkMode)
function darkMode() {
  document.body.classList.toggle('darkmode');
}
setTimeout(() => {
  document.querySelector('.loader-background').style.display = 'none';
}, 3000);
