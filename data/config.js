// 引入入口
var data = {
  // url为请求的地址，key为查询数据的入口
  // get请求api
  'get': [
    {
      'url': '/api/seller',
      'key': 'seller'
    },
    {
      'url': '/api/goods',
      'key': 'goods'
    },
    {
      'url': '/api/ratings',
      'key': 'ratings'
    }
  ],
  'post': [
    {
      'url': '/api/seller',
      'key': 'seller'
    },
    {
      'url': '/api/goods',
      'key': 'goods'
    },
    {
      'url': '/api/ratings',
      'key': 'ratings'
    }
  ]
};
module.exports = data;
