
class Animal {
  constructor(nombre, edad, img, comentario, sonido) {
    this.nombre = nombre;
    this.edad = edad;
    this.img = img;
    this.comentario = comentario;
    this.sonido = sonido;
  }

  get Nombre() {
    return this.nombre;
  }

  get Edad() {
    return this.edad;
  }

  get Img() {
    return this.img;
  }

  set Comentario(nuevoComentario) {
    this.comentario = nuevoComentario;
  }

  get Sonido() {
    return this.sonido;
  }
  // imprimiendo() {
  //   console.log(`el animal tiene ${this.nombre}, ${this.edad}`);
  // }
}


class Leon extends Animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }

  rugir() {
    return super.Sonido;
  }

}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }

  aullar() {
    return super.Sonido;
  }

}

class Oso extends Animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }

  gruñir() {
    return super.Sonido;
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }

  sissar() {
    return super.Sonido;
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido)
  }

  chillar() {
    return super.Sonido;
  }

}


(async () => {
  let response = await fetch('./animales.json');
  let data = await response.json();
  // console.log('data', data);

  // const animal2 = new Animal('animal', '3a', 'img', 'esto es un comentario', 'esto es un sonido');
  // animal2.imprimiendo();

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
    // selecciones animal:
    // console.log('animalselected', animalSelected);
    // console.log('dataanimalselected', dataAnimalSelected);

    // selecciona edad:
    let ageSelected = ageSelectedElement.value;

    // agrega comentario:
    let commentCreated = commentCreatedElement.value;

    let imgCreated = `assets/imgs/${dataAnimalSelected[0].imagen}`;
    let soundCreated = `assets/sounds/${dataAnimalSelected[0].sonido}`;

    const leon = new Leon(animalSelected, ageSelected, imgCreated, commentCreated, soundCreated);
    const lobo = new Lobo(animalSelected, ageSelected, imgCreated, commentCreated, soundCreated);
    const oso = new Oso(animalSelected, ageSelected, imgCreated, commentCreated, soundCreated);
    const serpiente = new Serpiente(animalSelected, ageSelected, imgCreated, commentCreated, soundCreated);
    const aguila = new Aguila(animalSelected, ageSelected, imgCreated, commentCreated, soundCreated);

    // const allAnimals = [leon, lobo, oso, serpiente, aguila];

    let animalInvestigated = document.createElement('div');
    animalInvestigated.style.display = 'flex';
    animalInvestigated.style.flexDirection = 'column';
    animalInvestigated.style.justifyContent = 'flex-end';
    animalInvestigated.style.placeItems = 'center';
    animalInvestigated.style.height = '18em';
    animalInvestigated.style.padding = '1em';

    let animalInvestigatedImage = document.createElement('img');
    let animalInvestigatedSound = document.createElement('audio');

    let animalSelectedToAdd = animalSelected.toLowerCase();
    // console.log(animalSelectedToAdd) //leon

    switch (animalSelectedToAdd) {
      case 'leon':
        // console.log(leon.Img)
        animalInvestigatedImage.src = leon.img;
        animalInvestigatedImage.toggle = 'modal';
        // data-toggle="modal" 
        // data-target="#exampleModal"
        
        animalInvestigatedImage.style.width = '150px';
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
    animalInvestigated.appendChild(animalInvestigatedImage);
    animalInvestigated.appendChild(animalInvestigatedSound);
    animalsSectionElement.appendChild(animalInvestigated);
  }

  addAnimalBtn.addEventListener('click', addAnimalToTable);













})();



