const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const likeButton = document.getElementById('likeButton');

/* Declaring the array of image filenames */

const images = [
    'manaus-arena-da-amazonia.jpg',
    'manaus-encontro-das-aguas-rio-negro-e-rio-solimoes.jpg',
    'manaus-museu-da-amazonia.jpg',
    'manaus-ponte-sobre-o-rio-negro.jpg',
    'manaus-teatro-amazonas.jpg'
];

/* Declaring the alternative text for each image file */
const alts = {
    'manaus-arena-da-amazonia.jpg' : 'Estadio de futebol que foi uma das sedes da copa do mundo de futebol de 2014',
    'manaus-encontro-das-aguas-rio-negro-e-rio-solimoes.jpg' : 'Fenomeno natural que ocorre pela diferença ph e temperatura da água entre os rios',
    'manaus-museu-da-amazonia.jpg' : 'Maior museu a céu aberto do Brasil',
    'manaus-ponte-sobre-o-rio-negro.jpg' : 'Ponte sobre o rio muito acido',
    'manaus-teatro-amazonas.jpg': 'Periodo aureo da borracha trouxe da europa esse teatro colossal'
}


/* Looping through images */

for(const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

// funcao para curtir a imagem
// likeButton.addEventListener('click', function() {
//     if (likeButton.innerHTML === '&#x2661;') {
//         likeButton.innerHTML = '&#x2665;';
//     } else {
//         likeButton.innerHTML = '&#x2661;';
//     }
// });

likeButton.addEventListener('click', function() {
    // Alternando entre classes de coração vazio e coração preenchido
    likeButton.classList.toggle('heart-filled');
});