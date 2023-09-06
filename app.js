class Perfume {
  constructor(id, nombre, imagen, descripcion, precio, alt) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = 1;
    this.alt = alt;
  }

  //  sumarPerfume(cantidadPerfume) {
  // this.cantidad += cantidadPerfume;
  // }

  // detalle() {
  //   return `id: ${this.id} - El perfume: ${this.nombre} posee un precio de $${this.precio}. \n`;
  // }

  //   detalleEnCarrito() {
  //     return `id: ${this.id} - perfume: ${this.nombre}- $${this.precio} - cantidad: ${this.cantidad}. \n`;
  //   }
}

class ControlPerfumes {
  constructor() {
    this.listadoPerfumes = [];
  }

  agregar(perfume) {
    this.listadoPerfumes.push(perfume);
  }

  mostrarDOM() {
    let productContainer = document.getElementById("productContainer");

    this.listadoPerfumes.forEach((perfume) => {
      productContainer.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${perfume.imagen}" class="card-img-top" alt="${perfume.alt}">
        <div class="card-body card__body">
          <h5 class="card-title">${perfume.nombre}</h5>
          <p class="card-text">${perfume.descripcion}</p>
          <p class="card-text text__price">$${perfume.precio}</p>
          <button id="agregarAlCarrito-${perfume.id}" class="btn">Agregar al carrito</button>
        </div>
    </div>
      `;
    });

    this.listadoPerfumes.forEach((perfume) => {
      const btnAgregarAlCarrito = document.getElementById(
        `agregarAlCarrito-${perfume.id}`
      );
      btnAgregarAlCarrito.addEventListener("click", () => {
        carrito.agregar(perfume);
        carrito.storage();
        carrito.mostrarDOM();
      });
    });
  }

  // buscar(id) {
  //   return this.listadoPerfumes.find((perfume) => perfume.id == id);
  // }
}

class Carrito {
  constructor() {
    this.listaCarrito = [];
  }

  agregar(perfume) {
    this.listaCarrito.push(perfume);
  }

  storage() {
    let listaCarritoJSON = JSON.stringify(this.listaCarrito);
    localStorage.setItem("listaCarrito", listaCarritoJSON);
  }

  getStorage() {
    let listaCarritoJSON = localStorage.getItem("listaCarrito");
    let NuevalistaCarrito = JSON.parse(listaCarritoJSON);
    let listaAuxiliar = [];

    NuevalistaCarrito.forEach((producto) => {
      const { id, nombre, imagen, descripcion, precio, alt } = producto;
      let nuevoProducto = new Perfume(
        id,
        nombre,
        imagen,
        descripcion,
        precio,
        alt
      );
      listaAuxiliar.push(nuevoProducto);
    });
    this.listaCarrito = listaAuxiliar;
  }

  mostrarDOM() {
    let carritoCont = document.getElementById("carritoCont");
    carritoCont.innerHTML = "";

    this.listaCarrito.forEach((perfume) => {
      carritoCont.innerHTML += `
      <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${perfume.imagen}" class="img-fluid rounded-start" alt="${perfume.alt}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Perfume: ${perfume.nombre}</h5>
            <p class="card-text">${perfume.descripcion}</p>
            <p class="card-text">Cantidad: ${perfume.cantidad}</p>
            <p class="card-text">Precio: ${perfume.precio}</p>
          </div>
        </div>
      </div>
    </div>
      `;
    });
  }
}

//se crearon productos

const perfum1 = new Perfume(
  1,
  "212 Heroes EDT",
  "img/212l.webp",
  "Carolina Herrera",
  66100,
  "Imagen del perfume"
);
const perfum2 = new Perfume(
  2,
  " STRONGER WITH YOU EDT",
  "img/arm.webp",
  "EMPORIO ARMANI",
  58900,
  "Imagen del perfume"
);
const perfum3 = new Perfume(
  3,
  "Gentleman Society EDP",
  "img/gent.webp",
  "Givenchy",
  87000,
  "Imagen del perfume"
);
const perfum4 = new Perfume(
  4,
  "RALPH'S CLUB EDP",
  "img/ralp.webp",
  "Ralph Lauren",
  106900,
  "Imagen del perfume"
);
const perfum5 = new Perfume(
  5,
  "Sauvage Elixir",
  "img/sauvage.webp",
  "Dior",
  102700,
  "Imagen del perfume"
);
const perfum6 = new Perfume(
  6,
  "INVICTUS VICTORY EDP",
  "img/invictus.webp ",
  "Dior",
  118300,
  "Imagen del perfume"
);
const perfum7 = new Perfume(
  7,
  "The Icon Elixir EDP",
  "img/icon.webp ",
  "Antonio Banderas",
  22500,
  "Imagen del perfume"
);
const perfum8 = new Perfume(
  8,
  "ONE MILLION ROYAL EDP",
  "img/onemillion.webp ",
  "Paco Rabanne",
  85150,
  "Imagen del perfume"
);
const perfum9 = new Perfume(
  9,
  "FRESH COUTURE",
  "img/fresh.webp ",
  "Moschino",
  51440,
  "Imagen del perfume"
);

//se crea un arreglo que muestre los productos

//instanciar la lista de productos
const carrito = new Carrito();
const listp = new ControlPerfumes();
carrito.getStorage();
carrito.mostrarDOM();

//agregar perfumes a la lista

listp.agregar(perfum1);
listp.agregar(perfum2);
listp.agregar(perfum3);
listp.agregar(perfum4);
listp.agregar(perfum5);
listp.agregar(perfum6);
listp.agregar(perfum7);
listp.agregar(perfum8);
listp.agregar(perfum9);

listp.mostrarDOM();
