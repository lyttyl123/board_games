const app = getApp()
const gameRules = require('../../data/gameRules')

Page({
  data: {
    gameInfo: null
  },

  onLoad() {
    console.log('规则页面加载')
    
    // 获取选中的游戏信息
    const selectedGame = wx.getStorageSync('selectedGame')
    console.log('选中的游戏：', selectedGame)
    
    if (!selectedGame) {
      wx.showToast({
        title: '未选择游戏',
        icon: 'none'
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 1500)
      return
    }

    // 从本地数据获取游戏信息
    const gameInfo = gameRules[selectedGame]
    console.log('游戏信息：', gameInfo)
    
    if (gameInfo) {
      // 确保rules字段存在
      if (!gameInfo.rules) {
        gameInfo.rules = {
          setup: '',
          turns: '',
          victory: '',
          tips: ''
        }
      }
      
      // 设置初始数据
      this.setData({ 
        gameInfo
      }, () => {
        console.log('数据设置完成：', this.data)
        console.log('游戏名称：', this.data.gameInfo.name)
        console.log('游戏规则：', this.data.gameInfo.rules)
      })
    } else {
      wx.showToast({
        title: '游戏信息加载失败',
        icon: 'none'
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 1500)
    }
  },

  goToGame() {
    console.log('返回游戏页面')
    wx.navigateBack()
  },

  goToHome() {
    console.log('返回首页')
    wx.navigateBack({
      delta: 2
    })
  },

  onShareAppMessage() {
    const { gameInfo } = this.data
    return {
      title: `${gameInfo.name}规则 - 桌游规则助手`,
      path: '/pages/index/index'
    }
  }
}) 