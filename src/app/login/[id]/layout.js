// Descripción: El layout es la plantilla por defecto que conservan todos los componentes al interior de la aplicación,
// Consta de un menú lateral dinámico y accesible por el usuario para navegación e interacción.

import Sidebar from "@/containers/Sidebar";

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="hidden xl:flex">
        <Sidebar />
      </div>
      {children}
    </div>
  );
}
