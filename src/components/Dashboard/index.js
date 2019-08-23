import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import { Button } from '@material-ui/core';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            nome:'',
            email:''
        }
        this.logout = this.logout.bind(this);
    }

    async componentDidMount(){
        if (!firebase.getCurrent()){
            this.props.history.replace('/login');
            return null;
        }

        firebase.getUserName((info)=>{
            this.setState({nome: info.val().nome});
            this.setState({email: info.val().email});
        })
    }

  

    logout = async () =>{
       await firebase.logout().catch((error)=>{
           console.log(error);
       })
       this.props.history.push('/');
    }
    

    render() {
        return (
            <div>
                <h3>olá {this.state.nome}</h3>
                <p>Logado com {this.state.email}</p>
                <Button variant="contained" color="secondary"><Link to ="/dashboard/new">Novo Post</Link></Button><br></br>
                <Button variant="contained" color="primary" onClick= { () => this.logout() }>Sair</Button><br></br>
            </div>
        );
    }
}

export default withRouter(Dashboard);