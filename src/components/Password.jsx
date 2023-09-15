// Descripción: El componente "Password" se utiliza para crear un campo de entrada de contraseña con un botón de alternar 
// para mostrar u ocultar la contraseña en texto claro. Recibe como propiedades el nombre de la etiqueta de contraseña 
// y el nombre del campo.

// Funcionamiento: El componente renderiza un campo de entrada de contraseña con una etiqueta que muestra el nombre 
// proporcionado en la propiedad "nameLabel". El campo de contraseña puede alternar entre mostrar y ocultar la contraseña 
// en texto claro utilizando un ícono de ojo. Cuando el usuario hace clic en el ícono de ojo, cambia entre mostrar y 
// ocultar la contraseña. Esto proporciona flexibilidad y seguridad al ingresar contraseñas en un formulario.

"use client";
import React, { useState } from "react";
import Image from "next/image";

const Password = ({ nameLabel, name }) => {
  const [openEye, setOpenEye] = useState(false);

  const ojo = {
    open: "/Images/password/open.png",
    close: "/Images/password/close.png",
  };

  return (
    <div className="my-8">
      <label
        className=" font-dmsans font-medium"
        htmlFor={name}
      >
        {" "}
        {nameLabel}{" "}
      </label>
      <div className="relative">
        <input
          className="w-full border-b text-black dark:text-darkBlack border-secondaryBlack bg-slate-50 px-2 h-8"
          type={openEye ? "text" : "password"}
          name={name}
          id={name}
          required="required"
        />
        <Image
          width={25}
          height={25}
          src={openEye ? ojo.open : ojo.close}
          alt="image"
          onClick={() => setOpenEye(!openEye)}
          className="inline-block absolute right-0 bottom-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Password;
