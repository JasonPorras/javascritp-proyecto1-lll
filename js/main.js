class Animal {

  constructor(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal,) {
    this.nombreComun = nombreComun
    this.nombreCientifico = nombreCientifico
    this.tipoSangre = tipoSangre
    this.dieta = dieta
    this.reproduccion = reproduccion
    this.habitat = habitat
    this.imagen = imagen
    this.claseAnimal = claseAnimal


    document.querySelector('.container').addEventListener('click', Animal.clickEvents)
  }

  static paintJustImages(arrGallery) {
    Animal.addAnimalId()

    document.getElementById('gallery').innerHTML = arrGallery.map((item) => {
      return `
      
        <li>
          <img src="${item.imagen}" alt="${item.nombreComun}" data-id="${item.idAnimal}">
        </li>
     
      `
    }).join('')
  }

  static openCard() {
    document.querySelector('.card').classList.toggle('show-card');

    document.querySelector('#btn-close').addEventListener('click', () => {
      document.querySelector('.card').classList.remove('show-card')
    })
  }

  static animalInfo(idImage) {
    const result = gallery.filter(item => idImage === item.idAnimal);
    Animal.paintAnimal(result[0])
    const { claseAnimal } = result[0];

    const animalClasses = {
      'Mamífero': Mamifero,
      'pez': Peces,
      'reptil': Reptiles,
      'aves': Aves,
      'Anfibio': Anfibio,
      'Invertebrado': Invertebrados,
    }

    if (animalClasses[claseAnimal]) {
      animalClasses[claseAnimal].paintAnimal(result[0]);
    }
  }

  static clickEvents(e) {
    // console.clear();

    if (e.target.matches('img')) {
      Animal.animalInfo(e.target.dataset.id)
      Animal.openCard()
      console.log(e.target);
    }

    if (e.target.matches('input[type="radio"]')) {
      Animal.filterAnimal(e.target.value)
    }

  }

  static addAnimalId() {
    for (let i = 0; i < gallery.length; i++) {
      gallery[i].idAnimal = String(i + 1);
    }

  }

  static filterAnimal(value) {
    const result = gallery.filter((item) => {
      if (value === 'todos') {
        return gallery
      }

      if (value === item.claseAnimal.toLowerCase()) {
        return item
      } else if (value === item.tipoSangre.toLowerCase()) {
        return item
      } else if (value === item.dieta.toLowerCase()) {
        return item
      } else if (value === item.reproduccion.toLowerCase()) {
        return item
      } else if (value === item.habitat.toLowerCase()) {
        return item
      } else if (value === 'vertebrado' && item.claseAnimal !== 'Invertebrado') {
        return item
      }
    })
    Animal.paintJustImages(result)
  }

  static paintAnimal(animal) {
    document.querySelector('.info1').innerHTML = `
    <img src="${animal.imagen}" alt="${animal.nombreComun}">
    <h2>Nombre Común: <span>${animal.nombreComun}</span></h2>
    <h2>Nombre Cientifico: <span>${animal.nombreCientifico}</span></h2>
    <h2>Clase Animal: <span>${animal.claseAnimal}</span></h2>
    <h2>Hatitat: <span>${animal.habitat}</span></h2>
    <h2>Tipo de Sangre: <span>${animal.tipoSangre}</span></h2>
    <h2>Reproduccion: <span>${animal.reproduccion}</span></h2>
    <h2>Dieta: <span>${animal.dieta}</span></h2>
  `
  }
}

class Invertebrados extends Animal {
  constructor(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal, color, proteccion, patas) {
    super(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal,)
    this.color = color
    this.proteccion = proteccion
    this.patas = patas

  }
  static paintAnimal(animal) {
    document.querySelector('.info2').innerHTML = `
    <h2>Color: <span>${animal.color}</span></h2>
    <h2>Proteccion: <span>${animal.proteccion}</span></h2>
    <h2>Patas: <span>${animal.patas}</span></h2>
    `
  }
}

class Mamifero extends Animal {
  constructor( nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, pelo, imagen, claseAnimal,) {
    super( nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal,)
    this.pelo = pelo
  }

  static paintAnimal(animal) {
    document.querySelector('.info2').innerHTML = `
      <h2>Pelo: <span>${animal.pelo}</span></h2>
    `
  }
}

class Peces extends Animal {
  constructor(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, aletas, escamas, imagen, claseAnimal,) {
    super(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal,)
    this.aletas = aletas
    this.escamas = escamas
  }

  static paintAnimal(animal) {
    document.querySelector('.info2').innerHTML = `
    <h2>Escamas: <span>${animal.escamas}</span></h2>
    <h2>Aletas: <span>${animal.aletas}</span></h2>
  `
  }
}

class Reptiles extends Animal {
  constructor(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, escamas, imagen, claseAnimal,
  ) {
    super(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal,)
    this.escamas = escamas
  }

  static paintAnimal(animal) {
    document.querySelector('.info2').innerHTML = `
    <h2>Escamas: <span>${animal.escamas}</span></h2>
  `
  }
}

class Anfibio extends Animal {
  constructor(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal, patas) {
    super(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal,)
    this.patas = patas
  }

  static paintAnimal(animal) {

    document.querySelector('.info2').innerHTML = `
      <h2>Patas: <span>${animal.patas}</span></h2> `

  }
}

class Aves extends Animal {
  constructor(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, plumas, imagen, claseAnimal,) {
    super(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal,)
    this.plumas = plumas
  }

  static paintAnimal(animal) {
    document.querySelector('.info2').innerHTML = `
      <h2>Alas: <span>${animal.plumas}</span></h2>
    `
  }
}

const gallery = [
  new Invertebrados(
    'Abeja',
    'Apis mellifera',
    'Fría',
    'Herbívoro',
    'Ovíparo',
    'Aire',
    'img/abeja.jpg',
    'Invertebrado',
    'Rayas amarillas y negras en su cuerpo',
    'Exoesqueleto',
    '6',
  ),
  new Invertebrados(
    'Camarón',
    'Caridea',
    'Fría',
    'Omnívoro',
    'Ovíparo',
    'Agua',
    'img/camaron.jpeg',
    'Invertebrado',
    'Blanco y rosa o marrón y rojo ',
    'Exoesqueleto',
    '10 patas',
  ),

  new Invertebrados(
    'Langosta',
    'Palinurus elephas',
    'Fría',
    'Omnívoro',
    'Ovíparo',
    'Agua',
    'img/langosta.jpeg',
    'Invertebrado',
    'Marrones, rojizos, verdes o azules',
    'Exoesqueleto',
    '10 patas',
  ),

  new Invertebrados(
    'Cangrejo',
    'Brachyura',
    'Fría',
    'Omnívoro',
    'Ovíparo',
    'Agua',
    'img/cangrejo.jpeg',
    'Invertebrado',
    'Marrones, rojizos, verdes o azules',
    'Exoesqueleto',
    '10 patas',
  ),

  new Mamifero(
    'Ballena beluga',
    'Delphinapterus leucas',
    'Caliente',
    'Carnívoro',
    'Vivíparo',
    'Agua',
    'No.(Piel blanca o gris claro)',
    'img/ballena-beluga.jpeg',
    'Mamífero',
  ),

  new Mamifero(
    'Coala',
    'Phascolarctos cinereus',
    'Caliente',
    'Herbívoro',
    'Vivíparo',
    'Tierra',
    'Color gris-plateado',
    'img/coala.jpeg',
    'Mamífero',
  ),

  new Mamifero(
    'Panda rojo',
    'Ailurus fulgens',
    'Caliente',
    'Omnívoro',
    'Vivíparo',
    'Tierra',
    'Color rojo,amarillo,blanco y negro',
    'img/panda-rojo.jpeg',
    'Mamífero',
  ),

  new Peces(
    'Caballito de mar',
    'Hippocampus',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Agua',
    '1',
    'Color amarillas, naranjas, rojas, rosas, verdes y marrones',
    'img/caballito.jpeg',
    'pez',
  ),

  new Peces(
    'Pez payaso',
    'Amphiprioninae',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Agua',
    '5',
    'Color blancas y anaranjadas.',
    'img/pez-payaso.jpeg',
    'pez',
  ),

  new Peces(
    'Pez cirujano',
    'Acanthuridae',
    'Fría',
    'Herbívoro',
    'Ovíparo',
    'Agua',
    '6',
    'Color azul marino, amarillo y negro',
    'img/cirujano-azul.jpeg',
    'pez',
  ),

  new Reptiles(
    'Dragon de komodo',
    'Varanus komodoensis',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Tierra',
    'Color gris sólido a marrón rojizo',
    'img/dragon-komodo.jpeg',
    'reptil',
  ),

  new Reptiles(
    'Tortuga marina verde',
    'Chelonia mydas',
    'Fría',
    'Herbívoro',
    'Ovíparo',
    'Agua',
    'Color marrón u oliva.',
    'img/t-verde.jpeg',
    'reptil',
  ),

  new Reptiles(
    'Lagartija cornuda',
    'Phrynosoma coronatum',
    'Fría',
    'Omnívoro',
    'Ovíparo',
    'Tierra',
    'Color marrón o grisácea',
    'img/lagartija.jpeg',
    'reptil',
  ),

  new Anfibio(
    'Rana arbórea de ojos rojos',
    'Agalychnis callidryas',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Tierra',
    'img/rana.jpeg',
    'Anfibio',
    '4'
  ),

  new Anfibio(
    'Ajolote mexicano',
    'Ambystoma mexicanum',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Agua',
    'img/ajolote.jpeg',
    'Anfibio',
    '4',
  ),

  new Anfibio(
    'Sapo común',
    'Bufo bufo',
    'Fría',
    'Omnívoro',
    'Ovíparo',
    'Ambos',
    'img/sapo.jpeg',
    'Anfibio',
    '4',
  ),

  new Aves(
    'Águila calva',
    'Haliaeetus leucocéphalus',
    'Caliente',
    'Carnívoro',
    'Ovíparo',
    'Tierra',
    'Color blancas y marrón oscuro',
    'img/aguila.jpeg',
    'aves',
  ),

  new Aves(
    'Cisne chico',
    'Cygnus columbianus',
    'Caliente',
    'Omnívoro',
    'Ovíparo',
    'Agua',
    'Color blancas y marrón',
    'img/cisne.jpeg',
    'aves',
  ),

  new Aves(
    'Flamenco rosa',
    'Phoenicopterus roseus',
    'Caliente',
    'Omnívoro',
    'Ovíparo',
    'Ambos',
    'Color rosa',
    'img/flamenco.jpeg',
    'aves',
  ),
]

console.log(gallery)
Animal.paintJustImages(gallery)