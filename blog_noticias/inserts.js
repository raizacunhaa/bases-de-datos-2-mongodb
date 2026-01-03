use BlogNoticias

// Colección autores
db.autores.insertMany([
  {
    _id: "1",
    apenom: "William Bonner",
    usuario: "wbonner",
    profesion: "Periodista",
    descripcion: "Conductor y editor principal del noticiero Jornal Nacional.",
    red_social: { tipo: "Twitter", cuenta: "@realwbonner" },
    direccion: {
      calle: "Rua das Acácias",
      numero: 145,
      cp: "22250-040",
      ciudad: "Río de Janeiro",
      provincia: "Río de Janeiro"
    },
    telefonos: ["21987654321", "21987651234"]
  }
])

// Colección noticias
db.noticias.insertMany([
  {
    _id: "1",
    titulo: "La Amazonia enfrenta nuevos desafíos ambientales",
    cuerpo: "Investigaciones recientes muestran un aumento en la deforestación.",
    fecha_publicacion: "2025-09-20",
    autor_id: "1",
    tags: ["medio ambiente", "amazonia"]
  }
])

// Colección comentarios
db.comentarios.insertMany([
  {
    _id: "1",
    noticia_id: "1",
    usuario: "mariacosta",
    red_social: "Instagram",
    comentario: "Preocupante lo que sucede con la Amazonia.",
    fecha: "2025-09-22",
    provincia: "Amazonas"
  }
])
