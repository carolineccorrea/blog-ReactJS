import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import firebase from './firebase'
import Home from './components/Home'
import Login from './components/Login'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import CssBaseline from '@material-ui/core/CssBaseline';
import New from './components/New'

class App extends Component {
    state = {
        firebaseinit: true
    }

    componentDidMount(){
        firebase.isInit().then(resultado =>{
            this.setState({firebaseinit: resultado})
        })

    }
    render() {
        return this.state.firebaseinit !== false ? (
            <React.Fragment>
      <CssBaseline />
            <BrowserRouter>
            <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/dashboard/new" component={New}/>
                    
                </Switch>
            </BrowserRouter>
            </React.Fragment>
        ) : (
            <h1>Carregando........</h1>
        )
        
      
   
    }
}

export default App;
