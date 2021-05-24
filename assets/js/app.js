const navbar = document.querySelector('#navbar');
const navbarCollapse = document.querySelector('#navbarNavAltMarkup');
const links = navbar.querySelectorAll('a');
const navbarCheckbox = document.querySelector('.navbar-checkbox');

const init = () => {
   setUpNavbar();
}

const setUpNavbar = () => {
   for (let link of links) {
      link.addEventListener('click', () => {
         if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
            navbarCheckbox.checked = false;
         }
      })
   }
}

init();