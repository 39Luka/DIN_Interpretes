function Interprete({ nombre, foto, esNota10, children }) {
  return (
    <article className="card flex flex-col">
      <figure className="mb-3">
        <img src={foto} alt={nombre} className="w-full rounded" />
        <figcaption className="text-center mt-2">
          {nombre}
        </figcaption>
      </figure>
      <main className="flex-1">
        <h2 className={`heading-h2 mb-1 ${esNota10 ? 'text-red-500' : 'text-[var(--color-secondary)]'}`}>{nombre}</h2>
        <p className="text-medium text-[var(--color-grey-2)]">{children}</p>
      </main>
    </article>
  );
}

export default Interprete;


