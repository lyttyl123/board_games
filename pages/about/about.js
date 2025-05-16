const app = getApp()

Page({
  data: {
    // 页面数据
  },

  onLoad() {
    // 页面加载时的逻辑
  },

  goToHome() {
    wx.navigateBack({
      delta: 999
    })
  }
}) 