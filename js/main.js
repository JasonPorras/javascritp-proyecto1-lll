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
        <li class="flex">
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
    <h2>Nombre Común: ${animal.nombreComun} </h2>
    <h3>Nombre Cientifico: ${animal.nombreCientifico}</h3>
    <p>Clase Animal: ${animal.claseAnimal}</p>
    <p>Hatitat: ${animal.habitat}</p>
    <p>Tipo de Sangre: ${animal.tipoSangre}</p>
    <p>Reproduccion: ${animal.reproduccion}</p>
    <p>Dieta: ${animal.dieta}</p>
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
    <p>Color: ${animal.color}</p>
    <p>proteccion: ${animal.proteccion}</p>
    <p>patas: ${animal.patas}</p>
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

  static paintAnimal(animal) {
    document.querySelector('.info2').innerHTML = `
      <p>Pelo: ${animal.pelo}</p>
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
    <p>Escamas: ${animal.escamas}</p>
    <p>Aletas: ${animal.aletas}</p>
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
    <p>Escamas: ${animal.escamas}</p>
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
      <p>patas: ${animal.patas}</p> `

  }
}

class Aves extends Animal {
  constructor(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, plumas, imagen, claseAnimal,) {
    super(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen, claseAnimal,)
    this.plumas = plumas
  }

  static paintAnimal(animal) {
    document.querySelector('.info2').innerHTML = `
      <p>Alas: ${animal.plumas}</p>
    `
  }
}

//claseAnimal,imagen,nombreComun,nombreCientifico,dieta,reproduccion,habitat,proteccion,patas,color


const gallery = [
  new Invertebrados(
    'Camarones',
    'Caridea',
    'No tiene',
    'Omnívoro',
    'Ovíparo',
    'Agua',
    'img/camaron.jpeg',
    'Invertebrado',
    'Blanco, amarillo y rosa o  marrón, rojo y verde',
    'Exoesqueleto',
    '10 patas',
  ),
  new Invertebrados(
    'Langostas',
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
    'Cangrejos',
    'Brachyura',
    'Fría',
    'Omnívoro',
    'Ovíparo',
    'Agua',
    'img/cangrejo.jpeg',
    'invertebrado',
    'Marrones, rojizos, verdes o azules',
    'Exoesqueleto',
    '10 patas',
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
    'Ovíparo',
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
    'Ovíparo',
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
    'Ovíparo',
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
    '4'
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
    '4',
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
    '4',
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

console.log(gallery)
Animal.paintJustImages(gallery)