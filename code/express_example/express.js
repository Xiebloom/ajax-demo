// 引入 express
const express = require('express')
    // 创建应用对象
const app = express();
// 创建路由规则
app.get('/', (request, response) => {

    response.setHeader('Access-control-Allow-Origin', '*')
    response.send('hello ajax');
});
// 监听端口服务
app.listen(8000, () => {
    console.log('8000');
})