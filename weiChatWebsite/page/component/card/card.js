// page/component/card/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    api:[
      {
        props:'src',
        defaultValue:'空',
        dataType:'string',
        description:"图片地址"
      },
      {
        props: 'title',
        defaultValue: '空',
        dataType: 'string',
        description: "标题"
      },
      {
        props:'description',
        defaultValue:'空',
        dataType:'string',
        description:"描述"
      },
      {
        props: 'remark',
        defaultValue: '空',
        dataType: 'string',
        description: "备注"
      }
    ]
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
  
  }
})