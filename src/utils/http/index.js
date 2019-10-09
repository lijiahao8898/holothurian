import config from './config';
import wepy from 'wepy';

class HTTP {
    request ({url, method = 'GET', data = {}, header}) {
        return new Promise((resolve, reject) => {
            wepy.request({
                url: config.baseUrl + url,
                method: method.toUpperCase(),
                data: data,
                header: header
            }).then((res) => {
                if (res.data.code === 200) {
                    resolve(res.data);
                } else {
                    resolve(res.data);
                    const code = res.statusCode;
                    switch (code) {
                        case 401:
                            // 当前为登录
                            // wepy.navigateTo({url: `/pages/authorization?redirectUrl=`});
                            break;
                        case 405:
                            break;
                        case 500:
                            wepy.showToast({
                                title: '服务端异常，请联系管理员',
                                icon: 'none'
                            });
                            break;
                        default:
                            wx.showToast({
                                title: res.data.message,
                                icon: 'none'
                            });
                            break;
                    }
                }
            }).catch((err) => {
                reject(err);
                wx.showToast({
                    title: err.data.message || '系统出现未知错误',
                    icon: 'none'
                });
            });
        });
    }
}

export default HTTP;
