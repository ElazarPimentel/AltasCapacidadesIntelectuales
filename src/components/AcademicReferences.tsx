import { academicAuthors } from '@/lib/academic-authors';

interface AcademicReferencesProps {
  title?: string;
}

export default function AcademicReferences({ title = "Inspirado en" }: AcademicReferencesProps) {
  return (
    <section className="content-section academic-references">
      <h2 id="inspirado-en">{title}&nbsp;<a href="#inspirado-en">🔗</a></h2>
      <dl>
        {academicAuthors.map((author, index) => (
          <div key={index}>
            <dt>
              {author.name}: {author.theory}
            </dt>
            <dd>
              {author.description}
              {author.externalLink && (
                <>
                  {" "}
                  <a 
                    href={author.externalLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Leer más sobre ${author.name}`}
                  >
                    Leer más →
                  </a>
                </>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
} 