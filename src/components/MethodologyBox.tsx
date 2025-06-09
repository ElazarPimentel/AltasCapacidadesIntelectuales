import { editorialCriteria } from '@/lib/academic-authors';

export default function MethodologyBox() {
  return (
    <div className="methodology-box">
      <h3>Nuestro enfoque editorial</h3>
      <p>
        Creemos que las ACI no se limitan al CI. El perfil ACI incluye asincronía, intensidad emocional, creatividad, hiperconectividad cognitiva y un deseo profundo de sentido. Por eso nuestro enfoque es multidimensional. Y por eso evitamos la jerga que a veces aleja en lugar de aclarar.
      </p>
      <p>
        La guía editorial que usamos prioriza claridad, precisión y respeto por la experiencia subjetiva. No diagnosticamos: ayudamos a pensar(se). Todo lo que ves acá está escrito para quien se siente fuera de lugar, pero aún no encontró lenguaje para nombrarlo.
      </p>
      <p>
        <strong>Nuestros criterios:</strong>
      </p>
      <ul className="content-list">
        {editorialCriteria.map((criterion, index) => (
          <li key={index}>{criterion}</li>
        ))}
      </ul>
    </div>
  );
} 