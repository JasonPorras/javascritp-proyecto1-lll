// # Clase animal // Padre
// 	● Nombre común
//   ● Nombre científico
//   ● Tipo de sangre: Fría / Caliente
//   ● Dieta: Carnívoro / Omnívoro / Herbívoro
//   ● Reproducción: Ovíparo / Vivíparo
//   ● Hábitat: Tierra / Agua / Ambos

//   ● Patas (cantidad)
//   ● Escamas (color)

//   ● Aletas (cantidad)

//   ● Vertebrados
//   ● Invertebrados (3)

class Animal {
  constructor(nombreComun, nombreCientifico, tipoSangre, dieta, reproduccion, habitat) {
    this.nombreComun = nombreComun;
    this.nombreCientifico = nombreCientifico;
    this.tipoSangre = tipoSangre;
    this.dieta = dieta;
    this.reproduccion = reproduccion;
    this.habitat = habitat;
  }
}

class Mamifero extends Animal{
  constructor(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat,pelo){
    super(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat);
    this.pelo = pelo;
 }
}

class Peces extends Animal{
  constructor(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat,aletas){
    super(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat)
    this.aletas = aletas;
 }
}

class Reptiles extends Animal{
  constructor(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat,escamas){
    super(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat)
    this.escamas = escamas;
 }
}

class Anfibio extends Animal{
  constructor(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat,escamas){
    super(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat)
    this.escamas = escamas;
 }
}

class Aves extends Animal{
  constructor(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat,plumas){
    super(nombreComun,nombreCientifico,tipoSangre,dieta,reproduccion,habitat)
    this.plumas = plumas;
 }
}
