export class Animal {
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
}
