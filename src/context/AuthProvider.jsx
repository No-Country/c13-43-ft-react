// Descripción: Es el componente encargado de distribuir el contexto de la sesión en toda la aplicación, provee la
// información del usuario a todos los componentes que lo requieran.

"use client"

import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children, session }) {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    );
}