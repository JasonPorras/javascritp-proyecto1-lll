class Animal {
  constructor(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat) {
    this.nombreComun = nombreComun;
    this.nombreCientifico = nombreCientifico;
    this.tipoSangre = tipoSangre;
    this.dieta = dieta;
    this.reproduccion = reproduccion;
    this.habitat = habitat;
    this.escamas = escamas;
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
    super(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat, escamas)
    this.aletas = aletas;
  }
}

class Reptiles extends Animal{
  constructor(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat,escamas){
    super(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat, escamas)
  }
}

class Anfibio extends Animal{
  constructor(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat){
    super(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat)
  }
}

class Aves extends Animal{
  constructor(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat,plumas){
    super(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat)
    this.plumas = plumas;
  }
}
