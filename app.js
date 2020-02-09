// fetch links and content
let tabLinks = document.querySelectorAll('.tablinks');

let tabContent = document.querySelectorAll('.tabcontent');

// add event listener on clicking tab links
tabLinks.forEach(function(link) {
  link.addEventListener('click', openTabs)
})

function openTabs(link) {
  // now lets fetch the button element of clicked target
  let btnTarget = link.currentTarget;
  let country = btnTarget.dataset.country;
  // fetched the country dataset.

  // now lets remove all the active classes before adding the active class

  // tabcontent
  tabContent.forEach(link => {
    link.classList.remove('active');
  })

  // tablink
   tabLinks.forEach(link => {
    link.classList.remove('active');
  })

  document.querySelector('#' + country).classList.add('active');

  btnTarget.classList.add('active');
}