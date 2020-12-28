//index.js

//获取应用实例
const app = getApp()

Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
    
  },
  onLoad: function (data) {
    var that = this;
    wx.request({
      url: 'http://movie.1808a.com/index',
      method: 'GET',  //方法分GET和POST，根据需要写
      header: {       //下面是固定格式，照搬
        'Content-Type': 'application/json'
      },
      complete:function(res){
        console.log(res.data.data);//调.data出来的数据在控制台显示，方便查看
        that.setData({
          data: res.data.data,
          //因为这个接口比较复杂，所以这里调出的数据是res.data.result.data（当然有些简单的接口就单单 res.data就能调取全部数据，也可以在这里面自定义想要调用的数据），然后把值赋给news，之后对news进行处理即可，具体见wxml 
        })
      },


      success: function (res) {//这里写调用接口成功之后所运行的函数
        console.log("请求成功")
     
      },
      fail: function (res) {//这里写调用接口失败之后所运行的函数
        console.log('.........fail..........');
      }
    })
  },


})
