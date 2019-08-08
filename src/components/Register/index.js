import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/styles';

import firebase from '../../firebase';


  const containerForm = {
    textAlign:'center',
  }

  const Txf = styled(TextField)({
    width:'25%',
  });
 

class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            name:'',
            email:'',
            password:''
        }
       this.regis = this.regis.bind(this);
       this.onRegis = this.onRegis.bind(this);
    }
    
    regis(e){
        e.preventDefault();
        this.onRegis();
    }

    onRegis = async() => {
        try {
            const {name,email,password} = this.state;
            await firebase.register(name,email,password);
            this.props.history.replace('/dashboard');

        
        }

        catch(error){
            console.log(error.message);
        }

    }

    render() {
        return (
            <div>
                       
              <form onSubmit={this.regis} style={containerForm}>
              <h1 className="register-h1">Cadastre-se agora</h1>
              <div style={{paddingTop:20}}>
              <Txf type="text" variant="outlined" autoComplete="off" label="Nome" onChange={(e)=> this.setState({name: e.target.value})} />
               </div> 
              <div style={{paddingTop:20}}>   
              <Txf type="email" variant="outlined" label="Email" onChange = {(e) => this.setState({email: e.target.value})} />
             </div>
            <div style={{paddingTop:20}}>
             <Txf type="password" variant="outlined" label="Senha" onChange = { (e) => this.setState({password: e.target.value})} />
            </div>
              <div style={{margin:40}}>
            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
           </div>
         </form>
         </div>
            
        );
    }
}

export default withRouter(Register);