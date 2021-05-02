// 引入 express
const { response, request } = require('express');
const express = require('express')
    // 创建应用对象
const app = express();
// 创建路由规则
app.get('/server', (request, response) => {
    response.setHeader('Access-control-Allow-Origin', '*')
    setTimeout(() => {
        response.send('hello server' + request.query);
    }, 1000);
});

let data = {
    name: 1234
}

let str = JSON.stringify(data)
app.post('/server', (request, response) => {
    response.setHeader('Access-control-Allow-Origin', '*')
    setTimeout(() => {
        response.send(str);
    }, 1000);

});

// axios server
app.all('/axios-server', (request, response) => {
    response.setHeader('Access-control-Allow-Origin', '*')
    response.setHeader('Access-control-Allow-Headers', '*')
    response.send(request.query);
});
app.all('/axios-server/:id', (request, response) => {
    response.setHeader('Access-control-Allow-Origin', '*')
    response.setHeader('Access-control-Allow-Headers', '*')
    response.send(request.params);
});

// jsonp服务
app.all('/check', (request, response) => {
    const data = {
        exist: 1,
        msg: '已存在'
    };
    let str = JSON.stringify(data);
    response.send(`handle(${str})`);
})

// 监听端口服务
app.listen(8000, () => {
    console.log('8000');
})