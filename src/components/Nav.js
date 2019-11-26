import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
    render(){
        return(
            <div>
                <h2>Nav</h2>
                <ul>
                    <li><NavLink exact to='/'>首页</NavLink></li>
                    <li><NavLink to='/inbox'>Inbox</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/redirect'>redirect</NavLink></li>
                    <li><NavLink to='/aaa'>404</NavLink></li>
                </ul>
            </div>
        );
    }
}