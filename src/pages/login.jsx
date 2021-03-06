import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import loginCss from '@/assets/style/login.less'

export default class Index extends Component {
    render(){
        return(
            <div className={loginCss.login_box}>
                <div className={loginCss.title}>登录</div>
                <form className={loginCss.form}>
                    <div className={loginCss.item}>
                        <input type="text" placeholder="请输入账号" />
                    </div>
                    <div className={loginCss.item}>
                        <input type="password" placeholder="请输入密码" />
                    </div>
                    <div className={loginCss.item +' '+ loginCss.btn_box}>
                        <button className={loginCss.btn} type="submit">确认</button>
                    </div>
                </form>
                <div className={`${loginCss.link} clearfix`}>
                    <Link to='/resetPasswd' className="fl">忘记密码</Link>
                    <Link to='/register' className="fr">注册</Link>
                </div>
            </div>
        );
    }
}