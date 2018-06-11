# 包

- dva

向外输出的包

- dva-core

集成redux-saga, redux的包，处理model

- dva-loading

dva-loading插件，处理异步操作的开始和结束状态

- dva-no-router

没有router的dva，适用于react-native等环境

- dva-react-router-3

旧版的react-router与dva集成的包


# dva-core

构造app.model方法(start前和start后), app.unmodel方法
使用redux-saga解决了model层

# dva

连接dva-core和router的方法
向外输出dva方法, 构造app.model, app.start, app.route等方法
patch history对象

高阶组件实现view层
