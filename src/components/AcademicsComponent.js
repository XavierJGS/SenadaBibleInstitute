import React, {Component} from "react";
import Button from "reactstrap/lib/Button";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Academics extends Component {
    render(){
        return(
            <div className="background-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col m-5">
                            <h2>Para Matricularse en el Instituto Bíblico Senda</h2>
                            <div className="m-5">
                            Para matricularse en el Instituto Bíblico Senda el proceso es fácil. Llene la Solicitud de Inscripción, una vez que el Comité de admisiones ha recibido su solicitud, su aplicación será evaluada, y un representante de Admisiones le contactará. Dios te bendiga, y le felicitamos por esforzarse a hacer Su Voluntad. Gracias por someter su solicitud de admisión al Instituto Bíblico Senda.
                            </div>
                            <Button className="fontBlack mb-5" color="info" onClick={()=>{ window.open("https://iglesiasenda.elvanto.net/form/62f3952d-0d02-11e7-9624-06e5d41f6a2e","_blanck");}}>
                                Aplicacion de IBS
                            </Button>

                            <h2 className="mt-5">Nuestros Programas Académicos</h2>
                                


                        </div>
                    </div>
                        <Tabs>
                            <TabList>
                                <Tab>Certificacion General</Tab>
                                <Tab>Certificacion de Ministerio</Tab>
                                <Tab>Diploma de Concetracion en Estudios Teologicos</Tab>
                                <Tab>Diploma de Concentracion en Consejeria</Tab>
                            </TabList>

                            <TabPanel>
                                
                                <div className="textLeft">
                                    El Instituto Bíblico Senda ofrece el Certificado General a aquellos estudiantes que completen los 18 créditos. No hay ningún requisito educativo para entrar en este programa de estudio. Independientemente de la formación de una persona, cualquiera puede inscribirse en este programa de estudio. El estudiante debe completar los 18 créditos, tomada de los cursos que figuran en el currículo.</div><br/>
                                <h4 className="textLeft">Primer año – Certificado General – 18 créditos</h4>
                                <ul className="textLeft">
                                    <li>Pentateuco, Históricos y Poéticos A.T – (3 créditos)</li>
                                    <li>Nuevo Testamento – (3 créditos)</li>
                                    <li>Teología Sistemática – (3 créditos)</li>
                                    <li> Discipulado: El llamado de todo cristiano – (3 créditos)</li>
                                    <li>Teología de Misiones – (3 créditos)</li>
                                </ul>
                            </TabPanel>
                            <TabPanel>
                                <div className="textLeft" >
                                    El Instituto Bíblico Senda ofrece el Certificado de Ministerio a aquellos estudiantes que completen los 36 créditos. Para inscribirse en este programa de estudio, el solicitante debe tener 18 créditos de formación previa del Instituto Bíblico Senda o una Escuela Bíblica aceptada. Este curso se considera un curso de dos años. El estudiante debe completar los 18 créditos, tomada de los cursos que figuran en el currículo.</div><br/>
                                <h2 className="textLeft">Segundo año – Certificado de Ministerio – 18 créditos</h2>
                                <ul className="textLeft">
                                    <li>Hermenéutica – (3 créditos)</li>
                                    <li>Homilética – (3 créditos)</li>
                                    <li>Pensamiento Paulino – (3 créditos)</li>
                                    <li>Historia de la Iglesia – (3 créditos)</li>
                                    <li>Consejería Bíblica – (3 créditos)</li>
                                    <li>El Liderazgo Eficaz – (3 créditos)</li>
                                </ul>
                            </TabPanel>
                            <TabPanel>
                                <div className="textLeft" >
                                El Instituto Bíblico Senda ofrece el Diploma de Concentración de Estudios Teológicos a aquellos estudiantes que completen los 60 créditos. Para inscribirse en este programa de estudio, el solicitante debe tener 36 créditos de formación previa del Instituto Bíblico Senda o una Escuela Bíblica aceptada. Este curso se considera un curso de tres años. El estudiante debe completar los 24 créditos, tomada de los cursos que figuran en el currículo. El Diploma de Concentración en Estudios Teológicos es otorgado por el Seminario Teológico Unión Cristiana.</div><br/>
                                <h2 className="textLeft">Tercer año – Diploma de Concentración en Estudios Teológicos – 24 créditos</h2>
                                <ul className="textLeft">
                                    <li>Escatología 1 - Daniel – (4 créditos)</li>
                                    <li>Escatología 2 - Apocalipsis – (4 créditos)</li>
                                    <li>Neumatología – (3 créditos)</li>
                                    <li>Cristología – (4 créditos)</li>
                                    <li>Sectas y Religiones – (3 créditos)</li>
                                    <li>Métodos de enseñanza/Practicum – (6 créditos)</li>
                                </ul>
                            </TabPanel>
                            <TabPanel>
                                <div className="textLeft" >
                                El Instituto Bíblico Senda ofrece el Diploma de Concentración en Consejería a aquellos estudiantes que completen los 60 créditos. Para inscribirse en este programa de estudio, el solicitante debe tener 36 créditos de formación previa del Instituto Bíblico Senda o una Escuela Bíblica aceptada. Este curso se considera un curso de tres años. El estudiante debe completar los 24 créditos, tomada de los cursos que figuran en el currículo. El Diploma de Concentración en Consejería es otorgado por el Seminario Teológico Unión Cristiana.</div><br/>
                                <h2 className="textLeft">Tercer año – Diploma de Concentración en Consejería– 24 créditos</h2>
                                <ul className="textLeft">
                                    <li>Cómo Aconsejar en Situaciones de Crisis – (4 créditos)</li>
                                    <li>Una Iglesia Emocionalmente Sana – (4 créditos)</li>
                                    <li>Manual del Temperamento – (3 créditos)  </li>
                                    <li>Límites para el Matrimonio – Reconociendo el Poder de su Identidad en Cristo – (4 créditos)</li>
                                    <li>Rompiendo las Cadenas – (3 créditos)</li>
                                    <li>Rompiendo las Cadenas – (3 créditos)</li>
                                </ul>
                            </TabPanel>
                        </Tabs>
                        <h3 className="mt-5 mb-4">Proceso de Admisiones</h3>
                        <div>¡Gracias por enviar su solicitud de admisión al Instituto Bíblico Senda! Para matricularse en el Instituto Bíblico Senda el proceso es fácil. Llene la Solicitud de Inscripción, una vez que el Comité de admisiones ha recibido su solicitud, su aplicación será evaluada, y un representante de Admisiones le contactará. Solicite la admisión usando nuestra Solicitud de Inscripción en línea. Presentar la Cuota de Aplicación Admisión de $50.00 (No Reembolsable) a la Oficina de Finanzas del Instituto Bíblico Senda. Ninguna solicitud será procesada sin esta tarifa Después de que todos los documentos hayan sido recibidos, el Comité de Admisiones revisará el expediente de cada solicitante. Las preguntas pueden dirigirse a nuestra Directora de Admisiones a la siguiente dirección:</div>
                </div>
                
            </div>  

            
        );
    }

}
export default Academics;