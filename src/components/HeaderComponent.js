import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

    
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    render(){
        return(
            <div>
                <React.Fragment>
                    <Navbar className = "background-gradient-header">
                    <NavbarBrand className ="mr-auto" href="/"><img src="/assets/images/IBS.png" height="200" width="400" alt="IBS Logo" /></NavbarBrand>
                    </Navbar>
                    <Navbar color="info" expand="md" light>
                        <div className="container">
                            <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            <i className="fa fa-home fa-lg "/><i className="navName">Inicio</i>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link ml-5" to="/academics">
                                            <i className="fa fa-list fa-lg"/><i className="navName">Academico</i>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link ml-5" to="/matricula">
                                            <i className="fa fa-info fa-lg" /><i className="navName">Matricula</i>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link ml-5" to="/acreditacion">
                                            <i className="fa fa-address-card fa-lg"/><i className="navName">Acreditacion</i>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
            
                                <span className="navbar-text ml-auto">
                                    <Button className="mr-3 light fontBlack" bg="dark" color="warning" onClick={() => {window.open("https://iglesiasenda.elvanto.net/form/62f3952d-0d02-11e7-9624-06e5d41f6a2e","_banck");}}>
                                        <i className="fa fa-user-plus fa-lg" /> Registrese Aqui
                                    </Button>
                                    <Button color="primary fontBlack" onClick={this.toggleModal}>
                                        <i className="fa fa-sign-in fa-lg" /> Ingresar Sesion
                                    </Button>
                                </span>

                            </Collapse>
                        </div>
                    </Navbar>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                </React.Fragment>
            </div>
        );

    }
}
export default Header;