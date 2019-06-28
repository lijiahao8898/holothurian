import HTTP from './index';

class API extends HTTP {
    //获取首页数据
    getHome (params) {
        return this.request({
            url: 'home',
            ...params
        });
    }

    authorization (params) {
        return this.request({
            url: 'user/login',
            method: 'post',
            data: {
                ...params
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded',
            }
        });
    }

    getBrandList (params) {
        return this.request({
            url: 'brands',
            data: {
                ...params
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded',
            }
        });
    }

    getIndexInformation (params) {
        return this.request({
            url: 'index',
            method: 'get',
            data: {
                ...params
            }
        });
    }

    getGoodsList (params) {
        return this.request({
            url: 'items/list',
            method: 'post',
            data: {
                ...params
            }
        });
    }

    getGoodsDetail(params) {
        return this.request({
            url: `items/${params.goodsId}`,
            method: 'get',
            data: {
                ...params
            }
        });
    }
}

export default API;
