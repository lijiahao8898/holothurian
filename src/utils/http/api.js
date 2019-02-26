import HTTP from './index';

class API extends HTTP {
  //获取首页数据
  getHome(params) {
    return this.request({
      url: 'home',
      ...params
    })
  }
}

export default API;
