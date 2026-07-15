let bouton = document.querySelector("#bouton");

bouton.addEventListener("click", function(){
    let input = document.getElementById("prenom")
    let prenom = input.value
    document.getElementById("titre").innerHTML = "Bonjour " + prenom + " !"
});