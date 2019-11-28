import React, { Component } from 'react'
import {HashRouter, Route, Switch, withRouter } from 'react-router-dom'

import Index from '@/pages/index.jsx'
import Inbox from '@/pages/inbox.jsx'
import Login from '@/pages/login.jsx'
import Notfound from '@/pages/notfound.jsx'


const routerConfig = [
    {
        path: "/",
        component: Index,
        exact: true,
        mate: {
            title: "首页"
        }
    },
    {
        path: "/inbox",
        component: Inbox,
        mate: {
            title: "信息",
            isLogin: true
        }
    },
    {
        path: "/login",
        component: Login,
        mate: {
            title: "登录"
        }
    },
    {
        component: Notfound,
        mate: {
            title: "404"
        }
    }
]

class RouterGuard extends Component {
    componentWillMount(){
        let mate = this.props.mate;
        Redirect('/login')
        if(mate.isLogin){
            // replace('/login')
            return false;
        }
        document.title = mate.title;
    }
    render() {
        return (
            <Route {...this.props} />
        )
    }
}


export default class Router extends Component {
    render() {
        return(
            <HashRouter>
                <Switch>
                    { routerConfig.map((item, key) => {
                        return <RouterGuard  {...item} key={key} />
                    }) }
                </Switch>
            </HashRouter>
        )
    }
}