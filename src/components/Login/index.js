import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import firebase from '../../firebase';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
        this.entrar = this.entrar.bind(this);
        this.login = this.login.bind(this);
    }

    componentDidMount(){
        // verifica se tem algum usuário logado
        if(firebase.getCurrent()){
            return this.props.history.replace('dashboard');
        }
    }

    login = async () => {
        const {email,password} = this.state;
        try{
            await firebase.login(email,password).catch((error)=>{
                if (error.code === 'auth/user-not-found'){
                    alert("Usuário nao existe");
                }
            })
        }catch(error){
            alert(error.message);
        }
        this.props.history.replace('/dashboard');
    }
    entrar(event){
        event.preventDefault();
        this.login();

    }
    render() {
        return (
            <div>
                <form onSubmit={this.entrar} id="login">
                    <label>email:</label>
                    <TextField type="email" autoComplete="off" autoFocus value={this.state.email}
                    onChange={(e =>this.setState({email: e.target.value}))}
                    /><br></br>
                    <label>password:</label>
                    <TextField type="password" autoComplete="off" value={this.state.password} onChange={(e =>this.setState({password: e.target.value}))} />
                    <br></br>
                    <Button type="submit" color="primary" variant="contained">Entrar...</Button> <br></br>
                    <Link to='/register'>Ainda nao possui uma conta ?</Link>
                </form>    
            </div>
        );
    }
}

export default withRouter(Login);