function check () {
    const answer1 = document.getElementById("funzione-area").value;
    const answer2 = parseInt(document.getElementById("grades-input").value);
    if (answer1 === "4sin(2x)" && answer2 === 30||answer2 === 60) {
        document.getElementById("success-or-retry").style.display = "block";
        document.getElementById("success-or-retry").querySelector("h1").style.color = "green";
        document.getElementById("success-or-retry").querySelector("h1").innerText = "Esatto!";
        document.getElementById("success-or-retry").querySelector("h1").style.visibility = "visible";
    }
    if (answer1 !== "4sin(2x)" ){
        document.getElementById("success-or-retry").style.display = "block";
        document.getElementById("success-or-retry").querySelector("h1").style.color = "red";
        document.getElementById("success-or-retry").querySelector("h1").innerText = "Riprova!";
    }
    if (answer2 !== 30 && answer2 !== 60){
        document.getElementById("success-or-retry").style.display = "block";
        document.getElementById("success-or-retry").querySelector("h1").style.color = "red";
        document.getElementById("success-or-retry").querySelector("h1").innerText = "Riprova!";
    }
} 



