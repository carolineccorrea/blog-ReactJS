import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
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
    }
    entrar(event){
        event.preventDefault();

    }
    render() {
        return (
            <div>
                <form onSubmit={this.entrar} id="login">
                    <label>email:</label>
                    <input type="email" autoFocus value={this.state.email}
                    onChange={(e =>this.setState({email: e.target.value}))}
                    />
                    <label>password:</label>
                    <input type="password" value={this.state.password}
                    onChange={(e =>this.setState({password: e.target.value}))}
                    />
                    <button type="submit">Entrar...</button>
                    <Link to='/register'>Ainda nao possui uma conta ?</Link>
                </form>    
            </div>
        );
    }
}

export default withRouter(Login);