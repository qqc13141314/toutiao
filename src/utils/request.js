import axios from 'axios'
const request = axios.create({
    //创建了一个axios实例
    //通过这个实例去发送请求，把需要配置的配置给这个实例
    baseURL: 'http://ttapi.research.itcast.cn/' //请求的基本地址


})

export default request
//谁要使用谁加载
// import request from'request.js'
// request.xxx
// request({
//     method:'',
//     url:''
// })