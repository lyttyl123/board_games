const app = getApp()
const gameRules = require('../../data/gameRules')

Page({
  data: {
    gameInfo: null,
    currentTab: 0,
    showMenu: false,
    isLoading: true
  },

  onLoad(options) {
    console.log('页面加载参数：', options)

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
      // 确保details字段存在
      if (!gameInfo.details) {
        gameInfo.details = {
          background: '',
          features: {
            dynamicBoard: '',
            strategies: {
              resourceMonopoly: '',
              playStyles: []
            }
          }
        }
      }
      if (!gameInfo.details.features) {
        gameInfo.details.features = {
          strategies: { playStyles: [] },
          dynamicBoard: '默认说明文字'
        }
      } 
      // 确保tokens字段存在
      if (!gameInfo.tokens) {
        gameInfo.tokens = []
      }
      
      // 设置初始数据
      this.setData({ 
        gameInfo,
        isLoading: false 
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

  // 切换标签页
  switchTab(e) {
    console.log('切换标签页：', e.currentTarget.dataset.index)
    const index = parseInt(e.currentTarget.dataset.index)
    this.setData({
      currentTab: index
    }, () => {
      console.log('当前标签页：', this.data.currentTab)
    })
  },
  onReady() {
    this.setData({ currentTab: 0 }) // 强制触发swiper更新
  },
  // 处理滑动切换
  handleSwiperChange(e) {
    console.log('滑动切换：', e.detail.current)
    this.setData({
      currentTab: e.detail.current
    }, () => {
      console.log('当前标签页：', this.data.currentTab)
    })
  },

  // 切换菜单显示状态
  toggleMenu() {
    console.log('切换菜单状态')
    this.setData({
      showMenu: !this.data.showMenu
    }, () => {
      console.log('菜单状态：', this.data.showMenu)
    })
  },

  // 返回首页
  goToHome() {
    console.log('返回首页')
    this.setData({ showMenu: false })
    wx.navigateBack()
  },

  // 查看规则
  goToRules() {
    console.log('查看规则')
    this.setData({ showMenu: false })
    wx.navigateTo({
      url: '/pages/rule/rule'
    })
  },

  // 分享
  onShareAppMessage() {
    const { gameInfo } = this.data
    return {
      title: `${gameInfo.name} - 桌游规则助手`,
      path: '/pages/index/index'
    }
  }
})