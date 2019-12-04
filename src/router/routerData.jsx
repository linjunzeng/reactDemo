export default [
    {
        path: '/',
        name: 'index',
        exact: true,
        mate: {
            title: '首页'
        }
    },
    {
        path: '/inbox',
        name: 'inbox',
        mate: {
            title: '信息',
            isLogin: true
        }
    },
    {
        path: '/login',
        name: 'login',
        mate: {
            title: '登录'
        }
    },
    {
        path: '/resetPasswd',
        name: 'resetPasswd',
        mate: {
            title: '重置密码'
        }
    },
    {
        path: '/register',
        name: 'register',
        mate: {
            title: '注册'
        }
    },
    {
        name: 'notfound',
        mate: {
            title: '404'
        }
    }
]