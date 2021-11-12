import React, {Component} from "react";
import{Button} from 'reactstrap';

class Acreditacion extends Component{
    render(){
        return(
            <div className="background-gradient">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="mt-5 mb-5">Acreditación</h2>
                        <div className="textLeft mb-5">
                        El Instituto Bíblico Senda tiene la misión de proveer educación ministerial, y formación teológica para cualquier persona interesada en obtener un título en ministerio o estudios bíblicos, para mejorar aún más su llamado y ministerio.<br/><br/>

                        Los estudios ofrecidos por el Instituto Bíblico Senda no están en competencia con el campo secular de entrenamiento o empleo. El Instituto Bíblico Senda se estableció para entrenar a hombres y mujeres de Dios y equiparlos con las herramientas necesarias para ser maduros, productivos y ser partes del buen funcionamiento del cuerpo local de Cristo, La Iglesia.<br/><br/>

                        El Instituto Bíblico Senda, es una rama acreditada del Seminario Teológico Unión Cristiana (STUC), el cual le extiende las acreditaciones obtenida. El Seminario Teológico Unión Cristiana (STUC) está autorizado por la Junta de Colegios y Universidades Independientes del Estado de la Florida para otorgar títulos, y continúa como una institución registrada que otorga títulos en la Comisión de Educación Independiente (CIE) del Departamento de Educación de la Florida.<br/><br/>

                        El Seminario Teológico Unión Cristiana (STUC) estado acreditado por la acreditación entre compañeros a través de la Transworld Accrediting Commission International. (TACI). La acreditación de compañeros (Peer Accredited) es un reconocimiento de estándares, políticas y programas de instituciones afines, libres de participación gubernamental. Estas organizaciones se dedican a crear y ofrecer una educación teológica de calidad. Es importante tener en cuenta que: los programas de grado de este seminario están diseñados exclusivamente para las vocaciones.<br/><br/>

                        El Seminario Teológico Unión Cristiana (STUC) es un miembro activo de varias organizaciones de acreditación, y asiste regularmente a reuniones y cumple con todos los estándares proporcionados.<br/><br/>

                        Para ver todas las acreditaciones y membresías del Seminario Teológico Unión Cristiana (STUC) oprima el botón.
                        </div>
                        
                        <Button className="fontBlack mb-5" color="info" onClick= {()=>{window.open("https://www.stucedu.org/acreditacion/","_blanck"); }}>
                        Acreditación
                        </Button>

                    </div>
                    

                </div>

            </div>
            </div>
        );

    }

}
export default Acreditacion;