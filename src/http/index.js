import config from './config';
import wepy from 'wepy';

class HTTP {
  request({url, method = 'GET', data = {}}) {
    return new Promise((resolve, reject) => {
      wepy.request({
        url: config.baseUrl + url,
        method: method,
        data: data,
        success: (res) => {
          if (res.data.success) {
            resolve(res.data.datas);
          } else {
            reject();
            wx.showToast({
              title: res.data.i18nMessage
            })
          }
        },
        fail: (err) => {
          reject();
          wx.showToast({
            title: res.data.i18nMessage
          })
        }
      })
    })

  }
}

export default HTTP;
