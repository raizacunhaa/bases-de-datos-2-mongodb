use ZoologicoDB

// Habitats
db.habitats.insertMany([
  { _id: "H1", nombre: "Selva Tropical", clima: "Húmedo", tipo: "Bosque" },
  { _id: "H2", nombre: "Desierto", clima: "Seco", tipo: "Árido" }
])

// Zonas
db.zonas.insertMany([
  { _id: "Z1", nombre: "Zona A", ubicacion: "Sector Norte" },
  { _id: "Z2", nombre: "Zona B", ubicacion: "Sector Sur" }
])

// Cuidadores
db.cuidadores.insertMany([
  { _id: "C1", apenom: "Ana Pérez", telefono: "21912345678", zona_id: "Z1" },
  { _id: "C2", apenom: "Luis Gómez", telefono: "21987654321", zona_id: "Z2" }
])

// Asignaciones
db.asignaciones.insertMany([
  { habitat_id: "H1", cuidador_id: "C1" },
  { habitat_id: "H2", cuidador_id: "C2" }
])
