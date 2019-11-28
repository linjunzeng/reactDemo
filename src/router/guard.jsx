import React, { Component } from 'react'
import {Route, withRouter } from 'react-router-dom'

class Guard extends Component {
    constructor(){
        super();
    }
    UNSAFE_componentWillMount (){
        let mate = this.props.mate;
        
        if(this.props.path === '/'){
            this.props.history.replace('/index');
        }else if(mate && mate.isLogin){
            this.props.history.replace('/login');
        }
        document.title = mate && mate.title || 'title';
    }
    render() {
        console.log({...this.props});
        
        return (
            <Route  {...this.props}  />
        )
    }
}

export default withRouter(Guard)