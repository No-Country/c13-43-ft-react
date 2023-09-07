import React from 'react'
import ModalGeneral from '@/containers/ModalGeneral'
import ModalCopiar from './ModalCopiar'

const ModalCreate = () => {

    const [options, setOptions] = React.useState([])
    const [value, setValue] = React.useState('')
    const [alert, setAlert] = React.useState(false)
    const [advice, setAdvice] = React.useState(false)
    const [creadoExitoso, setCreadoExitoso] = React.useState(false)

    const [formData, setFormData] = React.useState({                    // --> Guarda la información del formulario
        codigo: Math.floor(Math.random() * (999999 - 100001)) + 100000,
        titulo: '',
        fecha: '',
        opciones: []        
    })                      
    
    // --> formData: Es el objeto que debe guardarse en la base de datos con la información de la sala
    // --> formData.codigo: Es el código de la sala.

    const handleChange = (event) => {                   // --> Maneja los cambios de los inputs
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {                       // --> Envia el formulario luego de validar la información
        e.preventDefault()

        if (formData.titulo == '' || formData.fecha == '' || formData.opciones.length < 2) {
            setAlert(true)
        } else {
            setAlert(false)
            setTimeout(() => {
                setCreadoExitoso(!creadoExitoso)
                console.log(formData)       // Aqui debe enviarse la información a DB
            }, 2000);
        }
    }

    const addNewOption = (event, value) => {            // --> Añade una opción de respuesta después de validarla
        event.preventDefault()

        if (value.length < 1) {
            setAdvice(true)
        } else {
            setOptions([...options, {id: options.length + 1, titulo: value}])
            setFormData({...formData, opciones: [...options, {id: options.length + 1, titulo: value}]})
            setAdvice(false)
        }
    }

    const deleteAnOption = (index) => {               // --> Borra una de las opciones de respuestas (PENDIENTE)
        console.log('Borrando la opción: ' + options[index].titulo)
    }

    return (
        <div className="createRoom px-4">
            <h2 className='text-primaryPurple font-dmsans font-bold text-3xl mb-4 text-center'>Crear una sala</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <label htmlFor="titulo" className="font-semibold">NOMBRE DE LA SALA</label>
                <input 
                    type="text" 
                    id="titulo"
                    name="titulo"
                    autoComplete="off"
                    value={formData.titulo}
                    onChange={handleChange}
                    placeholder='Escribe la decisión a tomar' 
                    className="px-2 rounded-lg bg-none text-sm h-8"
                />
                <div className="border-b w-full mt-1 border-secondaryBlack"></div>
                <label htmlFor="fecha" className="font-semibold">FECHA LIMITE</label>
                <input 
                    type="datetime-local" 
                    className="px-2 rounded-lg bg-none text-sm h-8"
                    id="fecha"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                />
                <div className="border-b w-full mt-1 border-secondaryBlack"></div>
                <label htmlFor="opciones" className="font-semibold">AGREGAR OPCIONES</label>
                <div className="handler relative">
                    <input 
                        type="text" 
                        placeholder='Escribe una opción' 
                        className="w-full px-2 rounded-lg bg-none h-8 text-sm" 
                        onChange={(event) => setValue(event.target.value)} 
                    />
                    <button type="button" className="absolute top-0 right-2 rounded-full" onClick={() => addNewOption(event, value)}> → </button>
                    {advice && <p className="text-red-500 text-xs text-center"> La opción no puede estar vacía </p>}
                </div>
                <div className="border-b w-full mt-1 border-secondaryBlack"></div>

                {options.map((option, index) => 
                    <div key= {option.id} className="flex justify-between items-center px-2 text-xs rounded-lg bg-yellow-200 my-1"> 
                        <p> {option.titulo} </p>
                        <span className="cursor-pointer" onClick= {() => deleteAnOption(index)}> x </span>
                    </div>)
                }

                {alert && <p className="text-red-500 text-xs text-center"> Faltan campos por completar </p>}

                <div className="submit flex justify-center">
                    <button 
                        type="submit" 
                        className="bg-primaryPurple text-secondaryWhite font-bold rounded-2xl w-2/5 px-2 py-1"
                    > Crear Sala </button>
                </div>
            </form>
            <ModalGeneral
                state = { creadoExitoso }
                changeState = { setCreadoExitoso }
            >
                <ModalCopiar 
                    image = {"/Images/CheckIcon.png"}
                    title = {"Sala creada con éxito!"}
                    content = {"Tu código de sala es:"} 
                    code = {289350}
                />
            </ModalGeneral>
        </div>
    )
}

export default ModalCreate