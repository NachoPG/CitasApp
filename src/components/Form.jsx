import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ setPacientes, pacientes, paciente, setPaciente }) => {
    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    };

    const [pacienteForm, setPacienteForm] = useState({
        nombreMascota: "",
        nombrePropietario: "",
        email: "",
        alta: "",
        sintomas: "",
        id: generarId(),
    });

    const [error, setError] = useState(false);
    const [pacienteActive, setPacienteActive] = useState(false);

    useEffect(() => {
        const loadPacienteEdit = () => {
            if (Object.keys(paciente).length > 0) {
                setPacienteActive(true);
                setPacienteForm(paciente);
            }
        };

        loadPacienteEdit();
    }, [paciente]);

    const savePaciente = (e) => {
        e.preventDefault();
        pacienteActive ? handleEdit() : handleSubmit();
    };

    const handleSubmit = () => {
        console.log("Agregando Pacientes");
        const { nombreMascota, nombrePropietario, email, alta, sintomas } =
            pacienteForm;

        if (
            [nombreMascota, nombrePropietario, email, alta, sintomas].includes(
                ""
            )
        ) {
            return setError(true);
        }

        setError(false);

        //Cogemos una copia del state principal de pacientes y luego metemos el nuevo paciente introducido
        setPacientes([...pacientes, pacienteForm]);

        //Reiniciar valores
        setPacienteForm({
            nombreMascota: "",
            nombrePropietario: "",
            email: "",
            alta: "",
            sintomas: "",
            id: "",
        });
    };

    const handleEdit = () => {
        pacienteForm.id = paciente.id;
        const pacientesActualizados = pacientes.map((pacienteState) =>
            pacienteState.id === pacienteForm.id ? pacienteForm : pacienteState
        );

        console.log(pacientesActualizados);
        setPacientes(pacientesActualizados);

        setPacienteActive(false);
        setPacienteForm({
            nombreMascota: "",
            nombrePropietario: "",
            email: "",
            alta: "",
            sintomas: "",
            id: "",
        });
        setPaciente({});
    };

    const handleChange = (e) => {
        setPacienteForm({
            ...pacienteForm,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                onSubmit={savePaciente}
                className="bg-white shadow-md rounded-lg py-10 px-5"
            >
                {error && (
                    <Error>
                        <p>Todos los campos son obligatorios</p>
                    </Error>
                )}
                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none"
                        value={pacienteForm.nombreMascota}
                        name="nombreMascota"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        name="nombrePropietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none"
                        onChange={handleChange}
                        value={pacienteForm.nombrePropietario}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none"
                        onChange={handleChange}
                        value={pacienteForm.email}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="alta"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        name="alta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none"
                        onChange={handleChange}
                        value={pacienteForm.alta}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        cols="30"
                        name="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none"
                        rows="10"
                        placeholder="Describe los Sintomas"
                        onChange={handleChange}
                        value={pacienteForm.sintomas}
                    />
                </div>

                <input
                    type="submit"
                    value={
                        pacienteActive ? "Editar Paciente" : "Agregar Paciente"
                    }
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                />
            </form>
        </div>
    );
};

export default Form;
