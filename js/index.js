//added an Event
//onload and onunload events triggered when user enters or leaves the page
//used to check visitor's browser type and version


function checkCookies(){
    var text = "";
    if (navigator.cookieEnabled == true){
        text = "Cookies are emabled.";
    } else {
        text = "Cookies are not enabled.";
    }
    document.getElementById("demo").innerHTML = text;
}

console.log(checkCookies)

//Event listener

const btn = document.getElementById("btn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

console.log(displayDate)

const d = new Date();
d.setFullYear(2019);
document.getElementById("copyright").innerHTML = d;

console.log(d);