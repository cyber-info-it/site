var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        console.log("funziona");
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        } else {
        dropdownContent.style.display = "block";
        }
    });
    var j = 0;
    var txt = document.getElementById("titolo").innerText; /* The text */
    var speed = 250; 

    function typeWriter() {
    
    if (j < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(j);
            j++;
            setTimeout(typeWriter, speed);
        }
        
    }    
}