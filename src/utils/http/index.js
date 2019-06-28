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
                    reject(res);
                    console.log(res);
                    wx.showToast({
                        title: res.data.message,
                        icon: 'none'
                    });
                }
            }).catch((err) => {
                reject(err);
                console.log(err);
                wx.showToast({
                    title: err.data.message,
                    icon: 'none'
                });
            });
        });
    }
}

export default HTTP;
