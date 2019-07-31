import React from 'react';
import {Link} from 'react-router-dom'
import './header.css'
function Header(){
        return (
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
        );

}

export default Header;