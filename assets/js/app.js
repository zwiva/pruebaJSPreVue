"use strict";

import { Leon, Lobo, Oso, Serpiente, Aguila } from './animals.js'

(async () => {
  let response = await fetch('./animales.json');
  let data = await response.json();

  // captura animal:
  const animalSelectedElement = document.getElementById('animal');
  const ageSelectedElement = document.getElementById('edad');
  const commentCreatedElement = document.getElementById('comentarios');

  const previewAnimal = document.getElementById('preview');

  const addAnimalBtn = document.getElementById('btnRegistrar');

  let animalSelected;
  let dataAnimalSelected;

  const animalsSectionElement = document.getElementById('Animales');

  // animalsSectionElement.style.height= "100%";
  // animalsSectionElement.style.margin= "0";
  // animalsSectionElement.style.overflowY = "auto";

  const animalSelectionAndPreview = () => {
    // selecciona y filtra animal
    animalSelected = animalSelectedElement.value;
    dataAnimalSelected = data.animales.filter(animal => animal.name == animalSelected);

    // muestra imagen seleccionado   
    previewAnimal.style.backgroundImage = `url(assets/imgs/${dataAnimalSelected[0].imagen})`;
    previewAnimal.style.backgroundPosition = 'center';

  }
  animalSelectedElement.addEventListener('change', animalSelectionAndPreview);


  const addAnimalToTable = () => {
    // selecciona animal:
    // console.log('animalselected', animalSelected);
    // console.log('dataanimalselected', dataAnimalSelected);

    // selecciona edad:
    let ageSelected = ageSelectedElement.value;

    // agrega comentario:
    let commentCreated = commentCreatedElement.value;

    // agrega imagen
    let imgCreated = `assets/imgs/${dataAnimalSelected[0].imagen}`;

    // agrega sonido
    let soundCreated = `assets/sounds/${dataAnimalSelected[0].sonido}`;

    // crea instancia de cada animal
    const leon = new Leon(animalSelected, ageSelected, imgCreated, commentCreated, soundCreated);
    const lobo = new Lobo(animalSelected, ageSelected, imgCreated, commentCreated, soundCreated);
    const oso = new Oso(animalSelected, ageSelected, imgCreated, commentCreated, soundCreated);
    const serpiente = new Serpiente(animalSelected, ageSelected, imgCreated, commentCreated, soundCreated);
    const aguila = new Aguila(animalSelected, ageSelected, imgCreated, commentCreated, soundCreated);

    // crea contenedor de img y controlaudio
    let animalInvestigated = document.createElement('div');
    animalInvestigated.style.display = 'flex';
    animalInvestigated.style.flexDirection = 'column';
    animalInvestigated.style.justifyContent = 'flex-end';
    animalInvestigated.style.placeItems = 'center';
    animalInvestigated.style.height = '18em';
    animalInvestigated.style.padding = '1em';

    // crea imagen
    let animalInvestigatedImage = document.createElement('img');

    // crea controlaudio
    let animalInvestigatedSound = document.createElement('audio');

    // convierte seleccion a variable comparable en cada caso posible
    let animalSelectedToAdd = animalSelected.toLowerCase();

    // toma y recicla el modal con cada animal
    const fillModal = (animal) => {
      let modalBodyElement = document.getElementById('modalBody');
      if (document.getElementById('modalImg') && document.getElementById('modalAge') && document.getElementById('modalhr') && document.getElementById('modalComment')) {
        modalBodyElement.removeChild(document.getElementById('modalImg'));
        modalBodyElement.removeChild(document.getElementById('modalAge'));
        modalBodyElement.removeChild(document.getElementById('modalhr'));
        modalBodyElement.removeChild(document.getElementById('modalComment'));
      }
      let modalImg = document.createElement('img');
      modalImg.id = 'modalImg';
      let modalAge = document.createElement('p');
      modalAge.id = 'modalAge';
      let modalhr = document.createElement('hr');
      modalhr.id = 'modalhr';
      let modalComment = document.createElement('p');
      modalComment.id = 'modalComment';
      modalImg.src = animal.img;
      modalImg.style.width = '70%';
      modalAge.innerHTML = animal.edad;
      modalComment.innerHTML = animal.comentario;
      modalBodyElement.appendChild(modalImg);
      modalBodyElement.appendChild(modalAge);
      modalBodyElement.appendChild(modalhr);
      modalBodyElement.appendChild(modalComment);
    }
    
    // despliega modal
    const openModal = () => {
      $('#exampleModal').modal('show');
    }

    // crea casos para comparar la seleccion con cada instancia, en cada caso asigna el metodo de clase del animal respectivo 
    switch (animalSelectedToAdd) {
      case 'leon':
        animalInvestigatedImage.src = leon.img;
        animalInvestigatedImage.style.width = '150px';
        animalInvestigatedImage.onclick = function () {
          fillModal(leon);
          openModal();
        };
        animalInvestigatedSound.src = leon.rugir();
        animalInvestigatedSound.controls = true;
        animalInvestigatedSound.controlsList = "nodownload";
        animalInvestigatedSound.style.width = '150px';
        break;

      case 'lobo':
        fillModal(lobo);
        animalInvestigatedImage.src = lobo.img;
        animalInvestigatedImage.style.width = '150px';
        animalInvestigatedImage.onclick = function () {
          fillModal(lobo);
          openModal();
        };
        animalInvestigatedSound.src = lobo.aullar();
        animalInvestigatedSound.controls = true;
        animalInvestigatedSound.controlsList = "nodownload";
        animalInvestigatedSound.style.width = '150px';
        break;

      case 'oso':
        fillModal(oso);
        animalInvestigatedImage.src = oso.img;
        animalInvestigatedImage.style.width = '150px';
        animalInvestigatedImage.onclick = function () {
          fillModal(lobo);
          openModal();
        };
        animalInvestigatedSound.src = oso.gruñir();
        animalInvestigatedSound.controls = true;
        animalInvestigatedSound.controlsList = "nodownload";
        animalInvestigatedSound.style.width = '150px';
        break;

      case 'serpiente':
        fillModal(serpiente);
        animalInvestigatedImage.src = serpiente.img;
        animalInvestigatedImage.style.width = '150px';
        animalInvestigatedImage.onclick = function () {
          fillModal(lobo);
          openModal();
        };
        animalInvestigatedSound.src = serpiente.sissar();
        animalInvestigatedSound.controls = true;
        animalInvestigatedSound.controlsList = "nodownload";
        animalInvestigatedSound.style.width = '150px';
        break;

      case 'aguila':
        fillModal(aguila);
        animalInvestigatedImage.src = aguila.img;
        animalInvestigatedImage.style.width = '150px';
        animalInvestigatedImage.onclick = function () {
          fillModal(lobo);
          openModal();
        };
        animalInvestigatedSound.src = aguila.chillar();
        animalInvestigatedSound.controls = true;
        animalInvestigatedSound.controlsList = "nodownload";
        animalInvestigatedSound.style.width = '150px';
        break;

      default:
        console.log('ups, algo salio mal')
        break;
    }
    // agrega imagen y sonido a cada instancia
    animalInvestigated.appendChild(animalInvestigatedImage);
    animalInvestigated.appendChild(animalInvestigatedSound);

    //agrega elementos img y audio a contenedor
    animalsSectionElement.appendChild(animalInvestigated);
  }

  addAnimalBtn.addEventListener('click', addAnimalToTable);

})();



