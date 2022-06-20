import React from "react";

const Paciente = ({ paciente, setPaciente, deletePaciente }) => {
    const { nombreMascota, nombrePropietario, email, alta, sintomas, id } =
        paciente;

    const handleDelete = () => {
        const response = confirm("Desea eliminar este paciente");
        if (response) deletePaciente(id);
    };

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {""}
                <span className="font-normal normal-case">{nombreMascota}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {""}
                <span className="font-normal normal-case">
                    {nombrePropietario}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {""}
                <span className="font-normal normal-case">{alta}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex lg:flex-row lg:space-y-0 md:flex-col md:space-y-4 justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase
                    rounded-lg transition-colors"
                    onClick={() => {
                        setPaciente(paciente);
                    }}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase
                rounded-lg transition-colors"
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Paciente;
