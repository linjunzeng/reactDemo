import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import cssobj from '@/assets/style/index.less'


export default class Index extends Component {
    render(){
        return(
            <div>
                <h2 className={cssobj.aa}>Index</h2>
                <button onClick={this.goRouter}>点击</button>
                <NavLink to='/inbox'>inbox</NavLink>
            </div>
        );
    }
    goRouter(){
        console.log(123);
    }
}