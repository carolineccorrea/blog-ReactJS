import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/styles';


  const Txf = styled(TextField)({
      height:50,
      marginLeft: 1,
      marginRight: 1,
  });
 

class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            name:'',
            email:'',
            password:''
        }
       
    }
    


    render() {
        return (
            <div>
                <h1 className="register-h1">Registro novo usuário</h1>
                <form style={{paddingLeft:30}}>
                    <div style={{paddingTop:20}}>
                        <Txf type="text" variant="outlined" autoComplete="off" label="Nome" onChange={(e)=> this.setState({nome: e.target.value})} />
                    </div> 
                    <div style={{paddingTop:20}}>   
                         <Txf type="email" variant="outlined" label="Email" onChange = {(e) => this.setState({email: e.target.value})} />
                    </div>
                    <div style={{paddingTop:20}}>
                        <Txf type="password" variant="outlined" label="Senha" onChange = { (e) => this.setState({senha: e.target.value})} />
                    </div>
                    <div style={{margin:40}}>
                    <Button variant="contained" color="primary">Cadastrar</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Register);