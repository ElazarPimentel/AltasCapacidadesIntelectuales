interface LastUpdatedProps {
  date?: string;
  frequency?: string;
}

export default function LastUpdated({ 
  date = "9 de junio de 2025", 
  frequency = "semanalmente" 
}: LastUpdatedProps) {
  return (
    <div className="last-updated">
      Actualización más reciente: {date} · <span className="frequency">Sitio actualizado {frequency}</span>
    </div>
  );
} 