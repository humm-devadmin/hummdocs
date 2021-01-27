// Force webpage to top on google form submit
document.querySelector(".google-form-iframe").addEventListener("load", 
    function() {
        window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});