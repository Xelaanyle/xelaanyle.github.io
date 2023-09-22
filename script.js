// Permet au menu des réseaux de devenir un [display:None]

function toggleIconVisibility() {
  var iconlist = document.getElementById("iconlist");
  iconlist.style.display = "none";
}

var circle = document.querySelector(".circle");
circle.addEventListener("click", toggleIconVisibility);

// Réglage du temps d'apparition du menu des réseaux sur le flanc gauche de la page

window.addEventListener('load', function () {
  var header = document.querySelector('.header');
  header.classList.add('header-appear');

  setTimeout(function () {
    var iconList = document.querySelector('.icon');
    iconList.classList.add('icon-appear');
  }, 5000); // 5 secondes en millisecondes
});

// Affichage de la validation du formulaire via un POP-UP

function openPopup() {
  window.open('http://localhost/traitement.php', '_blank', 'width=900,height=180');

  var myForm = document.getElementById('myForm');
    myForm.reset();

  return false;
}

// Bloc a modifié pour correspondre au fichier HTML

let menu = document.querySelector('#burger');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-menu');
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
  };
  