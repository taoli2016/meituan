// pages/user/user.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    nickName:'',
    userIcon:[
      { icon: "../../images/user/收藏.png", title:"收藏"},
      { icon: "../../images/user/评价.png", title: "评价" },
      { icon: "../../images/user/红包.png", title: "红包/卡券" },
      { icon: "../../images/user/消息.png", title: "消息" },
    ],
    packetList:[
      { price: "3000", unit: "", title: "借钱", descript: "剩余可借(元)" },
      { price: "10", unit: "万", title: "美团信用卡", descript: "最高额度(元)" },
      { price: "165", unit: "元", title: "美食享优惠", descript: "最高随机减" },
      { price: "28", unit: "元", title: "开买单", descript: "领新手红包" },
    ],
    contentList:[
      { icon: '../../images/user/礼物.png', title: "邀请有礼" },
      { icon: '../../images/user/充值.png', title: "手机充值" },
      { icon: '../../images/home/机票.png', title: "火车票/机票" },
      { icon: '../../images/user/跑步.png', title: "袋鼠快跑" },
      { icon: '../../images/user/公交.png', title: "公交" },
      { icon: '../../images/user/税收财务.png', title: "新个税计算" },
      { icon: '../../images/user/天气.png', title: "墨迹天气" },
      { icon: '../../images/home/春树.png', title: "免费领水果" },
      { icon: '../../images/user/会员.png', title: "会员中心" },
      { icon: '../../images/user/公益.png', title: "美团公益" },
      { icon: '../../images/user/闪电.png', title: "闪付" },
      { icon: '../../images/user/流量.png', title: "免流用美团" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          nickName: res.rawData.nickName
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            nickName:res.userInfo.nickName
          })
        }
      })
    }
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
  getUserInfo: function(e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
		  userInfo: e.detail.userInfo,
		  hasUserInfo: true,
		})
	},
})