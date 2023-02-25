class Animal {
  constructor(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat, imagen) {
    this.nombreComun = nombreComun;
    this.nombreCientifico = nombreCientifico;
    this.tipoSangre = tipoSangre;
    this.dieta = dieta;
    this.reproduccion = reproduccion;
    this.habitat = habitat;
    this.imagen = imagen;
  }

  paint(d) {
    document.getElementById('gallery').innerHTML = d.map(item => {
      return `
        <li class="flex">
          <img src="${item.imagen}" alt="${item.nombreComun}">
          <h3>${item.nombreComun}</h3>
        </li>
      `
    }).join('')
  }
}


class Mamifero extends Animal{
  constructor(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat,pelo){
    super(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat);
    this.pelo = pelo;
  }
}

class Peces extends Animal{
  constructor(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat,aletas, escamas){
    super(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat)
    this.aletas = aletas;
    this.escamas = escamas;
  }
}

class Reptiles extends Animal{
  constructor(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat,escamas, imagen){
    super(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat, imagen)
    this.escamas = escamas;
  }

  
}

class Anfibio extends Animal{
  constructor(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat, imagen){
    super(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat, imagen)
  }
}

class Aves extends Animal{
  constructor(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat,plumas){
    super(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat)
    this.plumas = plumas;
  }
}

const gallery = [
  new Reptiles('Caimán de Cuvier', 'Paleosuchus palpebrosus', 'Fría', 'Carnívoro', 'Ovíparo', 'Agua y Tierra', 'Verde Musgo', 'img/caiman-cuvier.jpeg'),
  new Reptiles('Anaconda común', 'Eunectes murinus', 'Fría', 'Carnívoro', 'Ovíparo', 'Agua y Tierra', 'Amarillas y manchas oscuras de color marrón y negro', 'img/anaconda.jpeg'),
  new Reptiles('Iguana rinoceronte', 'Cyclura cornuta', 'Fría', 'Herbívoro', 'Ovíparo', 'Tierra', 'Marrón-grisáceo o verde oliva', 'img/iguana-rinoceronte.jpeg'),
  new Anfibio('Rana', 'Anura', 'Fría', 'Carnívoro', 'Ovíparo', 'Agua y Tierra', 'img/rana.jpeg'),
  new Anfibio('Sapo', 'Bufonidae', 'Fría', 'Carnívoro', 'Ovíparo', 'Agua y Tierra', 'img/sapo.jpeg'),
  new Anfibio('Salamandra', 'Urodela', 'Fría', 'Carnívoro', 'Ovíparo', 'Agua', 'img/salamandra.jpeg'),
]
const animals = new Animal()
animals.paint(gallery)

