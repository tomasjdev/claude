// Datos de propiedades — fuente única usada por index, listado y ficha de detalle
const PROPERTIES = [
  {
    id: 1,
    title: "Villa moderna con piscina",
    type: "venta",
    category: "Casa",
    price: 485000,
    location: "Las Lomas, Ciudad",
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    garage: 2,
    year: 2021,
    featured: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Espectacular villa de diseño contemporáneo ubicada en una de las zonas más exclusivas de la ciudad. Cuenta con amplios espacios abiertos, cocina totalmente equipada, piscina infinita y jardín privado, ideal para familias que buscan confort y elegancia."
  },
  {
    id: 2,
    title: "Penthouse con vista panorámica",
    type: "venta",
    category: "Departamento",
    price: 620000,
    location: "Torre Central, Ciudad",
    bedrooms: 3,
    bathrooms: 3,
    area: 210,
    garage: 2,
    year: 2020,
    featured: true,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Penthouse de lujo en el piso 32 con vistas panorámicas de 360°. Terraza privada, acabados de mármol, domótica integral y acceso a amenidades premium: gimnasio, spa y salón de eventos."
  },
  {
    id: 3,
    title: "Casa familiar con jardín amplio",
    type: "venta",
    category: "Casa",
    price: 275000,
    location: "Valle Verde, Ciudad",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    garage: 1,
    year: 2015,
    featured: true,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Hermosa casa familiar en tranquilo vecindario residencial. Jardín amplio, cocina remodelada, sala con chimenea y cercanía a colegios, parques y centros comerciales."
  },
  {
    id: 4,
    title: "Departamento minimalista en el centro",
    type: "renta",
    category: "Departamento",
    price: 1350,
    location: "Centro Histórico, Ciudad",
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    garage: 1,
    year: 2019,
    featured: false,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Departamento de diseño minimalista a pasos de los principales centros de negocio. Ideal para profesionales, cuenta con acabados modernos y excelente iluminación natural."
  },
  {
    id: 5,
    title: "Casa de campo con terreno amplio",
    type: "venta",
    category: "Casa de campo",
    price: 398000,
    location: "Cerros del Sur, Ciudad",
    bedrooms: 5,
    bathrooms: 4,
    area: 410,
    garage: 3,
    year: 2018,
    featured: false,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Amplia propiedad campestre con terreno de más de un cuarto de hectárea, ideal para quienes buscan tranquilidad sin alejarse de la ciudad. Incluye zona de asador, alberca y huerto."
  },
  {
    id: 6,
    title: "Loft industrial renovado",
    type: "renta",
    category: "Loft",
    price: 980,
    location: "Distrito Arte, Ciudad",
    bedrooms: 1,
    bathrooms: 1,
    area: 75,
    garage: 0,
    year: 2017,
    featured: false,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Loft de estilo industrial con techos altos, ladrillo aparente y grandes ventanales. Ubicado en el corazón del distrito de arte, rodeado de galerías, cafés y vida cultural."
  },
  {
    id: 7,
    title: "Residencia de lujo con vista al mar",
    type: "venta",
    category: "Casa",
    price: 1250000,
    location: "Costa Azul, Ciudad",
    bedrooms: 6,
    bathrooms: 5,
    area: 560,
    garage: 4,
    year: 2022,
    featured: true,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Impresionante residencia frente al mar con acabados de altísima gama, cine privado, bodega de vinos y acceso directo a la playa. Una propiedad única para quienes buscan exclusividad absoluta."
  },
  {
    id: 8,
    title: "Departamento acogedor cerca del parque",
    type: "renta",
    category: "Departamento",
    price: 890,
    location: "Parque Norte, Ciudad",
    bedrooms: 2,
    bathrooms: 2,
    area: 88,
    garage: 1,
    year: 2016,
    featured: false,
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Cómodo departamento con vista al parque, balcón privado y estacionamiento techado. A un paso de áreas verdes, transporte público y comercios."
  },
  {
    id: 9,
    title: "Casa adosada estilo contemporáneo",
    type: "venta",
    category: "Casa",
    price: 335000,
    location: "Residencial Pinos, Ciudad",
    bedrooms: 3,
    bathrooms: 3,
    area: 165,
    garage: 2,
    year: 2020,
    featured: false,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Casa adosada de reciente construcción en fraccionamiento privado con seguridad 24/7, áreas comunes y diseño contemporáneo de líneas limpias."
  }
];

function formatPrice(property) {
  const formatted = property.price.toLocaleString("es-MX");
  return property.type === "renta" ? `$${formatted} / mes` : `$${formatted}`;
}

function getProperty(id) {
  return PROPERTIES.find(p => p.id === Number(id));
}
