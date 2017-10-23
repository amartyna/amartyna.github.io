require('../index.html');
import styles from './../styles/sass/main.scss';


const projectsInfo = $('.projects_info');
const aboutInfo = $('.about_info');
const contactInfo = $('.contact_info');

const projects = $(".projects");
const about = $(".about");
const contact = $(".contact");

let clicked = true;

projectsInfo.hide();
aboutInfo.hide();
contactInfo.hide();


projects.click(function() {
  aboutInfo.hide();
  contactInfo.hide();
  projectsInfo.fadeToggle();

  if (clicked) {
    $('.title').text("Projects");
  }

});

about.click(function() {
  projectsInfo.hide();
  contactInfo.hide();
  aboutInfo.fadeToggle();

  if (clicked) {
    $('.title').text("About");
  }

});

contact.click(function() {
  aboutInfo.hide();
  projectsInfo.hide();
  contactInfo.fadeToggle();

  if (clicked) {
    $('.title').text("Contact");
  }


});
