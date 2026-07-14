function change(){
    document.querySelector('h1').innerHTML = "Profil de Pablo"
    let p = document.querySelectorAll('p')
    p[0].textContent = "Nom: Mugabo"
    p[1].textContent = "Age: 16ans"
    p[2].textContent = "Pays: Rwanda"
}
function important(){
    let titre = document.querySelector('h1')
    let paragraphes = document.querySelectorAll('p')
    paragraphes.forEach(function(p){
        p.classList.toggle("important")
    })
    titre.classList.toggle("important");
}