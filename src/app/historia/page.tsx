// src/app/historia/page.tsx
// Historia

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historia de las Altas Capacidades Intelectuales - ACI en Adultos",
  description: "Explora la historia universal y argentina de las Altas Capacidades Intelectuales, y conoce el caso de Benjamín Equiza y la lucha por el reconocimiento de derechos.",
};

export default function HistoriaPage() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Historia de las Altas Capacidades Intelectuales</h1>

        <section className="tests__section">
          <p>La noción de que algunas personas poseen una mente excepcional existe desde hace siglos. En la Grecia clásica, Platón imaginaba una élite de pensadores encargados de guiar a la sociedad. A lo largo del tiempo, diferentes culturas han valorado formas excepcionales de inteligencia, aunque rara vez con una comprensión científica o estructurada. La idea moderna de "inteligencia" empezó a tomar forma con el desarrollo de los primeros tests psicométricos en Europa a fines del siglo XIX.</p>
          <p>Ya en el siglo XX, figuras como Lewis Terman y Leta Hollingworth en Estados Unidos iniciaron estudios sistemáticos sobre niños superdotados, proponiendo enfoques educativos diferenciados y defendiendo la idea de que, con el acompañamiento adecuado, estos niños podían aportar significativamente a la sociedad. Sin embargo, este campo quedó centrado en el ámbito infantil, escolar y masculino, dejando fuera a mujeres, adultos y perfiles no estereotípicos.</p>
          <p>Con el paso del tiempo, surgieron visiones más amplias que incluyeron la creatividad, la sensibilidad emocional, la asincronía del desarrollo y la diversidad de talentos. Aun así, el imaginario social quedó anclado en la figura del "niño genio", y hasta hoy, muchas personas con ACI que no encajaron en ese molde han pasado décadas sin ser reconocidas.</p>
        </section>

        <section className="tests__section">
          <h2>Historia Argentina de las Altas Capacidades Intelectuales</h2>
          <p>En Argentina, la historia de las ACI ha sido una mezcla de invisibilidad institucional y lucha individual. Durante años, niñas y niños con perfiles inusuales de aprendizaje fueron clasificados como desinteresados, desafiantes o inadaptados. No existían programas sistemáticos de detección ni formación docente especializada, lo que llevó a una enorme cantidad de casos perdidos en el aula y patologizados en el consultorio.</p>
          <p>Aunque algunas provincias comenzaron a desarrollar iniciativas aisladas, hasta el día de hoy <strong>no existe una política nacional del Estado argentino</strong> que garantice derechos ni protocolos de acción específicos para personas con ACI. Dado que el sistema educativo argentino está descentralizado, <strong>cada provincia debe definir su política educativa</strong>. Esto significa que <strong>gobernadores, legisladores provinciales y ministros de educación locales</strong> son quienes deben impulsar leyes y medidas para esta población. De lo contrario, la situación queda librada al azar del domicilio.</p>
          <p>La falta de acción estructural ha generado consecuencias profundas: estudiantes que abandonan la escuela por aburrimiento, adultos que desconocen su perfil cognitivo, familias que se enfrentan a diagnósticos erróneos o son culpadas por "malcriar" a niños que simplemente piensan diferente. El Estado sigue sin mirar de frente esta realidad, mientras miles de personas crecen creyendo que el problema es suyo.</p>
        </section>

        <section className="tests__section">
          <h2>La historia de Benjamín</h2>
          <p>Benjamín Equiza tenía ocho años, leía fluidamente, escribía con claridad y resolvía cálculos complejos. Aun así, la Dirección General de Escuelas de la Provincia de Buenos Aires le ordenó repetir de año. No importaba su desempeño: no encajaba en la grilla de edades. El sistema no supo qué hacer con su talento, así que eligió negarlo.</p>
          <p>Ante esta injusticia, su familia impulsó un proyecto de ley que hoy lleva su nombre: la <strong>Ley Benjamín</strong>. Esta propuesta busca garantizar la detección temprana y el abordaje integral de las ACI en todo el sistema educativo bonaerense, desde jardín hasta secundaria, tanto en escuelas públicas como privadas. Es el primer intento legislativo serio de reconocer esta diferencia como parte legítima de la diversidad humana.</p>
          <p>La historia de Benjamín puso en evidencia que la alta capacidad no es solo un tema académico, sino una cuestión de derechos. Que aprender más rápido no debería ser un castigo. Y que la educación no puede seguir pensada solo para el promedio, ignorando a quienes —sin pedirlo— nacieron con otra arquitectura mental.</p>
        </section>
      </div>
    </main>
  );
} 