import Contenedor from "./Contenedor.jsx";
import Interprete from "./Interprete.jsx";

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
          <Interprete
            nombre="Marlon Brando"
            foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png"
          >
            Marlon Brando fue un influyente actor estadounidense...
          </Interprete>

          <Interprete
            nombre="Al Pacino"
            foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg"
          >
            Al Pacino es un actor y director de cine estadounidense...
          </Interprete>

          <Interprete
            nombre="Marlon Brando"
            foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png"
          >
            Marlon Brando fue un influyente actor estadounidense...
          </Interprete>

          <Interprete
            nombre="Al Pacino"
            foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg"
          >
            Al Pacino es un actor y director de cine estadounidense...
          </Interprete>

          <Interprete
            nombre="Marlon Brando"
            foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png"
          >
            Marlon Brando fue un influyente actor estadounidense...
          </Interprete>

          <Interprete
            nombre="Al Pacino"
            foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg"
          >
            Al Pacino es un actor y director de cine estadounidense...
          </Interprete>

          <Interprete
            nombre="Marlon Brando"
            foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png"
          >
            Marlon Brando fue un influyente actor estadounidense...
          </Interprete>

          <Interprete
            nombre="Al Pacino"
            foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg"
          >
            Al Pacino es un actor y director de cine estadounidense...
          </Interprete>
        </Contenedor>
      </div>
   
  );
}

export default App;
