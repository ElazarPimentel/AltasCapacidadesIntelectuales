import ProfessionalCard from '@/components/ProfessionalCard';

const professionals = [
  {
    name: "Dra. María García",
    profession: "Psicóloga Especialista en ACI",
    location: "Madrid",
    province: "Madrid",
    type: "Evaluación y Orientación",
    contact: "maria.garcia@example.com"
  },
  {
    name: "Dr. Juan Martínez",
    profession: "Neuropsicólogo",
    location: "Barcelona",
    province: "Barcelona",
    type: "Evaluación Neuropsicológica",
    contact: "juan.martinez@example.com"
  },
  {
    name: "Dra. Ana López",
    profession: "Psicóloga Educativa",
    location: "Valencia",
    province: "Valencia",
    type: "Orientación Educativa",
    contact: "ana.lopez@example.com"
  }
];

export default function Profesionales() {
  return (
    <main className="main-content">
      <div className="container">
        <section className="home__section">
          <h1>Profesionales Especializados</h1>
          
          <p>
            Encuentra aquí profesionales especializados en Altas Capacidades Intelectuales en adultos. 
            Todos los profesionales listados tienen experiencia específica en el área y pueden ayudarte 
            con evaluación, orientación y apoyo.
          </p>

          <div className="professionals-grid">
            {professionals.map((professional, index) => (
              <ProfessionalCard key={index} professional={professional} />
            ))}
          </div>

          <div className="home__section">
            <h2>¿Cómo elegir un profesional?</h2>
            <p>
              Al elegir un profesional para la evaluación o el apoyo, considera los siguientes aspectos:
            </p>
            <ul className="home__list">
              <li>Experiencia específica en ACI en adultos</li>
              <li>Formación y certificaciones relevantes</li>
              <li>Enfoque y metodología de trabajo</li>
              <li>Disponibilidad y ubicación</li>
              <li>Compatibilidad personal</li>
            </ul>
          </div>

          <div className="home__section">
            <h2>Importante</h2>
            <p>
              Esta lista es informativa y no constituye una recomendación oficial. Te recomendamos 
              investigar y contactar directamente con los profesionales para verificar su experiencia 
              y enfoque específico en ACI en adultos.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
} 