// Descripción: Este componente representa un modal para crear una nueva sala de votación. Permite al usuario ingresar
// un nombre para la sala, establecer una fecha límite y agregar opciones de votación.

// Funcionamiento: Cuando el usuario completa el formulario y hace clic en "Crear Sala", se verifica que se hayan
// ingresado los detalles necesarios (nombre de la sala, fecha límite y al menos dos opciones de votación).
// Si todos los campos requeridos están completos, se muestra un indicador de carga (Loader) y se inicia la creación
// de la sala a través de una llamada a la API (handleCreateRoom). Una vez que se crea la sala con éxito, se muestra
// un mensaje de confirmación. Si faltan campos o se excede el límite de opciones, se muestran mensajes de error
// correspondientes. El usuario también puede agregar y eliminar opciones de votación dinámicamente.

import React, { useState } from "react";
import { APICreateRoom } from "@/lib/APICalls";
import { useSession } from "next-auth/react";
import Loader from "@/components/Loader";

function getNow() {
    const fechaActual = new Date(); // Esto crea un objeto Date con la fecha y hora actual.

    // Ahora formateamos la fecha en el formato deseado.
    const año = fechaActual.getFullYear();
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0"); // Los meses comienzan desde 0 (enero es 0).
    const dia = fechaActual.getDate().toString().padStart(2, "0");
    const hora = fechaActual.getHours().toString().padStart(2, "0");
    const minutos = fechaActual.getMinutes().toString().padStart(2, "0");

    const fechaFormateada = `${año}-${mes}-${dia}T${hora}:${minutos}`;

    return fechaFormateada;
}

const ModalCreate = (callback) => {
    const { data: session } = useSession();
    const userEmail = session.user.email;
    const now = getNow();

    //Estado de las opciones
    const [options, setOptions] = React.useState({});
    //state que setea el title de la option
    const [value, setValue] = React.useState("");
    //states de alertas y carteles
    const [alert, setAlert] = React.useState(false);
    const [advice, setAdvice] = React.useState(false);
    const [limitAlert, setLimitAlert] = React.useState(false);
    const [creadoExitoso, setCreadoExitoso] = React.useState(false);
    //states de los limites de opciones
    const [optionsLimit, setOptionsLimit] = useState(0);
    const [loaderActive, setLoaderActive] = useState(false);

    //funcion para comprobar el limite de opciones y crear o no, una opcion

    const [formData, setFormData] = React.useState({
        // --> Guarda la información del formulario
        problem: "",
        expires: "",
        options: {},
    });

    // --> formData: Es el objeto que debe guardarse en la base de datos con la información de la sala
    // --> formData.codigo: Es el código de la sala.

    const handleCreateRoom = async (roomData) => {
        const email = userEmail;
        const problem = roomData.problem;
        const options = roomData.options;
        const expires = new Date(roomData.expires)
            .toISOString()
            .substring(0, 16);

        const response = await APICreateRoom(email, problem, options, expires);
        setLoaderActive(false);
        callback.callback(response.shareCode);
    };

    const handleChange = (event) => {
        // --> Maneja los cambios de los inputs
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            formData.problem == "" ||
            formData.expires == "" ||
            Object.values(formData.options).length < 2
        ) {
            setAlert(true);
        } else {
            setAlert(false);
            setLoaderActive(true);

            setTimeout(() => {
                setCreadoExitoso(!creadoExitoso);
                handleCreateRoom(formData);
            }, 2000);
        }
    };

    const addNewOption = (event, value) => {
        event.preventDefault();

        if (Object.keys(options).length >= 4) {
            setLimitAlert(true);
            setTimeout(() => {
                setLimitAlert(false);
            }, 500);
            return;
        }

        if (value.length < 1) {
            setAdvice(true);
        } else {
            const newOption = {
                title: value,
                timesVoted: 0,
                id: optionsLimit.toString(),
            };

            // Copia el objeto options y agrega la nueva opción
            const updatedOptions = {
                ...options,
                [optionsLimit]: newOption,
            };

            setOptionsLimit(optionsLimit + 1);

            setOptions(updatedOptions);

            setFormData({
                ...formData,
                options: updatedOptions, // Actualiza el formData con las nuevas opciones
            });
            setValue("");
            setAdvice(false);
        }
    };

    const deleteAnOption = (index) => {
        // Verifica si el índice existe en el objeto de opciones
        if (options[index]) {
            // Copia el objeto de opciones actual
            const updatedOptions = { ...options };

            // Borra la opción con el índice proporcionado
            delete updatedOptions[index];

            // Actualiza el estado de opciones y el formData
            setOptions(updatedOptions);
            setFormData({
                ...formData,
                options: updatedOptions,
            });
        }
    };

    return (
        <div className="createRoom px-4 w-full overflow-y-auto">
            <Loader active={loaderActive}></Loader>
            <h2 className="text-primaryPurple font-dmsans font-bold text-3xl mb-4 text-center">
                Crear una sala
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <label htmlFor="titulo" className="font-semibold">
                    NOMBRE DE LA SALA
                </label>
                <input
                    type="text"
                    id="problem"
                    name="problem"
                    autoComplete="off"
                    value={formData.problem}
                    onChange={handleChange}
                    placeholder="Escribe la decisión a tomar"
                    className="px-2 rounded-lg bg-none text-sm h-8"
                />
                <div className="border-b w-full mt-1 border-secondaryBlack"></div>
                <label htmlFor="fecha" className="font-semibold">
                    FECHA LIMITE
                </label>
                <input
                    type="datetime-local"
                    min={now}
                    className="px-2 rounded-lg bg-none text-sm h-8"
                    id="expires"
                    name="expires"
                    value={formData.expires}
                    onChange={handleChange}
                />
                <div className="border-b w-full mt-1 border-secondaryBlack"></div>
                <label htmlFor="opciones" className="font-semibold">
                    AGREGAR OPCIONES
                </label>
                <div className="handler relative">
                    <input
                        type="text"
                        placeholder="Escribe una opción"
                        className="w-full px-2 rounded-lg bg-none h-8 text-sm"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <button
                        type="button"
                        className="absolute top-0 right-2 rounded-full"
                        onClick={() => addNewOption(event, value)}
                    >
                        {" "}
                        →{" "}
                    </button>
                    {advice && (
                        <p className="text-red-500 text-xs text-center">
                            {" "}
                            La opción no puede estar vacía{" "}
                        </p>
                    )}
                </div>
                <div className="border-b w-full mt-1 border-secondaryBlack"></div>

                {Object.keys(options).map((key) => (
                    <div
                        key={key}
                        className="flex justify-between items-center text-secondaryBlack px-2 text-sm font-semibold rounded-xl bg-secondaryGray shadow py-1"
                    >
                        <p> {options[key].title} </p>
                        <span
                            className="cursor-pointer"
                            onClick={() => deleteAnOption(key)}
                        >
                            {" "}
                            x{" "}
                        </span>
                    </div>
                ))}

                {alert && (
                    <p className="text-red-500 text-xs text-center">
                        Faltan opciones de respuesta o campos por completar
                    </p>
                )}

                {limitAlert && (
                    <p className="text-red-500 text-xs text-center">
                        No puedes añadir más opciones
                    </p>
                )}

                <div className="submit flex justify-center mt-2">
                    <button
                        type="submit"
                        className="bg-primaryPurple text-secondaryWhite font-semibold rounded-3xl w-3/5 sm:w-2/5 px-4 py-2"
                    >
                        {" "}
                        Crear Sala{" "}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ModalCreate;
