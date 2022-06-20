import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, deletePaciente }) => {
    return (
        <>
            {pacientes && pacientes.length ? (
                <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
                    <h2 className="font-black text-3xl text-center">
                        Listado Pacientes
                    </h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {""}
                        <span className="text-indigo-600 font-bold">
                            Pacientes y Citas
                        </span>
                    </p>

                    {pacientes.map((paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            deletePaciente={deletePaciente}
                        />
                    ))}
                </div>
            ) : (
                <div className="md:w-1/2 lg:w-3/5 md:h-screen">
                    <h2 className="font-black text-3xl text-center">
                        No hay Pacientes
                    </h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes {""}
                        <span className="text-indigo-600 font-bold">
                            y aparecerán en este lugar
                        </span>
                    </p>
                </div>
            )}
        </>
    );
};
export default ListadoPacientes;
