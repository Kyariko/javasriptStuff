//on ajoute un tableau "element" ou on peut selectioner tous les elements html via un index, exemple: element[1].style.backgroundSize = document.querySelector("body").style.backgroundSize
const element= 
[
    document.querySelectorAll("header a"),
     document.querySelector("body"),
      document.querySelectorAll(".FunnyNumbers h1"),
      document.querySelector(".Intro"),
      document.querySelector(".Spotify"),
      document.querySelector(".FullSocials"),
       document.querySelectorAll(".FunnyNumbers p"),
       document.querySelectorAll(".Links div p"),
];
//bool va permettre de creer un "interupteur" pour switcher entre 2 bakgrounds differents grace a un ecouteur d'evenements
let bool = false;
//on ajuste l'image de fond de la div "spotify" pour qu'elle couvre toute la div
element[1].style.backgroundSize = "cover"
element[3].style.backgroundSize = "cover"
//on cree un ecouteur d'evenements pour la section spotify
element[1].addEventListener("click", (event) =>
{
    bool = !bool
    if (bool != true)
    {
        //on cree une boucle "for" pour aller dans la liste retournee par "querySelectorAll" de "element[0]" et lire chaque element, pour ensuite changer les images de fond et la couleur des textes de i element (element[i]) a chaque clic
        for (let i = 0; i < element[0].length; i++)
        {
            element[0][i].style.color = "black"
        }

        for (let i = 0; i < element[2].length; i++)
        {
            element[2][i].style.color = "black"
        }
        for (let i = 0; i < element[6].length; i++)
        {
            element[6][i].style.color = "black"
        }
        element[4].style.color = "white"
        element[5].style.color = "white"
        element[3].style.color = "white"
        element[5].style.backgroundImage = "url('images/splatoon3-pattern-02-3840x2160-1.jpg')"
        element[4].style.backgroundImage = "url('images/splatoon3-pattern-02-3840x2160-1.jpg')"
        element[3].style.backgroundImage = "url('images/splatoon3-pattern-02-3840x2160-1.jpg')"
        element[1].style.backgroundImage = "url('images/background2.png')"
    }
    else
    {
        //On retourne a l'etat d'origine de la page avec ce bloc "else"
        for (let i = 0; i < element[0].length; i++)
        {
            element[0][i].style.color = "white"
        }
        for (let i = 0; i < element[2].length; i++)
        {
            element[2][i].style.color = "white"
        }
        for (let i = 0; i < element[6].length; i++)
        {
            element[6][i].style.color = "white"
        }
        element[4].style.color = "palegreen"
        element[5].style.color = "skyblue"
        element[3].style.color = "black"
        element[5].style.backgroundImage = "url('images/Waves.jpg')"
        element[4].style.backgroundImage = "url('images/greenwaves.jpg')"
        element[3].style.backgroundImage = "url('images/background2.png')"
        element[1].style.backgroundImage = "url('images/splatoon3-pattern-02-3840x2160-1.jpg')" 
    }
});
//on ajoute une classe "seconds" pour l'element h1 (element[2][0]) qui va contenir un timer en secondes (timeSpent)
element[2][0].classList.add("Seconds")
let timeSpent = 0;
//on ajoute une incrementation "Pixels" pour bouger horizontalement les images de fond de 2 div en particulier (element[4] et element[5])
let Pixels = 0;
//on cree une boucle pour le timer que l'on place a la toute fin du code pour lire l'ensemble de script main.js
setInterval(()=>{
    timeSpent = timeSpent + 1
    element[2][0].innerHTML = timeSpent
    element[4].style.backgroundPositionX = `${Pixels}px`
    element[5].style.backgroundPositionX = `${-Pixels}px`
    Pixels = Pixels + 100
},1000);