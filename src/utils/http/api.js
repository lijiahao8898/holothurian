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

    // 更新购物车数量
    updateCartItemNumber (params) {
        return this.request({
            url: `carts`,
            method: 'put',
            data: {
                ...params
            }
        });
    }

    // 删除购物车商品
    deleteCartItem (params) {
        return this.request({
            url: `carts?id=${params.id}`,
            method: 'delete',
            data: {
                ...params
            }
        })
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

    // 获取省市区地址库
    getAddress (params) {
        return this.request({
            url: 'address',
            method: 'get',
            data: {
                ...params
            }
        })
    }

    // 新增收货地址
    addAddress (params) {
        return this.request({
            url: 'recipient-address',
            method: 'post',
            data: {
                ...params
            }
        })
    }

    editAddress (params) {
        return this.request({
            url: 'recipient-address',
            method: 'put',
            data: {
                ...params
            }
        })
    }

    deleteAddress (params) {
        return this.request({
            url: `recipient-address?id=${params.id}`,
            method: 'delete',
            data: {
                ...params
            }
        })
    }

    // 获取已经录入的地址数据
    getRecipientAddress (params) {
        return this.request({
            url: 'recipient-address',
            method: 'get',
            data: {
                ...params
            }
        })
    }

    // 订单
    createOrders (params) {
        return this.request({
            url: 'orders',
            method: 'post',
            data: {
                ...params
            }
        })
    }

    // 订单
    getOrderLists (params) {
        return this.request({
            url: 'orders/list',
            method: 'post',
            data: {
                ...params
            }
        })
    }
}

export default API;
