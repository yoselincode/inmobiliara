const propiedadesAlquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa familiar alta vista",
    src: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
    descripcion: "Una elegante casa para vivir el sueño americano.",
    ubicacion: "Av Velo horizonte, CA 911212",
    habitaciones: 2,
    costo: 20200,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa Futurista estilo romantico",
    src: "https://media.istockphoto.com/id/1151832961/photo/evening-view-of-a-modern-large-house-with-swimming-pool.jpg?s=2048x2048&w=is&k=20&c=eQxbH-Wra4THhKRQLwYFjic3XNPjPIpMXcqBbfFzntQ=",
    descripcion:
      "Este es un perfecto lugar para pasar tiempo de calidad con tus seres queridos.",
    ubicacion: "Chica linda, CA Norte 1122",
    habitaciones: 7,
    costo: 220000,
    smoke: true,
    pets: true,
  },
];

const propiedadesContainer = document.getElementById("propiedades-alquiler");

propiedadesAlquiler.forEach((propiedad) => {
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
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
          <p class="text-${propiedad.smoke ? "success" : "danger"}">
            <i class="fas fa-${
              propiedad.smoke ? "smoking" : "smoking-ban"
            }"></i> ${
    propiedad.smoke ? "Permitido fumar" : "No se permite fumar"
  }
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
