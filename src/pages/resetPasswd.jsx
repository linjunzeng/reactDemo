import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import loginCss from '@/assets/style/login.less'

export default class Index extends Component {
    render(){
        return(
            <div className={loginCss.login_box}>
                <div className={loginCss.title}>找回密码</div>
                <form className={loginCss.form}>
                    <div className={loginCss.item}>
                        <input type="password" placeholder="请输入新密码" />
                    </div>
                    <div className={loginCss.item}>
                        <input type="password" placeholder="请再次输入密码" />
                    </div>
                    <div className={loginCss.item +' '+ loginCss.btn_box}>
                        <button className={loginCss.btn} type="submit">取消</button>
                        <button className={loginCss.btn} type="submit">确认</button>
                    </div>
                </form>
            </div>
        );
    }
}