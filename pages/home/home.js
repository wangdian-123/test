// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var that = this;
    wx.request({
      url: 'http://movie.1808a.com/create',
      method: 'GET',  //方法分GET和POST，根据需要写
      header: {       //下面是固定格式，照搬
        'Content-Type': 'application/json'
      },
      complete:function(res){
        console.log(res.data.data);//调.data出来的数据在控制台显示，方便查看
        that.setData({
          news: res.data.data,
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})