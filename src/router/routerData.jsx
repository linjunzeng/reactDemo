import Index from '@/pages/index.jsx'
import Inbox from '@/pages/inbox.jsx'
import Login from '@/pages/login.jsx'
import Notfound from '@/pages/notfound.jsx'

export default [
    {
        path: "/",
        exact: true
    },
    {
        path: "/index",
        component: Index,
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