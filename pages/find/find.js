// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:[
      { name: "推荐", type: "recommend"},
      { name: "旅行", type: "tarvel"},
      { name: "丽人", type: "beauty"},
      { name: "电影", type: "film"},
      { name: "结婚", type: "merry"},
      { name: "购物", type: "shopping"},
      { name: "教培", type: "educate"},
    ],
    currentIndex:0,
    currentType: "recommend",
    itemList:{
      "recommend": [
        {
          img: '../../images/find/img1.jpg',
          descript: '我一个女孩子自己住，大半夜要吓死我啊。',
          avatar: '../../images/find/img1.jpg',
          name:"张三",
          stars: 14
        },
        {
          img: '../../images/find/img2.jpg',
          descript: '酒店位于杭州市上城区解放路与浣纱路交叉口，地处繁华的龙翔桥商业中心',
          avatar: '../../images/find/img2.jpg',
          name: "李四",
          stars: 37
        },
        {
          img: '../../images/find/img3.jpg',
          descript: '我一个朋友在他家买过，所以推荐我的，和店员在网上了解了一下，今天特地和老公过去看了实物，产品不算很多，不过品质不错',
          avatar: '../../images/find/img3.jpg',
          name: "钱多多",
          stars: 62
        },
        {
          img: '../../images/find/img4.jpg',
          descript: '这次主要给孩子们买家具，想买实木的，又想定制市场上很少有两者完美结合的，乐领做到了，所以我们毫不犹豫选择乐领。',
          avatar: '../../images/find/img4.jpg',
          name: "佳_98097",
          stars: 3
        },
        {
          img: '../../images/find/img5.jpg',
          descript: '选南鸿之前看过好几家新兴的互联网整装公司，感觉不太放心，最后还是选了南鸿了。',
          avatar: '../../images/find/img5.jpg',
          name: "不知道取名",
          stars: 12
        },
      ],
      "tarvel": [
        {
          img: '../../images/find/img6.jpg',
          descript: '暂无评论',
          avatar: '../../images/find/img6.jpg',
          name: "aaa",
          stars: 35
        },
        {
          img: '../../images/find/img7.jpg',
          descript: '风景不错，强烈推荐！',
          avatar: '../../images/find/img7.jpg',
          name: "匿名用户",
          stars: 24
        },
        {
          img: '../../images/find/img8.jpg',
          descript: '风景优雅',
          avatar: '../../images/find/img8.jpg',
          name: "匿名用户",
          stars: 12
        },
        {
          img: '../../images/find/img9.jpg',
          descript: '好，很好，非常好。',
          avatar: '../../images/find/img9.jpg',
          name: "匿名用户",
          stars: 23
        },
        {
          img: '../../images/find/img10.jpg',
          descript: '带老妈在杭州转转，因为天气不是很好，景区也比较大，妈妈身体也不适合这么大的运动量，选择坐游览小车。',
          avatar: '../../images/find/img10.jpg',
          name: "毛儿酱",
          stars: 12
        },
      ],
      "beauty": [
        {
          img: '../../images/find/beauty.jpg',
          descript: '黑长直了很久，和闺蜜一起来改变一下。',
          avatar: '../../images/find/beauty.jpg',
          name: "匿名用户",
          stars: 37
        }
      ],
      "film": [
        {
          img: '../../images/find/film.jpg',
          descript: '之前很担心这个系列烂尾，但看完觉得足够给观众交差了。',
          avatar: '../../images/find/film.jpg',
          name: "天蓬元帅",
          stars: 25
        }
      ],
      "merry": [
        {
          img: '../../images/find/merry.jpg',
          descript: '店里装饰简单大气，摄影大师房翔是佳丽的大boss，有看到简介和佳丽发展史，28年的摄影店！',
          avatar: '../../images/find/merry.jpg',
          name: "lalayuki",
          stars: 52
        }
      ],
      "shopping": [
        {
          img: '../../images/find/shopping.jpg',
          descript: '花新鲜，很漂亮，店家服务态度好。',
          avatar: '../../images/find/shopping.jpg',
          name: "L九六一",
          stars: 14
        }
      ],
      "educate": [
        {
          img: '../../images/find/edu.jpg',
          descript: '店铺装修很棒，老师很好',
          avatar: '../../images/find/edu.jpg',
          name: "匿名用户",
          stars: 32
        }
      ],
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
  titleClick:function(event){
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