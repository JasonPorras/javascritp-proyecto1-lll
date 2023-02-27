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
  ) {
    this.nombreComun = nombreComun
    this.nombreCientifico = nombreCientifico
    this.tipoSangre = tipoSangre
    this.dieta = dieta
    this.reproduccion = reproduccion
    this.habitat = habitat
    this.imagen = imagen
    this.claseAnimal = claseAnimal
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
    'anfibio',
  ),
  new Anfibio(
    'Sapo',
    'Bufonidae',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Agua y Tierra',
    'img/sapo.jpeg',
    'anfibio',
  ),
  new Anfibio(
    'Salamandra',
    'Urodela',
    'Fría',
    'Carnívoro',
    'Ovíparo',
    'Agua',
    'img/salamandra.jpeg',
    'anfibio',
  ),
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
    } else if (value === item.tipoSangre.toLowerCase()) {
      return item
    } else if (value === item.dieta.toLowerCase()) {
      return item
    }
     else if (value === item.reproduccion.toLowerCase()) {
      return item
    } else if (value === item.habitat.toLowerCase()) {
      return item
    }
  })

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


console.log('Hola');
