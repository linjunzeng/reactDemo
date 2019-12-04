import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import cssobj from '@/assets/style/index.less'

export default class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '这是标题吗'
        }
    }
    render(){
        return(
            <div>
                <h2 className={cssobj.aa}>{this.state.title}</h2>
                <button onClick={() => { this.goRouter()}}>点击</button>
                <NavLink to='/inbox'>inbox</NavLink>
            </div>
        );
    }
    goRouter(){
        this.setState({
            title: 123
        })
    }
}