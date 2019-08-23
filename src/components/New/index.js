import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import firebase from '../../firebase';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';



const containerForm = {
    textAlign:'center',
}


class New extends Component {

    constructor(props){
        super(props);

        this.state = {
            titulo:'',
            img:'',
            descricao:'',
            nome:'fulano',
            alerta:''
        }
        this.cadastrar = this.cadastrar.bind(this);
    }

    componentDidMout(){
        if (!firebase.getCurrent()){
            this.props.history.replace('/');
            return null;
        }
    }

    cadastrar= async(e) =>{
        e.preventDefault();

        if (this.state.titulo !== '' && this.state.img !== '' && this.state.descricao !== ''){
          let posts = firebase.app.ref('posts');
          let chave = posts.push().key;

          await posts.child(chave).set({
              titulo: this.state.titulo,
              imagem: this.state.img,
              descricao: this.state.descricao,
          });
          this.props.history.push('/dashboard')
          alert("Post feito com sucesso!");
        } else {
            this.setState({alerta : 'preencha os campos'});
        }
    }

    render() {
        return (
            <div>
                <header>
                    <Link to="/dashboard">Voltar</Link>
                </header>
                <form onSubmit={this.cadastrar} style={containerForm}>
                <span style={{color:'red'}}>{this.state.alerta}</span><br></br>
                <label>Titulo</label><br/>
                 <div style={{margin: 30}}>  
                  <TextField type="text" placeholder="nome do post" value={this.state.titulo} autoFocus
                  onChange={(e)=>this.setState({titulo: e.target.value})}/>
                </div>
                <label>Imagem</label><br/>        
                 <div style={{margin: 30}}>        
                  <TextField type="text" placeholder="url da imagem" value={this.state.img} autoFocus
                  onChange={(e)=>this.setState({img: e.target.value})}/>
                 </div>
                <label>Descrição</label><br/>        
                 <div style={{margin: 30}}>        
                 <TextareaAutosize rowsMax={5} type="text" placeholder="digite aqui.." value={this.state.descricao} autoFocus
                  onChange={(e)=>this.setState({descricao: e.target.value})}/>
                </div>        
                 <Button type="submit">Cadastrar</Button>
                </form>
            </div>
        );
    }
}

export default withRouter(New);