//用户相关请求模块


//用户登录
import request from "@/utils/request.js";

export const login = data => {
  return   request({
        method: "POST",
        url: "/mp/v1_0/authorizations",
        data: data
      })
    
}
//获取用户信息


export const getUserProfile = () => {
  const user=JSON.parse(Window.localStorage.getItem('user'))
  return   request({
        method: "get",
    url: "/mp/v1_0/user/profile",
    headers: {
      //后端要求把需要授权的用户身份放到请求头中
      //axios 可以通过 HEADERS 设置请求头
      //属性名：Authorization 接口要求的
      //属性值：Bearer空格token数据
      //Bearer 就是持票人的意思  就好比学生证上写了“学生证”
          Authorization:`Bearer ${user.token}`
        }
        
      })
    
}

//修改用户信息