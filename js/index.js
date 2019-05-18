

//Event listener

const btn = document.getElementById("btn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

console.log(displayDate)

