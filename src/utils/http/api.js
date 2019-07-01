import HTTP from './index';

const formUrlencoded = {
    'content-type': 'application/x-www-form-urlencoded',
};

class API extends HTTP {
    // 授权登录
    authorization (params) {
        return this.request({
            url: 'user/login',
            method: 'post',
            data: {
                ...params
            },
            header: formUrlencoded
        });
    }

    // 获取品牌列表
    getBrandList (params) {
        return this.request({
            url: 'brands',
            data: {
                ...params
            },
            header: formUrlencoded
        });
    }

    // 获取首页信息
    getIndexInformation (params) {
        return this.request({
            url: 'index',
            method: 'get',
            data: {
                ...params
            }
        });
    }

    // 获取商品列表
    getGoodsList (params) {
        return this.request({
            url: 'items/list',
            method: 'post',
            data: {
                ...params
            }
        });
    }

    // 获取商品详情
    getGoodsDetail (params) {
        return this.request({
            url: `items/${params.goodsId}`,
            method: 'get',
            data: {
                ...params
            }
        });
    }

    // 加入购物车
    addGoodsToCart (params) {
        return this.request({
            url: `carts`,
            method: 'post',
            data: {
                ...params
            }
        });
    }

    // 获取购物车列表
    getCartList (params) {
        return this.request({
            url: `carts`,
            method: 'get',
            data: {
                ...params
            }
        });
    }

    // 获取收货地址列表
    getAddressList (params) {
        return this.request({
            url: `recipient-address/list`,
            method: 'get',
            data: {
                ...params
            }
        });
    }
}

export default API;
