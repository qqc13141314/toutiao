//文章请求相关模块
import request from '@/utils/request'

//获取文章列表
export const getArticles = params => {
    return   request({
          method: "get",
          url: "/mp/v1_0/articles",
          params
          //body 参数使用data 设置    Query参数使用 params 设置  Headers 参数使用 headers设置
        })
      
  }
