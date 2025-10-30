function Interprete({ nombre, foto, children }) {
  return (
    <div className="p-4 shadow rounded-lg bg-[var(--color-white)]">
      <h2 className="font-heading-h2 text-[var(--color-primary)] mb-2">{nombre}</h2>
      <img src={foto} alt={nombre} className="w-full rounded mb-2" />
      <p className="text-medium text-[var(--color-grey-2)]">{children}</p>
    </div>
  );
}

export default Interprete;
