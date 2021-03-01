var theData = {headerTitle:"name", weekDay:"monday"}
var theTemplateScript = $("#header").html();
var theTemplate = Handlebars.compile(theTemplateScript);
$(document.body).append(theTemplate(theData));

// Force webpage to top on google form submit
// document.querySelector(".google-form-iframe").addEventListener("load", 
//     function() {
//         window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: 'smooth'
//   });
// });

