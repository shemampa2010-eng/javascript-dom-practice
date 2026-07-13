function modifier() {

    let paragraphes = document.querySelectorAll("p");

    paragraphes[0].textContent = "Nom : Pablo";

    paragraphes[1].textContent = "Age = 16";
    
    paragraphes[2].textContent = "Pays = Rwanda";

}
function changerStyle(){
    let h1 = document.querySelector('h1');
    h1.style.color = "blue";
    h1.style.fontSize = "50px"
}