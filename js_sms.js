function ajouterMessage(){
    let bjr = document.createElement("p");
    bjr.textContent = "Bonjour";
    let container = document.querySelector("#container");
    container.append(bjr);
}