function Interprete({ nombre, foto, esNota10, children }) {
  return (
    <div className="card flex flex-col">
      <img src={foto} alt={nombre} className="w-full rounded mb-3 " />
      <div className="flex-1">
        <h2 className={`"heading-h2 text-[var(--color-secondary)] mb-1" ${esNota10 ? 'text-red-500' : ''}`}>{nombre}</h2>
        <p className="text-medium text-[var(--color-grey-2)]">{children}</p>
      </div>
    </div>
  );
}

export default Interprete;


