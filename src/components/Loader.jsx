const Loader = (active) => {
  return (
    active.active && (
      <div className="absolute h-full backdrop-blur-xl w-full z-10 grid place-items-center top-0">
        <h2>Cargando</h2>
      </div>
    )
  );
};
export default Loader;
