import { useState } from 'react';
import Cabecera from './Cabecera';
import ConciertoCard from './ConciertoCard';
import './App.css';

function App() {
  const [concierto, setConcierto] = useState({
    artista: 'Los Sintéticos del Norte',
    genero: 'Synth-Pop / Indie',
    horario: '22:30 - Escenario Principal'
  });

  const [mensaje, setMensaje] = useState('');

  const manejarSeleccion = (item) => {
    const texto = `Interés marcado en: ${item.artista} (${item.horario})`;
    setMensaje(texto);
    console.log(texto);
  };

  const cambiarArtista = () => {
    setConcierto((prev) =>
      prev.artista === 'Los Sintéticos del Norte'
        ? {
            artista: 'Cumbia del Ebro',
            genero: 'Cumbia Electrónica',
            horario: '00:15 - Escenario Río'
          }
        : {
            artista: 'Los Sintéticos del Norte',
            genero: 'Synth-Pop / Indie',
            horario: '22:30 - Escenario Principal'
          }
    );
  };

  return (
    <main className="contenedor">
      <Cabecera
        titulo="Festival React"
        edicion="Primer Cartel · Datos Ficticios"
      />

      <ConciertoCard
        concierto={concierto}
        onSeleccionar={manejarSeleccion}
      />

      <div className="acciones">
        <button type="button" onClick={cambiarArtista}>
          Cambiar artista
        </button>
      </div>

      {mensaje && <p className="estado">{mensaje}</p>}
    </main>
  );
}

export default App;