import React from 'react';
import './index.css';
import { BrowserRouter as Router, Link, BrowserRouter } from 'react-router-dom';
class Menu extends React.Component{
    render(){
        return(
            <div className="header">
                <Link to="/">Home</Link>
                <h1 className="header__title">Лабoраторні роботи БПЗ</h1>
            </div>
        );
    }
}
export default Menu;