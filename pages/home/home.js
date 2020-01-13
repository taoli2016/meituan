// pages/home/home.js

const app = getApp()

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    headerTop:"0rpx",
		userInfo: {},
    iptVal:'',
    place:'杭州',
    weather:"多云",
    temperature:"16℃",
    searchIptHolder:'大汉烧烤(外卖满38减22)',
    littleIcon:[
      { iconPath: "../../images/home/扫一扫.png", text:"扫一扫"},
      { iconPath: "../../images/home/条形码.png", text: "付款码" },
      { iconPath: "../../images/home/卡券.png", text: "红包/卡券" },
      { iconPath: "../../images/home/自行车.png", text: "骑车" },
    ],
    firstGroup:[
      { iconPath: "../../images/home/美食.png", color: "#EA8A42", text: "美食"},
      { iconPath: "../../images/home/电影.png", color: "#EC623C",text: "电影/演出" },
      { iconPath: "../../images/home/酒店.png", color: "#926448",text: "酒店住宿" },
      { iconPath: "../../images/home/茶.png", color: "#6BB795",text: "休闲玩乐" },
      { iconPath: "../../images/home/外卖.png", color: "#F1CA5D",text: "外卖" },
    ],
    secondGroup:[
      { iconPath: "../../images/home/打车.png", text: "打车" },
      { iconPath: "../../images/home/美发.png", text: "丽人/美发" },
      { iconPath: "../../images/home/旅游.png", text: "周边游/旅游" },
      { iconPath: "../../images/home/借钱.png", text: "借钱/信用卡" },
      { iconPath: "../../images/home/机票.png", text: "火车票/机票" },
      { iconPath: "../../images/home/春树.png", text: "免费领水果" },
      { iconPath: "../../images/home/结婚证书.png", text: "结婚/摄影" },
      { iconPath: "../../images/home/红包.png", text: "红包签到" },
      { iconPath: "../../images/home/生活.png", text: "生活服务" },
      { iconPath: "../../images/home/更多.png", text: "更多" },
    ],
    "bnrUrl": [
      { url: "../../images/home/swiper1.jpg"}, 
      { url: "../../images/home/swiper2.jpg" }, 
      { url: "../../images/home/swiper3.jpg" }, 
      { url: "../../images/home/swiper4.jpg" },
      { url: "../../images/home/swiper5.png" },   
    ],
    "advertiseBgI":"../../images/home/advertise.jpg",
    "goodsList":[
      { 
        url: "../../images/home/dahan.jpg", 
        discript: "滨江区烤串口碑第一", 
        name: "大汉烧烤(长河店)", 
        score: "4.7分", 
        tag: "点外卖·30分钟送达", 
        tagList: [{ text: "38减22" }, { text: "78减37" }]
      },
      {
        url: "../../images/home/zhengxin.jpg",
        discript: "南瓜饼好吃啊啊啊啊啊",
        name: "正新鸡排(滨兴店)",
        score: "4.5分",
        tag: "点外卖·30分钟送达",
        tagList: [{ text: "20减5" }, { text: "30减12" }]
      },
      {
        url: "../../images/home/juewei.jpg",
        discript: "支持自取",
        name: "绝味鸭脖(月明店)",
        score: "4.6分",
        tag: "点外卖·30分钟送达",
        tagList: [{ text: "35减18" }, { text: "69减30" }]
      },
      {
        url: "../../images/home/muyeding.jpg",
        discript: "支持自取",
        name: "木叶町(舟山店)",
        score: "4.5分",
        tag: "点外卖·30分钟送达",
        tagList: [{ text: "58减8" }, { text: "169减30" }]
      },
      {
        url: "../../images/home/yunzhongcaiguan.jpg",
        discript: "良心商家",
        name: "云中菜馆(万马店)",
        score: "4.7分",
        tag: "点外卖·30分钟送达",
        tagList: [{ text: "65减12" }, { text: "120减20" }]
      },
      {
        url: "../../images/home/jiangxiaolu.jpg",
        discript: "老板人很热情",
        name: "江小鲈(武林店)",
        score: "4.8分",
        tag: "点外卖·30分钟送达",
        tagList: [{ text: "30减6" }, { text: "69减15" }]
      },
      {
        url: "../../images/home/huangniurouguan.jpg",
        discript: "也太好吃了吧",
        name: "黄牛肉馆(武林店)",
        score: "4.5分",
        tag: "点外卖·30分钟送达",
        tagList: [{ text: "52减8" }, { text: "98减15" }]
      },
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
					hasUserInfo: true
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
    // console.log('zz', wx.getSystemInfoSync().windowHeight)
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
		  hasUserInfo: true
		})
	},
})