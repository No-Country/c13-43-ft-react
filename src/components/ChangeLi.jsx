// Descripción: Elemento de lista para paneles de navegación. Puede cambiar su apariencia según esté activo o inactivo.
// Muestra imagen, nombre y enlace (opcional) o función de clic (opcional).

// Funcionamiento: El componente muestra un elemento de lista que se destaca si está activo. Puede tener una imagen, 
// un nombre y puede actuar como enlace a una URL o ejecutar una función al hacer clic. Ideal para paneles de navegación 
// y menús interactivos.

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ChangeLi = ({ img, nombre, isActive, href = "#", onClick }) => {
  return (
    <li
      className={`panelLi rounded-tl-3xl rounded-bl-3xl ${
        isActive ? "active" : ""
      }`}
      onClick={onClick}
    >
      <Link href={href} className="text-secondaryWhite flex gap-6 pl-6 py-4">
        <div className="flex justify-center items-center">
          <Image
            src={img}
            width={20}
            height={20}
            className="open absolute hidden"
            alt="image"
          />
          <Image
            src={img}
            width={20}
            height={20}
            className="close absolute hidden"
            alt="image"
          />
        </div>
        <span className="font-dmsans text-xl font-medium"> {nombre} </span>
      </Link>
    </li>
  );
};
