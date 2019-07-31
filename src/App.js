import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import firebase from './firebase'
import Home from './components/Home'
import Login from './components/Login'
import Header from './components/Header'

class App extends Component {
    state = {
        firebaseinit: false
    }

    componentDidMount(){
        firebase.isInit().then(resultado =>{
            this.setState({firebaseinit: resultado})
        })

    }
    render() {
        return this.state.firebaseinit !== false ? (
            <BrowserRouter>
            <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </BrowserRouter>
        ) : (
            <h1>Carregando........</h1>
        )
    }
}

export default App;
