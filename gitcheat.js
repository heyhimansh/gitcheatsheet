function infofunc(e, info) {
    var i, content, links;
    content = document.getElementsByClassName("demo2");
    for (i = 0; i < content.length; i++) {
       content[i].style.display = "none";
    }
    links = document.getElementsByClassName("demo");
    for (i = 0; i < links.length; i++) {
       links[i].className = links[i].className.replace(" active", "");
    }
    document.getElementById(info).style.display = "block";
    e.currentTarget.className += " active";
 }
 document.getElementById("current").click();


 
const toggleButton = document.querySelector('.dark-light');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});