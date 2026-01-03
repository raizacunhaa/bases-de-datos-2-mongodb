// Publicaciones del mes de octubre
db.noticias.aggregate([
  {
    $match: {
      fecha_publicacion: { $gte: "2025-10-01", $lt: "2025-11-01" }
    }
  }
])

// Comentarios agrupados por usuario
db.comentarios.aggregate([
  {
    $group: {
      _id: "$usuario",
      totalComentarios: { $sum: 1 }
    }
  }
])

// Comentarios agrupados por red social
db.comentarios.aggregate([
  {
    $group: {
      _id: "$red_social",
      cantidadComentarios: { $sum: 1 }
    }
  }
])

// Clasificación por período (pandemia / en curso)
db.comentarios.aggregate([
  {
    $project: {
      usuario: 1,
      comentario: 1,
      periodo: {
        $cond: [
          {
            $and: [
              { $gte: ["$fecha", "2020-01-01"] },
              { $lte: ["$fecha", "2022-12-31"] }
            ]
          },
          "Realizados en Pandemia",
          "En curso"
        ]
      }
    }
  }
])
