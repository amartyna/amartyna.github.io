require('../index.html');
import styles from './../styles/sass/main.scss';

const projectsInfo = $('.projects_info');
const aboutInfo = $('.about_info');
const contactInfo = $('.contact_info');

const projects = $(".projects");
const about = $(".about");
const contact = $(".contact");

const appPhoto = $(".app_photo");
const sitPhoto = $(".sit_photo");

const stockAppInfo = $('.projects_info-stock_app');
const codersLabInfo = $('.projects_info-coders_lab');

let clicked = true;


projectsInfo.hide();
aboutInfo.hide();
contactInfo.hide();

appPhoto.hide();
sitPhoto.hide();

projects.click(function() {
  aboutInfo.hide();
  contactInfo.hide();
  projectsInfo.fadeIn();

  $('.main_title').text("Projects");

});

about.click(function() {
  projectsInfo.hide();
  contactInfo.hide();
  aboutInfo.fadeIn();

  appPhoto.hide();
  sitPhoto.hide();

  $('.main_title').text("About");
  $('.main_welcome').fadeIn();

});

contact.click(function() {
  aboutInfo.hide();
  projectsInfo.hide();
  contactInfo.fadeIn();

  appPhoto.hide();
  sitPhoto.hide();

  $('.main_title').text("Contact");
  $('.main_welcome').fadeIn();

});

stockAppInfo.click(function() {

  sitPhoto.hide();
  $('.main_welcome').hide();
  appPhoto.fadeIn();

});

codersLabInfo.click(function() {

  appPhoto.hide();
  $('.main_welcome').hide();
  sitPhoto.fadeIn();

});
