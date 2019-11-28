import React, { Component } from 'react'
import {HashRouter, Switch } from 'react-router-dom'

import routerData from '@/router/routerData.jsx'
import Guard from '@/router/guard.jsx'


export default class Router extends Component {
    render() {
        return(
            <HashRouter>
                <Switch>
                    { routerData.map((item, key) => {
                        return <Guard  {...item} key={key} />
                    }) }
                </Switch>
            </HashRouter>
        )
    }
}