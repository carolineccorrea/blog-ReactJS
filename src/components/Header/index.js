import React from 'react';
import {Link} from 'react-router-dom'
import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import './header.css'
function Header(){
        return (
            <AppBar position="static">
                <Toolbar>
                <header id="main-header">
                <div className="header-content">
                    <Link to='/'>
                            BLOG
                        </Link>
                        <Link to='/login'>
                            ENTRAR
                        </Link>

                </div>
            </header>
                    
                </Toolbar>
            </AppBar>
        );

}

export default Header;