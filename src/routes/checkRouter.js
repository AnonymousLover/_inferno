/*
 * 按需路由配置
 * */
module.exports = {
    path: '/check',//路径定义
    getComponent(nextState, cb) {//获取模块回调
        require.ensure([], () => {
            cb(null, require('../pages/checkPage').default)
        })
    },
    childRoutes: []
}
