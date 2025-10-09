console.log('Hello World!');
function show(){
  document.getElementById('sidebar').style.display ='flex';
}
function hide(){
  document.getElementById('sidebar').style.display ='block';
}
const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('click', darkMode)
function darkMode() {
  document.body.classList.toggle('darkmode');
}
