// Descripción: Componente que muestra un indicador de carga (spinner) cuando se establece como activo.

// Funcionamiento: El componente renderiza un spinner (ClipLoader) en el centro de la pantalla cuando active es verdadero. 
// Se utiliza para indicar la carga o procesamiento en segundo plano.

import ClipLoader from "react-spinners/ClipLoader";

const Loader = (active) => {
  return (
    active.active && (
      <div className="absolute h-full w-full backdrop-blur z-20 grid place-items-center top-0 left-0 right-0 bottom-0">
        <ClipLoader color="#6009AE" />
      </div>
    )
  );
};
export default Loader;
