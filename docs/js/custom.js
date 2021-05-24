// Force webpage to top on google form submit
document.querySelector(".google-form-iframe").addEventListener("load", 
    function() {
        window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

function changeSelect() {
    if(document.getElementById("price_dd").value == "1") {
        document.getElementById("price_div").innerHTML = "$100";
    } else if (document.getElementById("price_dd").value == "2") {
        document.getElementById("price_div").innerHTML = "$2200";
    }
}
