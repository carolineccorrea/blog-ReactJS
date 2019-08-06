import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import firebase from '../../firebase';
import { styled } from '@material-ui/styles';

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    margin: 30,
    padding: '0 30px',
  });

const containerForm = {
    textAlign:'center',
}

 

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
         /* codigo comentado para poder manipular a view 
          verifica se tem algum usuário logado
          if(firebase.getCurrent()){
            return this.props.history.replace('dashboard');
          }*/
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
                <form onSubmit={this.entrar} id="login" style={containerForm}>
                    <div style={{margin: 40}}>
                    <label>email:</label>
                    <TextField type="email" autoComplete="off" autoFocus margin="normal" value={this.state.email}
                    onChange={(e =>this.setState({email: e.target.value}))}
                    />
                    </div>
                    <div style={{margin: 15, paddingRight:22}}>
                    <label>password:</label>
                    <TextField type="password" autoComplete="off" margin="normal" value={this.state.password} onChange={(e =>this.setState({password: e.target.value}))} />
                    </div>
                    <div style={{paddingLeft: 50}}> 
                    <MyButton type="submit" color="primary" variant="contained">Entrar...</MyButton> <br></br>
                    <Link to='/register'>Ainda nao possui uma conta ?</Link>
                    </div>
                </form>    
            </div>
        );
    }
}

export default withRouter(Login);