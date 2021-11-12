import React,{Component} from "react";
import {Button} from 'reactstrap';

class Matricula extends Component{
    render(){
        return(
            <div className="background-gradient">
            <div className="container">
                <div className="row">
                    
                        <h2 className="col mt-5">Plan de Matriculas</h2>
                        <div className="mt-3">
                        El Instituto Bíblico Senda ofrece un plan de matrícula muy asequible para todos los programas de estudio. Ofrecemos la oportunidad de estudiar a un precio módico y manejable, con un flexible plan de pago.
                        </div>
                        <h2 className=" col mt-5 mb-5">Costo</h2>
                        <ul className="textLeft">    
                            <li>Costo de Aplicación: Cuando usted aplica para admisión al Instituto Bíblico Senda, usted está comprometido a hacer un pago de admisión una sola vez de $50.00 el cual no será reembolsable, ni transferido. Es requisito si usted es un estudiante a tiempo completo o a corto plazo.</li><br/>
                            <li>Costo por Registración: El costo por registración para el segundo y el tercer año escolar es de $40.00*.</li><br/>
                            <li>Costo por Curso: El costo por curso es de $60.00* más el costo de libros (este costo de libros es variable).</li><br/>
                            <li>Costo de Clases Virtuales: El costo por tomar los cursos virtuales es de $20.00* por curso. Este costo no será rembolsable, ni transferido.</li><br/>
                            <li>Costo de Clases Virtuales: El costo por tomar los cursos virtuales es de $20.00* por curso. Este costo no será rembolsable, ni transferido.</li><br/>


                            *Todos los cobros son sujetos a cambios sin notificación.
                        </ul>
                        <h2 className=" col mt-5 mb-5">Centro de Pagos</h2>
                        <div className="textLeft mb-5"> Sigue estas instrucciones para efectuar tus pagos.<br/><br/>

                            Estimado estudiante, oprimiendo el botón de “Hacer pagos a través de Tithely” o usando las opciones a través de PayPal, podrás hacer el pago directo al Instituto Bíblico Senda. El pago más común son $110.00 dólares, eso cubre la cuota der admisión que son $50 dólares, (Pagado solo una vez) y el primer curso que son $60. También está la opción de pagar tu programa de estudio por el año completo, y el costo serian $410 dólares.¡Busca la opción que estas interesado y completa tu registración y matrícula para tu programa de estudios!
                        </div>
                        <Button className="mb-5 fontBlack" color="info" onClick={() => {
                                window.open("https://tithe.ly/give_new/www/#/tithely/give-one-time/532446?kiosk=1", "_blank");}}>Hacer Pago A Travez De Tithly
                        </Button>

                </div>
            </div>
            </div>
        );
    }
}
export default Matricula;