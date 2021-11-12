import React, { Component }  from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Academics from './AcademicsComponent';
import Matricula from './MatriculaComponent';
import Acreditacion from './AcreditacionComponent';

import{Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/academics' component={Academics}/>
                        <Route path='/matricula' component={Matricula}/>
                        <Route path='/acreditacion' component={Acreditacion}/>
                        <Redirect to='/home' />


                    </Switch>
            </div>
        );

    }
}
export default Main;