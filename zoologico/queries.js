// 1. Listar todos los habitats
db.habitats.find()

// 2. Cuidadores por zona
db.cuidadores.aggregate([
  {
    $lookup: {
      from: "zonas",
      localField: "zona_id",
      foreignField: "_id",
      as: "zona"
    }
  },
  { $unwind: "$zona" },
  {
    $project: {
      apenom: 1,
      telefono: 1,
      "zona.nombre": 1
    }
  }
])

// 3. Habitat con cuidador asignado
db.asignaciones.aggregate([
  {
    $lookup: {
      from: "habitats",
      localField: "habitat_id",
      foreignField: "_id",
      as: "habitat"
    }
  },
  { $unwind: "$habitat" },
  {
    $lookup: {
      from: "cuidadores",
      localField: "cuidador_id",
      foreignField: "_id",
      as: "cuidador"
    }
  },
  { $unwind: "$cuidador" },
  {
    $project: {
      "habitat.nombre": 1,
      "cuidador.apenom": 1
    }
  }
])

// 4. Contar cuidadores por zona
db.cuidadores.aggregate([
  {
    $group: {
      _id: "$zona_id",
      totalCuidadores: { $sum: 1 }
    }
  }
])
