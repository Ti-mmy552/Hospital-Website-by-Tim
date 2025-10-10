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

function make() {
  let last_name = document.getElementById('last-name').value;
let first_name = document.getElementById('first-name').value;
let full_name = last_name +'  ' + first_name
let reveal = document.getElementById('reveal');
  reveal.textContent = full_name; 
  let e_mail = document.getElementById('email').value;
  let phoneNumber = document.getElementById('number').value;
  let contact = document.getElementById('contact');
  let contact1 = document.getElementById('contact1');
  contact.textContent = e_mail;
  contact1.textContent = phoneNumber;
  let branch = document.getElementById('branch').value;
  let specialist = document.getElementById('specialist').value;
  let branchText = document.getElementById('branchText');
  let speciaty = document.getElementById('speciaty');
  branchText.textContent = branch;
  speciaty.textContent = specialist;
  let doctors = document.getElementById('doctors').value;
  let date = document.getElementById('date').value;
  let time = document.getElementById('time').value;
  let doctorText = document.getElementById('doctorText');
  let dateText = document.getElementById('dateText');
  let timeText = document.getElementById('timeText');
  doctorText.textContent = doctors;
  dateText.textContent = date;
  timeText.textContent = time;
  let visit = document.getElementById('visit').value;
  let yes = document.getElementById('yes').value;
  let no = document.getElementById('no').value;
  let visitText = document.getElementById('visitText');
  let radioText = document.getElementById('radioText');
  visitText.textContent = visit;
  radioText.textContent = yes;
}
function submit() {
  alert('Your Form has been submitted, Pls check your Email');
}
function ensure() {
  alert('Are you sure that the form is correctly filled out? If not Pls do.')
}
function makeSure() {
  alert('Please ensure that the Personal Page is filled out correctly');
}
function realSure() {
  alert('Ensure that Your Personal Information Specialist and Doctors are filled out');
                                     }
