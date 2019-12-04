import React, { Component } from 'react'
import {Route, withRouter } from 'react-router-dom'
import Loadable from 'react-loadable';

import Loading from '@/components/loading.jsx'


class Guard extends Component {
    constructor(props){
        super(props);
        // 路由守卫
        let mate = props.mate;
        
        if(mate && mate.isLogin){
            props.history.replace('/login');
        }

        document.title = mate && mate.title || 'title';
    }
    render() {
        return (
            <Route path={this.props.path} component={Loadable({
                loader: () => import(`@/pages/${this.props.name}.jsx`),
                loading: Loading
            })} />
        )
    }
}

export default withRouter(Guard)