// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  formSubmit(res){
    let goods_name = res.detail.value.goods_name
    let goods_price= res.detail.value.goods_price
    let that = this
    wx.chooseImage({
      success (res) {
        let tempFilePaths = res.tempFilePaths
        that.setData({
          img:tempFilePaths
        })
        wx.uploadFile({
          url: 'http://www.wd.com/login/file/uploads', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'img',
          formData: {
            img: tempFilePaths,
            goods_name:goods_name,
            goods_price:goods_price
          },
          success (res){
            const data = res.data
            //do something
          }
        })
      }
    })
  }
})