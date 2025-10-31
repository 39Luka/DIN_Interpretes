import Contenedor from "./Contenedor.jsx";
import Interprete from "./InterpretePeli10.jsx";
import {peliculas} from "./data/peliculas.jsx"

function App() {

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="heading-h1 text-[var(--color-primary)] text-center">
        Intérpretes
      </h1>
      <p className="text-medium text-[var(--color-grey-3)] text-center">
        Listado de intérpretes disponibles:
      </p>

        <Contenedor>
     {/*    {
          peliculas.map((pelicula) =>
            pelicula.actores.map((actor, index) =>
              <Interprete
                key={index}
                nombre={actor.nombre}
                foto={actor.imagen}
              >
                {actor.biografia}
              </Interprete>
            )

          )
        } */}

        {
          peliculas
          .filter(pelicula => pelicula.clasificacion === "Drama")
          .map((pelicula) =>
            pelicula.actores.map((actor, index) =>
              <Interprete
                key={index}
                nombre={actor.nombre}
                foto={actor.imagen}
                esNota10={pelicula.nota === 10}
              >
                {actor.biografia}
              </Interprete>
            )

          )
        }



        
        </Contenedor>
      </div>
   
  );
}

export default App;
