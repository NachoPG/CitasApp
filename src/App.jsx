import { useEffect } from "react";
import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

const App = () => {
    //State global de pacientes
    const [pacientes, setPacientes] = useState([]);

    //State para recuperar el paciente seleccionado con el objetivo de modificar sus valores
    const [paciente, setPaciente] = useState({});

    const deletePaciente = (id) => {
        const pacientesUpdate = pacientes.filter(
            (paciente) => paciente.id !== id
        );
        setPacientes(pacientesUpdate);
    };

    useEffect(() => {
        const getPacientesLocal = () => {
            const pacientesLocal =
                JSON.parse(localStorage.getItem("pacientes")) ?? [];
            setPacientes(pacientesLocal);
        };

        getPacientesLocal();
    }, []);

    useEffect(() => {
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
    }, [pacientes]);

    return (
        <div className="container mx-auto mt-20">
            <Header />
            <div className="mt-12 md:flex">
                <Form
                    setPacientes={setPacientes}
                    pacientes={pacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    deletePaciente={deletePaciente}
                />
            </div>
        </div>
    );
};
export default App;
