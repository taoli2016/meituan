// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [
      { name: "全部", type: "all" },
      { name: "待付款", type: "pay" },
      { name: "待使用", type: "use" },
      { name: "待评价(15)", type: "evaluate" },
      { name: "退款/售后", type: "afterSale" },
    ],
    currentIndex: 0,
    currentType: "all",
    itemList: {
      "all": [
        {
          name:"大汉烧烤(长河店)",
          avatar:'../../images/find/img1.jpg',
          imgPath:'../../images/find/img1.jpg',
          time:"2020-01-05 21:11",
          price:"¥19.33",
          assess:'待评价'
        },
        {
          name: "单车",
          avatar: '../../images/find/img2.jpg',
          imgPath: '../../images/find/img2.jpg',
          time: "2020-01-01 21:11",
          price: "¥1.00",
          assess: '已完成'
        },
        {
          name: "正新鸡排",
          avatar: '../../images/find/img3.jpg',
          imgPath: '../../images/find/img3.jpg',
          time: "2019-12-20 17:12",
          price: "¥30.50",
          assess: '待评价'
        },
        {
          name: "翻滚吧拌饭",
          avatar: '../../images/find/img4.jpg',
          imgPath: '../../images/find/img4.jpg',
          time: "2019-12-01 12:31",
          price: "¥27.33",
          assess: '待评价'
        },
      ],
      "pay": [
        {
          name: "翻滚吧拌饭",
          avatar: '../../images/find/img4.jpg',
          imgPath: '../../images/find/img4.jpg',
          time: "2019-12-01 12:31",
          price: "¥27.33",
          assess: '待评价'
        }
      ],
      "use": [
        {
          name: "正新鸡排",
          avatar: '../../images/find/img3.jpg',
          imgPath: '../../images/find/img3.jpg',
          time: "2019-12-20 17:12",
          price: "¥30.50",
          assess: '待评价'
        }
      ],
      "evaluate": [
        {
          name: "单车",
          avatar: '../../images/find/img2.jpg',
          imgPath: '../../images/find/img2.jpg',
          time: "2020-01-01 21:11",
          price: "¥1.00",
          assess: '已完成'
        }
      ],
      "afterSale": [
        {
          name: "大汉烧烤(长河店)",
          avatar: '../../images/find/img1.jpg',
          imgPath: '../../images/find/img1.jpg',
          time: "2020-01-05 21:11",
          price: "¥19.33",
          assess: '待评价'
        }
      ]
    },
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
  titleClick: function (event) {
    this.setData({
      currentIndex: event.currentTarget.dataset.index,
      currentType: event.currentTarget.dataset.type,
    })
    console.log(event.currentTarget.dataset.type)
  },
  pagechange: function (e) {
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 2
      // this.setData({
      //   currentIndex: currentPageIndex
      // })
    }
  },
})