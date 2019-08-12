import React, { Component } from 'react';
import firebase from '../../firebase';
import './home.css';

class Home extends Component {

    state = {
        posts: []
    };

    componentDidMount(){
        firebase.app.ref('posts').once('value', (snapshot) =>{
            let state = this.state;
            state.posts =[];


                snapshot.forEach((childItem)=>{
                    state.posts.push({
                        key: childItem.key,
                        imagem: childItem.val().imagem,
                        titulo: childItem.val().titulo,
                    })
                });
        this.setState(state);        
        });


    }

    render() {
        return (
            <section>
            {this.state.posts.map((post)=>{
                return (
                    <article key={post.key}>
                        <header>
                            <div>
                                <p><h3> >>>> BEM VINDO À HOME...</h3></p>
                                <h3>>>> FAÇA O LOGIN OU REGISTRE-SE...</h3>
                                <strong>{post.titulo}</strong>
                                <strong>{post.imagem}</strong>
                            </div>
                        </header>
                    </article>
                )
            })}
            
        </section>
        );
    }
}

export default Home;