// Descripción: Componente modal que permite al usuario copiar un código o texto.

// Funcionamiento: Este componente muestra un título, contenido y un código que el usuario puede copiar haciendo click en 
// un botón con un ícono de copia. Cuando se hace click en el botón, el código se copia al portapapeles del usuario y se 
// muestra un mensaje de éxito o error. Ideal para proporcionar una forma conveniente de copiar información 
// en la aplicación.

import React from "react";
import Image from "next/image";

const ModalCopiar = ({ image, title, content, code }) => {
  const [alert, setAlert] = React.useState("");

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setAlert("Copiado con éxito!");
      setTimeout(() => {
        setAlert("");
      }, 1000);
    } catch (err) {
      setAlert("No se pudo copiar el texto");
    }
  };

    return (
        <div>
            <Image className="mx-auto mb-4" src={image} alt="CheckIcon" width={25} height={25}/>
            <h2 className="text-primaryPurple font-dmsans font-bold text-3xl mb-4 text-center"> {title} </h2>
            <div className="flex justify-center">
                <p> { content } &nbsp; </p>
                <p className="font-bold text-center"> {code} &nbsp; &nbsp; </p>
                <button onClick = {handleCopyClick}>
                    <svg 
                    width="15" 
                    height="15" 
                    viewBox="0 0 11 11" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="cursor-pointer"
                    >
                        <path d="M9.96875 0.625H3.46875C3.36101 0.625 3.25767 0.667801 3.18149 0.743988C3.1053 0.820175 3.0625 0.923506 3.0625 1.03125V3.0625H1.03125C0.923506 3.0625 0.820175 3.1053 0.743988 3.18149C0.667801 3.25767 0.625 3.36101 0.625 3.46875V9.96875C0.625 10.0765 0.667801 10.1798 0.743988 10.256C0.820175 10.3322 0.923506 10.375 1.03125 10.375H7.53125C7.63899 10.375 7.74233 10.3322 7.81851 10.256C7.8947 10.1798 7.9375 10.0765 7.9375 9.96875V7.9375H9.96875C10.0765 7.9375 10.1798 7.8947 10.256 7.81851C10.3322 7.74233 10.375 7.63899 10.375 7.53125V1.03125C10.375 0.923506 10.3322 0.820175 10.256 0.743988C10.1798 0.667801 10.0765 0.625 9.96875 0.625ZM7.125 9.5625H1.4375V3.875H7.125V9.5625ZM9.5625 7.125H7.9375V3.46875C7.9375 3.36101 7.8947 3.25767 7.81851 3.18149C7.74233 3.1053 7.63899 3.0625 7.53125 3.0625H3.875V1.4375H9.5625V7.125Z" fill="#121212"/>
                    </svg>
                </button>
            </div>
            <p className="text-gray-300 text-center mt-2 text-xs">{alert}</p>
        </div>
    )
}

export default ModalCopiar