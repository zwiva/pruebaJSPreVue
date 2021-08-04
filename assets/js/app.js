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

    //////////////////////////////////
    
    // modal: debe mostrarse(aun no), tener imagen (aun no), tener edad(aun no), tener texto comentario (aun no), tener hr (aun no), tener comentario (aun no);
    let modalBody = document.getElementsByClassName(['modal-body']);

    //////////////////////////////////

    // crea casos para comparar la seleccion con cada instancia, en cada caso asigna el metodo de clase del animal respectivo 
    switch (animalSelectedToAdd) {
      case 'leon':

        const openmodal = () => {

          console.log('edad', leon.edad);
          console.log('comentario', leon.comentario);
          modalBody[0].innerHTML = leon.comentario;
        }

        animalInvestigatedImage.src = leon.img;
        // data-toggle="modal" 
        // data-target="#exampleModal"
        animalInvestigatedImage.style.width = '150px';
        animalInvestigatedImage.onclick = openmodal;
        animalInvestigatedSound.src = leon.rugir();
        animalInvestigatedSound.controls = true;
        animalInvestigatedSound.controlsList = "nodownload";
        animalInvestigatedSound.style.width = '150px';
        console.log(leon);
        break;

      case 'lobo':
        animalInvestigatedImage.src = lobo.img;
        animalInvestigatedImage.style.width = '150px';
        animalInvestigatedSound.src = lobo.aullar();
        animalInvestigatedSound.controls = true;
        animalInvestigatedSound.controlsList = "nodownload";
        animalInvestigatedSound.style.width = '150px';
        console.log(lobo);
        break;

      case 'oso':
        animalInvestigatedImage.src = oso.img;
        animalInvestigatedImage.style.width = '150px';
        animalInvestigatedSound.src = oso.gruñir();
        animalInvestigatedSound.controls = true;
        animalInvestigatedSound.controlsList = "nodownload";
        animalInvestigatedSound.style.width = '150px';
        console.log(oso);
        break;

      case 'serpiente':
        animalInvestigatedImage.src = serpiente.img;
        animalInvestigatedImage.style.width = '150px';
        animalInvestigatedSound.src = serpiente.sissar();
        animalInvestigatedSound.controls = true;
        animalInvestigatedSound.controlsList = "nodownload";
        animalInvestigatedSound.style.width = '150px';
        console.log(serpiente);
        break;

      case 'aguila':
        animalInvestigatedImage.src = aguila.img;
        animalInvestigatedImage.style.width = '150px';
        animalInvestigatedSound.src = aguila.chillar();
        animalInvestigatedSound.controls = true;
        animalInvestigatedSound.controlsList = "nodownload";
        animalInvestigatedSound.style.width = '150px';
        console.log(aguila);
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

  // const modal = document.getElementById('exampleModal');
  // console.log(modal)

})();



