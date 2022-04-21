<template>
  <div>
    <h1>库存管理 页面</h1>
    <v-container class="my-5">
      <v-layout row align-content wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="pr in product" :key="pr">
          <v-card
            hover
            max-width="350"
            max-height="600"
            exact
            class="text-xs-center ma-4 pa-1"
          >
            <v-responsive class="pa-6">
              <v-avatar size="150" class="grey lighten-2">
                <img :src="pr.pr_img" alt="主图" />
              </v-avatar>
            </v-responsive>

            <v-card-text>
              <div class="subheading">
                名 称:
                <span class="grey--text">{{ pr.pr_CHName }}</span>
              </div>
              <div class="subheading">
                품 명:
                <span class="grey--text">{{ pr.pr_KOName }}</span>
              </div>
              <div class="subheading">
                产品编号:
                <span class="grey--text"> {{ pr.pr_ItemNumber }}</span>
              </div>
              <div class="subheading">
                库存总数:
                <span class="black--text"> {{ pr.pr_instock }} 个</span>
                <v-avatar height="20" width="20">
                  <img src="china.png" alt="flag-nation" />
                  <img src="korea.png" alt="flag-nation" />
                </v-avatar>
              </div>
              <div class="subheading">
                产品原价:
                <span class="grey--text"> {{ pr.pr_price_KOR }} 원</span>
              </div>
              <div class="subheading">
                包邮价格:
                <span class="grey--text"> {{ pr.pr_outprice }} 元 </span>
              </div>
              <div class="subheading">
                进 价:
                <span class="grey--text"> {{ pr.pr_inprice }} 元 </span>
              </div>
              <div class="subheading">
                备 注:
                <span class="red--text"> {{ pr.pr_stock_remark }} </span>
                <v-icon>mdi-pencil</v-icon>
                <span>(备注)</span>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="white grey--text">
                <v-icon small left>mdi-plus</v-icon>
                <span>其 他</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [
        {
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
          pr_stock_remark: "1个有瑕疵..", //备注
        },
        {
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
          pr_stock_remark: "1个有瑕疵.", //备注
        },
        {
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
          pr_stock_remark: "2个有瑕疵..", //备注
        },
        {
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
        {
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
          pr_stock_remark: "", //备注
        },
        {
          pr_id: "",
          pr_date: "",
          pr_CHName: "新款外套",
          pr_KOName: "NC다이노스 유니폼",
          pr_ItemNumber: "SN223TFT41",
          pr_price_KOR: 159000,
          prprice__RMB: 999,
          pr_inprice: 500,
          pr_outprice: 700,
          pr_margin: 200,
          pr_img: "/SN223TFT41.png",
          pr_instock: 2,
          pr_stock_position: "china", //korea ||china
          pr_stock_remark: "线条多..",
        },
      ],
    };
  },
};
</script>
