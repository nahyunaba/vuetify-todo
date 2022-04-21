import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headers: [
      // 标题
      {
        text: "日期",
        align: "start",
        value: "date",
      },
      {text: "订单编号", value: "OrderNumber"},
      {text: "抖音昵称", value: "nickname"},
      {text: "收件人", value: "Receiver"},
      {text: "快递单号", value: "TrackingNumber"},
      {text: "状态", value: "status"},
      {text: "商品内容", value: "product"},

      {text: "Actions", value: "actions", sortable: false},
    ],

    product: {
      //库存关联
      pr_id: "",
      pr_date: "",
      pr_CHName: "新款运动鞋", //商品名称-中文
      pr_KOName: "에너자이트 슈퍼", //商品名称-韩文
      pr_ItemNumber: "SN123RRN21", //商品编号
      pr_price_KOR: 189000, //元机-韩币
      pr_price_RMB: 1000, //原价-人民币
      pr_inprice: 100, //进价
      pr_outprice: 250, //出货价格
      pr_margin: 150, //利润
      pr_img: "/SN123RRN21.png", //img
      pr_instock: 2,
      pr_stock_position: "china", //korea ||china
      pr_stock_remark: "需要包装纸", //备注
    },

    oerderd: {
      // 订单关联
      order_id: "1", //
      date: "2021-03-03", //日期
      OrderNumber: "202108070011", //"订单编号"
      nickname: "kim",
      Receiver: "金雄", //"收货人"
      Address: "吉林省延吉", //"地址"
      Phone: "1372**", //"电话"
      TrackingNumber: "京东:7755***fs44", //"快递单号"
      status: "unorderd", //  unorderd,orderd,isgoing,instock
      statusValue: "未",
      product: "(在商品库)",
    },
  },
  // getters: {},
  mutations: {},

  // actions: {},
  // modules: {},
});
