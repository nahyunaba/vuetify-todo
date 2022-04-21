<template>
  <v-data-table
    :headers="$store.state.headers"
    :search="search"
    sort-by="['Receiver', 'date', 'nickname']"
    class="datatable"
    :sort-desc="[false, true]"
    :items="userInfo"
    item-class="status"
    items-per-page="20"
  >
    <!-- Search  & titleName -->
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>订单管理页面 </v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          autofocus
        ></v-text-field>
        <v-spacer></v-spacer>

        <!--新增订单 btn -->

        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{on, attrs}">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              新 增 订 单
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <!-- edit Dialog detail  -->

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.date"
                      label="选择日期"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.OrderNumber"
                      label="订单编号"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.nickname"
                      label="抖音昵称"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.TrackingNumber"
                      label="快递单号"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      :items="items"
                      v-model="editedItem.status"
                      classNam
                      label="状态"
                    >
                    </v-select>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.product"
                      label="产品编码"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- delete confirm dialog -->

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">确定删除吗?(永久删除)</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >取 消</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >确 定</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template slot="items" slot-scope="props">
      <td class="test">{{ props.item.name }}</td>
      <td class="test1">{{ props.item.calories }}</td>
      <td class="test2">{{ props.item.fat }}</td>
      <td class="test3">{{ props.item.carbs }}</td>
      <td class="test4">{{ props.item.protein }}</td>
      <td class="test5">{{ props.item.iron }}</td>
    </template>

    <!-- edit / delete  btn -->

    <template v-slot:[`item.actions`]="{item}">
      <v-btn x-small dark class="mr-2" @click="editItem(item)">
        <v-icon small> mdi-pencil </v-icon>
        <span>编辑</span>
      </v-btn>

      <v-btn x-small color="red" @click="deleteItem(item)">
        <v-icon small> mdi-delete </v-icon>
        <span>删除</span>
      </v-btn>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
<script>
// import {mapMutations} from "vuex";

export default {
  data: () => ({
    // select Status
    items: ["unorderd", "orderd", "isgoing", "instock"],
    //
    search: "",
    dialog: false,
    dialogDelete: false,

    userInfo: [],
    editedIndex: -1,
    editedItem: {
      date: "edititem",
      OrderNumber: "",
      nickname: "",
      Receiver: "",
      TrackingNumber: "",
      status: "",
      product: "",
    },

    sample: [
      {
        date: "2022-01-01",
        OrderNumber: "1111jinxiong1111",
        nickname: "xiong",
        Receiver: "吉林省延吉市长白山综合楼3单元701",
        TrackingNumber: "775510102222",
        status: "isgoing", //  unorderd,orderd,isgoing,instock
        product: "img",
      },
      {
        date: "2022-02-02",
        OrderNumber: "222222xuanhua2222",
        nickname: "xuanhua",
        Receiver: "222吉林省延吉市长白山综合楼3单元222222",
        TrackingNumber: "ytg22222222",
        status: "instock",
        product: "img2",
      },
      {
        date: "2022-03-03",
        OrderNumber: "333naxian ",
        nickname: "jinnaxian",
        Receiver: "333吉林省延吉市长白山综合楼3单元222222",
        TrackingNumber: "333333单号",
        status: "unorderd",
        product: "img3",
      },
      {
        date: "2022-03-03",
        OrderNumber: "4444 ",
        nickname: "4444",
        Receiver: "4443吉林省延吉市长白山综合楼3单元222222",
        TrackingNumber: "44433单号",
        status: "unorderd",
        product: "img4",
      },
    ],

    defaultItem: {
      date: "dfault",
      OrderNumber: "",
      nickname: "",
      Receiver: "",
      TrackingNumber: "",
      status: "",
      product: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.userInfo = this.sample;
    },

    editItem(item) {
      this.editedIndex = this.userInfo.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.userInfo.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.userInfo.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.userInfo[this.editedIndex], this.editedItem);
      } else {
        this.userInfo.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
<style scope>
.instock {
  background-color: rgba(255, 0, 0, 0.453);
}
.isgoing {
  background-color: rgba(46, 255, 14, 0.309);
}
.orderd {
  background-color: rgba(0, 128, 0, 0.485);
}
.unorderd {
  background-color: rgba(255, 255, 0, 0.474);
}
</style>
