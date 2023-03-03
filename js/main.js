class Animal {
  static animal = '';

  static radios = document.querySelectorAll('input[type="radio"][name="animal"]');


  constructor(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal,) {
    this.nombreComun = nombreComun
    this.nombreCientifico = nombreCientifico
    this.tipoSangre = tipoSangre
    this.dieta = dieta
    this.reproduccion = reproduccion
    this.habitat = habitat
    this.imagen = imagen
    this.claseAnimal = claseAnimal


    document.querySelector('.gallery').addEventListener('click', Animal.clickImage.bind(this))
  }

  static clickImage (e) {

    console.clear();
    if(e.target.matches('img')) {
      // Animal.animal = e.target.value
      console.log(e.target);
      console.log(e.target.dataset.id);
     
     
    }
  }

  static filterAnimal (animal) {
    console.log('Hola', animal);
  }

  static radioButton() {
    Animal.radios.forEach((radio) => {
      radio.addEventListener('change', (e) => {
        console.log(e.target.value);
        Animal.radios.forEach((otherRadio) => {
          if (otherRadio !== radio) {
            otherRadio.checked = true
          }
        })
      })
    })
  }

  paintJustImages(arrGallery) {
    document.getElementById('gallery').innerHTML = arrGallery.map((item) => {
        return `
        <li class="flex">
          <img src="${item.imagen}" alt="${item.nombreComun}" data-id="${item.AnimalId}">
        </li>
      `
    }).join('')
  }
}

const radioButton = new Animal()
// radioButton.radioButton()


class Invertebrados extends Animal {
  constructor( nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal) {
    super(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal,)
  }

  paintAnimal(animal) {
    const paintThisAnimal = gallery[animal]
    document.querySelector('.animal-info').innerHTML = `
      <img src="${paintThisAnimal.imagen}" alt="${paintThisAnimal.nombreComun}">
      <h2> ${paintThisAnimal.nombreComun} </h2>
    `
  }
}

class Mamifero extends Animal {
  constructor(
    nombreComun,
    nombreCientifico,
    tipoSangre,
    dieta,
    reproduccion,
    habitat,
    pelo,
    imagen,
    claseAnimal,
   
  ) {
    super(
      nombreComun,
      nombreCientifico,
      tipoSangre,
      dieta,
      reproduccion,
      habitat,
      imagen,
      claseAnimal,

     
    )
    this.pelo = pelo
  }

  paintAnimal(animal) {
    console.log(animal)
    document.querySelector('.animal-info').innerHTML = `
      <img src="${animal.imagen}" alt="${animal.nombreComun}">
      <h2> ${animal.nombreComun} </h2>
    `
  }
}

class Peces extends Animal {
  constructor( nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, aletas, escamas, imagen, claseAnimal,) {
    super( nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal,)
    this.aletas = aletas
    this.escamas = escamas
  }

  paintAnimal(animal) {
    console.log(animal)
    document.querySelector('.animal-info').innerHTML = `
      <img src="${animal.imagen}" alt="${animal.nombreComun}">
      <h2> ${animal.nombreComun} </h2>
    `
  }
}

class Reptiles extends Animal {
  constructor( nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, escamas, imagen, claseAnimal,
  ) {
    super(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal,)
    this.escamas = escamas
  }

  paintAnimal(animal) {
    console.log(animal)
    document.querySelector('.animal-info').innerHTML = `
      <img src="${animal.imagen}" alt="${animal.nombreComun}">
      <h2> ${animal.nombreComun} </h2>
    `
  }
}

class Anfibio extends Animal {
  constructor( nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal,) {
    super( nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal,)
  }

  paintAnimal(animal) {
    console.log(animal)
    document.querySelector('.animal-info').innerHTML = `
      <img src="${animal.imagen}" alt="${animal.nombreComun}">
      <h2> ${animal.nombreComun} </h2>
    `
  }
}

class Aves extends Animal {
  constructor( nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, plumas, imagen, claseAnimal,) {
    super( nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal,)
    this.plumas = plumas
  }

  paintAnimal(animal) {
    console.log(animal)
    document.querySelector('.animal-info').innerHTML = `
      <img src="${animal.imagen}" alt="${animal.nombreComun}">
      <h2> ${animal.nombreComun} </h2>
    `
  }
}


const gallery = [
  new Invertebrados(
    'Camarones',
    'Caridea',
    'Omnívoro',
    'Ovíparos',
    'Agua',
    'Naranja,blancos',
    'img/camaron.jpeg',
    'invertebrado',
  ),
  new Invertebrados(
    'Langostas',
    'Palinurus elephas',
    'Omnívoro',
    'Ovíparos',
    'Agua',
    'rojos,blancas',
    'img/langosta.jpeg',
    'invertebrado',
  ),
  new Invertebrados(
    'Cangrejos',
    'Brachyura',
    'Omnívoro',
    'Ovíparos',
    'Agua',
    'rojos,blancos,naranjas',
    'img/cangrejo.jpeg',
    'invertebrado',
  ),
  new Mamifero(
    'Caballo doméstico',
    'Equus caballus',
    'Caliente',
    'Herbívoros',
    'Vivíparo',
    'Tierra',
    'Color Café',
    'img/caballo.jpeg',
    'Mamífero',
    'vertebrados',
  ),
  new Mamifero(
    'Ballena',
    'Cetacea',
    'Caliente',
    'Carnívoro',
    'Vivíparo',
    'Agua',
    'No presenta',
    'img/ballena.jpeg',
    'Mamífero',
  ),
  new Mamifero(
    'Delfín',
    'Delphinidae',
    'Caliente',
    'Carnívoro',
    'Vivíparo',
    'Agua',
    'No presenta',
    'img/delfines.jpeg',
    'Mamífero',
  ),
  new Peces(
    'Sardinas',
    'Sardina pilchardus',
    'Caliente',
    'Omnívoro',
    'Ovíparos',
    'Agua',
    'Sí',
    'Gris plateado',
    'img/sardina.jpeg',
    'pez',
  ),
  new Peces(
    'Atún',
    'Thunnus',
    'Caliente',
    'Carnívoro',
    'Ovíparos',
    'Agua',
    'Sí',
    'Gris plateado,verde,amarillas',
    'img/atun.jpeg',
    'pez',
  ),
  new Peces(
    'Pez Sapo',
    'Sphoeroides lobatus',
    'Caliente',
    'Carnívoro',
    'Ovíparos',
    'Agua',
    'Sí',
    'Verde,Cafe,Negro',
    'img/pez sapo.jpeg',
    'pez',
  ),
  new Reptiles(
    'Caimán de Cuvier',
    'Paleosuchus palpebrosus',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Agua y Tierra',
    'Verde Musgo',
    'img/caiman-cuvier.jpeg',
    'reptil',
  ),
  new Reptiles(
    'Anaconda común',
    'Eunectes murinus',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Agua y Tierra',
    'Amarillas y manchas oscuras de color marrón y negro',
    'img/anaconda.jpeg',
    'reptil',
  ),
  new Reptiles(
    'Iguana rinoceronte',
    'Cyclura cornuta',
    'Fría',
    'Herbívoro',
    'Ovíparo',
    'Tierra',
    'Marrón-grisáceo o verde oliva',
    'img/iguana-rinoceronte.jpeg',
    'reptil',
  ),
  new Anfibio(
    'Rana',
    'Anura',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Agua y Tierra',
    'img/rana.jpeg',
    'Anfibio',
  ),
  new Anfibio(
    'Sapo',
    'Bufonidae',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Agua y Tierra',
    'img/sapo.jpeg',
    'Anfibio',
  ),
  new Anfibio(
    'Salamandra',
    'Urodela',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Agua',
    'img/salamandra.jpeg',
    'Anfibio',
  ),
  new Aves(
    'Ganso',
    'Anser',
    'Caliente',
    'Omnívoro',
    'Ovíparo',
    'Tierra',
    'Blancas,Grises,Marrones',
    'img/ganso.jpeg',
    'aves',
  ),
  new Aves(
    'Cuervo',
    'Corvus corax',
    'Caliente',
    'Omnívoro',
    'Ovíparo',
    'Tierra',
    'Negras',
    'img/cuervo.jpeg',
    'aves',
  ),
  new Aves(
    'Búho',
    'Strigiformes',
    'Caliente',
    'Carnívoro',
    'Ovíparo',
    'Tierra',
    'Blancas,Marrones,Gris,Negro',
    'img/buho.jpeg',
    'aves',
  ),
]

function addAnimalId () {
  for (let i = 0; i < gallery.length; i++) {
    gallery[i].AnimalId = i + 1;
  }
}
addAnimalId()

const invertebrado = new Invertebrados()
const mamifero = new Mamifero()
const reptil = new Reptiles()
const ave = new Aves()
const anfibio = new Anfibio()
const pez = new Peces()

const animals = new Animal()
animals.paintJustImages(gallery)

// // esta funcion filtra los animales
function filterAnimals(value) {
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
    } else if (value === 'vertebrado' && item.claseAnimal !== 'invertebrado') {
      return item
    }
  })
  animals.paintJustImages(result)
}