// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    selectedGame: null
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  onLoad() {
    // 页面加载时的逻辑
  },
  selectGame(e) {
    const game = e.currentTarget.dataset.game
    console.log('选择游戏：', game)
    this.setData({
      selectedGame: game
    })
  },
  startGame() {
    if (!this.data.selectedGame) {
      wx.showToast({
        title: '请先选择游戏',
        icon: 'none'
      })
      return
    }
    
    console.log('开始游戏：', this.data.selectedGame)
    
    // 将选中的游戏信息存储到本地
    wx.setStorageSync('selectedGame', this.data.selectedGame)
    
    // 跳转到游戏主页面
    wx.navigateTo({
      url: '/pages/game/game'
    })
  },
  goToAbout() {
    wx.navigateTo({
      url: '/pages/about/about'
    })
  }
})
