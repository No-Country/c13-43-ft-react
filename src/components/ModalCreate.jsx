import React, { useState } from "react";
import ModalGeneral from "@/containers/ModalGeneral";
import ModalCopiar from "./ModalCopiar";
import { APICreateRoom } from "@/lib/APICalls";
import { useSession } from "next-auth/react";

const ModalCreate = () => {
    const { data: session, status } = useSession();
    const userEmail = session.user.email;
    //Estado de las opciones
    const [options, setOptions] = React.useState({});
    //state que setea el title de la option
    const [value, setValue] = React.useState("");
    //states de alertas y carteles
    const [alert, setAlert] = React.useState(false);
    const [advice, setAdvice] = React.useState(false);
    const [warning, setWarning] = React.useState(false);
    const [creadoExitoso, setCreadoExitoso] = React.useState(false);
    //states de los limites de opciones
    const [optionsLimit, setOptionsLimit] = useState(0);

    const handleCreateRoom = async (roomData) => {
        const email = userEmail;
        const problem = roomData.problem;
        const options = roomData.options;
        const expires = roomData.expires;
        const response = await APICreateRoom(problem, email, options, expires);
        return response
    };

    const [formData, setFormData] = React.useState({
        problem: "",
        expires: "",
        options: {},
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.problem == "" || formData.expires == "") {
        setAlert(true);
        } else {
        setAlert(false);
        formData.roomId = Math.floor(Math.random() * 9000000) + 1000000;
        setTimeout(() => {
            setCreadoExitoso(!creadoExitoso);
            console.log(formData);
            handleCreateRoom(formData);
        }, 2000);
        }
    };

    const addNewOption = (event, value) => {
        event.preventDefault();

        if (value.length < 1) {
        setAdvice(true);
        } else if ( Object.values(options).length < 4 ) {
        const newOption = {
            title: value,
            // timesVoted: 0,
            votedBy: 0,
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
            options: updatedOptions,
        });
        setAdvice(false);
        } else {
            setWarning(true)
        }
    };

    const deleteAnOption = (index) => {
        // --> Borra una de las opciones de respuestas (PENDIENTE)
        console.log("Borrando la opción: " + formData.options[index].title);
    };

    return (
        <div className="createRoom px-4">
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
            {warning && (
                <p className="text-red-500 text-xs text-center">
                {" "}
                No puedes añadir más opciones{" "}
                </p>
            )}
            </div>
            <div className="border-b w-full mt-1 border-secondaryBlack"></div>

            {Object.keys(options).map((key) => (
            <div key={key} className="flex justify-between items-center px-2 text-xs rounded-lg bg-yellow-200 my-1">
                <p> {options[key].title} </p>
                <span className="cursor-pointer" onClick={() => deleteAnOption(key)}>
                        &nbsp; x &nbsp;
                </span>
            </div>
            ))}

            {alert && (
            <p className="text-red-500 text-xs text-center">
                {" "}
                Faltan campos por completar{" "}
            </p>
            )}

            <div className="submit flex justify-center">
            <button type="submit" className="bg-primaryPurple text-secondaryWhite font-bold rounded-2xl w-2/5 px-2 py-1">
                &nbsp; Crear Sala &nbsp;
            </button>
            </div>
        </form>
        <ModalGeneral state={creadoExitoso} changeState={setCreadoExitoso}>
            <ModalCopiar
            image={"/Images/CheckIcon.png"}
            title={"Sala creada con éxito!"}
            content={"Tu código de sala es:"}
            code={289350}
            />
        </ModalGeneral>
        </div>
    );
};

export default ModalCreate;