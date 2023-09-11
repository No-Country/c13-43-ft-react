import React, { useState } from "react";
import { APICreateRoom } from "@/lib/APICalls";
import { useSession } from "next-auth/react";
import Loader from "@/components/Loader";

const ModalCreate = (callback) => {
  const { data: session } = useSession();
  const userEmail = session.user.email;

  console.log(session.user)
  //Estado de las opciones
  const [options, setOptions] = React.useState({});
  //state que setea el title de la option
  const [value, setValue] = React.useState("");
  //states de alertas y carteles
  const [alert, setAlert] = React.useState(false);
  const [advice, setAdvice] = React.useState(false);
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
    setLoaderActive(true);
    const email = userEmail;
    const problem = roomData.problem;
    const options = roomData.options;
    const expires = roomData.expires;
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
    // --> Envia el formulario luego de validar la información
    e.preventDefault();

    if (formData.codigo == "" || formData.fecha == "") {
      setAlert(true);
    } else {
      setAlert(false);
      setTimeout(() => {
        setCreadoExitoso(!creadoExitoso);
        // Aqui debe enviarse la información a DB
        handleCreateRoom(formData);

        //handleCreateRoom(formData);
      }, 2000);
    }
  };

  const addNewOption = (event, value) => {
    event.preventDefault();

    if (Object.keys(options).length >= 4) {
      // Si ya hay 4 opciones, muestra un mensaje de error o realiza la acción deseada
      console.log("No se pueden agregar más de 4 opciones");
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

      // disminuye en 1 el limite
      setOptionsLimit(optionsLimit - 1);
      // Actualiza el estado de opciones y el formData
      setOptions(updatedOptions);
      setFormData({
        ...formData,
        options: updatedOptions,
      });
    }
  };

  return (
    <div className="createRoom px-4">
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
          required="required"
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
          required="required"
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
            className="flex justify-between items-center px-2 text-xs rounded-lg bg-yellow-200 my-1"
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
            {" "}
            Faltan campos por completar{" "}
          </p>
        )}

        <div className="submit flex justify-center">
          <button
            type="submit"
            className="bg-primaryPurple text-secondaryWhite font-bold rounded-2xl w-2/5 px-2 py-1"
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
