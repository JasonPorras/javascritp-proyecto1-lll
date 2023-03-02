class Animal {
  constructor(
    nombreComun,
    nombreCientifico,
    tipoSangre,
    dieta,
    reproduccion,
    habitat,
    imagen,
    claseAnimal,
    clasificacion,
  ) {
    this.nombreComun = nombreComun
    this.nombreCientifico = nombreCientifico
    this.tipoSangre = tipoSangre
    this.dieta = dieta
    this.reproduccion = reproduccion
    this.habitat = habitat
    this.imagen = imagen
    this.claseAnimal = claseAnimal
    this.clasificacion = clasificacion
  }

  paintJustImages(arrGallery) {
    document.getElementById('gallery').innerHTML = arrGallery.map((item) => {
      return `
      <li class="flex">
        <img src="${item.imagen}" alt="${item.nombreComun}">
        <h3>${item.nombreComun}</h3>
      </li>
    `
    }).join('')
  }
}

class Invertebrados extends Animal {
  constructor(
    nombreComun,
    nombreCientifico,
    tipoSangre,
    dieta,
    reproduccion,
    habitat,
    imagen,
    claseAnimal,
    clasificacion,
    idAnimal
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
      clasificacion,
      idAnimal
    )
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
    clasificacion,
    idAnimal
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
      clasificacion,
      idAnimal
    )
    this.pelo = pelo
  }
}

class Peces extends Animal {
  constructor(
    nombreComun,
    nombreCientifico,
    tipoSangre,
    dieta,
    reproduccion,
    habitat,
    aletas,
    escamas,
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
    this.aletas = aletas
    this.escamas = escamas
  }
}

class Reptiles extends Animal {
  constructor(
    nombreComun,
    nombreCientifico,
    tipoSangre,
    dieta,
    reproduccion,
    habitat,
    escamas,
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
    this.escamas = escamas
  }
}

class Anfibio extends Animal {
  constructor(
    nombreComun,
    nombreCientifico,
    tipoSangre,
    dieta,
    reproduccion,
    habitat,
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
  }
}

class Aves extends Animal {
  constructor(
    nombreComun,
    nombreCientifico,
    tipoSangre,
    dieta,
    reproduccion,
    habitat,
    plumas,
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
    this.plumas = plumas
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
  )
]
const animals = new Animal()
animals.paintJustImages(gallery)

// esta funcion filtra los animales
function filterAnimals(value) {
  const result = gallery.filter((item) => {
    if (value === 'todos') {
      return gallery
    }

    if (value === item.claseAnimal.toLowerCase()) {
      return item
    }
    else if (value === item.tipoSangre.toLowerCase()) {
      return item
    }
    else if (value === item.dieta.toLowerCase()) {
      return item
    }
    else if (value === item.reproduccion.toLowerCase()) {
      return item
    }
    else if (value === item.habitat.toLowerCase()) {
      return item
    }
  })
  console.log(result)
  animals.paintJustImages(result)
}

// habilitar, deshabilitar options y enviar value
const radios = document.querySelectorAll('input[type="radio"][name="animal"]')
radios.forEach((radio) => {
  radio.addEventListener('change', (e) => {
    filterAnimals(e.target.value)

    radios.forEach((otherRadio) => {
      if (otherRadio !== radio) {
        otherRadio.checked = false
      }
    })
  })
})
/*
const images = document.querySelectorAll('img');

images.forEach((images, index) => {
  images.addEventListener('click', () => {
    console.log(index)
  });
});
*/

function printThis(position) {
  const infoAnimal = gallery.filter(item => item.idAnimal === position);
console.log(infoAnimal);
}

document.querySelector('.gallery').addEventListener("click", (e) => {
  if (e.target.matches('img')) {
    printThis(e.target.dataset.id)
  }
})
