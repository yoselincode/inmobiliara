const propiedadesVenta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial.",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    cost: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    cost: 450000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa estilo mediterranea con piscina",
    src: "https://media.istockphoto.com/id/1319743244/photo/modern-house-with-swimming-pool.jpg?s=2048x2048&w=is&k=20&c=Ma7jV8RJE1_aSY4YcYuUyOPSMRf-263_fOtnq4T84Vg=",
    descripcion: "Esta casa es perfecta si quiere sentirte como en atenas.",
    ubicacion: "AV Springfield, CA 4567",
    habitaciones: 20,
    cost: 45000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa moderna estilo nova italia",
    src: "https://media.istockphoto.com/id/1806482315/photo/architecture-3d-rendering-illustration-of-modern-houses-with-natural-landscape-daytime.jpg?s=2048x2048&w=is&k=20&c=peEbALd7gARRKRa380bhnw8ERFMnyeJgGJD0BQD0aIk=",
    descripcion: "Un hogar maravilloso y acogedor",
    ubicacion: "Av Siempre humilde, CA 7654",
    habitaciones: 3,
    cost: 4500,
    smoke: true,
    pets: true,
  },
];

const propiedadesContainer = document.getElementById("propiedades-venta");

propiedadesVenta.forEach((propiedad) => {
  const card = document.createElement("div");
  card.classList.add("col-md-4", "mb-4");
  card.innerHTML = `
    <div class="card">
      <img src="${
        propiedad.src
      }" class="card-img-top" alt="Imagen de propiedad">
      <div class="card-body">
        <h5 class="card-title">${propiedad.nombre}</h5>
        <p class="card-text">${propiedad.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${
          propiedad.habitaciones
        } Habitaciones </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.cost}</p>
        <p class="text-${propiedad.smoke ? "success" : "danger"}">
          <i class="fas fa-${
            propiedad.smoke ? "smoking" : "smoking-ban"
          }"></i> ${propiedad.smoke ? "Permitido fumar" : "No se permite fumar"}
        </p>
        <p class="text-${propiedad.pets ? "success" : "danger"}">
          <i class="fas fa-${propiedad.pets ? "paw" : "ban"}"></i> ${
    propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"
  }
        </p>
      </div>
    </div>
  `;
  propiedadesContainer.appendChild(card);
});
