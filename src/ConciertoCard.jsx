
function ConciertoCard({ concierto, onSeleccionar }) {
  const handleClick = () => {
    onSeleccionar(concierto);
  };

  return (
    <article className="tarjeta">
      <h2>{concierto.artista}</h2>
      <p><strong>Género:</strong> {concierto.genero}</p>
      <p><strong>Horario:</strong> {concierto.horario}</p>
      <button type="button" onClick={handleClick}>
        Marcar interés
      </button>
    </article>
  );
}

export default ConciertoCard;