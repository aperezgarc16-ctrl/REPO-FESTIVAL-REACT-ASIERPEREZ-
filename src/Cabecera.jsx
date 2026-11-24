function Cabecera({ titulo, edicion }) {
  return (
    <header className="cabecera">
      <h1>{titulo}</h1>
      <p>{edicion}</p>
    </header>
  );
}

export default Cabecera;