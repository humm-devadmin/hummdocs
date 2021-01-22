// Force webpage to top on form submit
document.querySelector("iframe").addEventListener("load", 
    function() {
        window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});