/* eslint-disable vue/no-parsing-error */
<template>
  <div class="dashboard">
    <template>
      <!-- DIALOG -->
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{on, attrs}">
            <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
              新 增 订 单
            </v-btn>
          </template>

          <!-- DIALOG 's插槽 input value-->
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              <span class="text--h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model="editedItem.nickname"
                      name="nickname"
                      label="抖音名"
                      id="id"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="editedItem.OrderNumber"
                      name="OrderNumber"
                      label="抖音订单号"
                      id="id"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      v-model="editedItem.Receiver"
                      name="Receiver"
                      label="收件人"
                      id="id"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="editedItem.TrackingNumber"
                      name="TrackingNumber"
                      label="快递单号"
                      id="id"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <select name="" id="">
                      <option value="选择">1</option>
                      <option value="">1</option>
                      <option value="">1</option>
                    </select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-divider class="mx-4" inset vertical></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="save()"> 提 交</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <!-- 삭제 확인 dialog -->
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="text-h5"
            >Are you sure you want to delete this item?</v-card-title
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDelete"
              >Cancel</v-btn
            >
            <v-btn color="blue darken-1" text @click="deleteItemConfirm"
              >OK</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
    <v-divider inset></v-divider>

    <!-- list 表 -->
    <v-main>
      <v-container class="my-5">
        <v-card
          v-for="(item, index) in dessert"
          :key="index"
          outlined
          class="my-2"
          hover
        >
          <v-layout wrap>
            <v-flex xs12 md1 :class="`pa-1 ma-2  status ${item.status}`">
              <div class="text-caption grey--text">日期</div>
              <div>{{ item.date }}</div>
            </v-flex>
            <v-flex xs6 sm4 md1>
              <div class="text-caption grey--text">订单编号</div>
              <div>{{ item.OrderNumber }}</div>
            </v-flex>
            <v-flex xs6 sm4 md1>
              <div class="text-caption grey--text">昵称</div>
              <div>{{ item.nickname }}</div>
            </v-flex>
            <v-flex xs6 sm4 md1>
              <div class="text-caption grey--text">收货人</div>
              <div>{{ item.Receiver }}</div>
            </v-flex>

            <v-flex xs6 sm4 md1>
              <div class="text-caption grey--text">快递单号</div>
              <div>{{ item.TrackingNumber }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div>
                <v-chip
                  :color="item.status"
                  :class="`v-chip-active white--text caption my-2`"
                >
                  {{ item.status }}
                </v-chip>
              </div>
            </v-flex>

            <!-- deit / delet  -->
            <v-flex xs6 sm4>
              <template v-solt:[getItemCtrol()]="{item}">
                <v-icon color="primary" class="pa-3" @click="editItem(item)">
                  mdi-pencil
                </v-icon>

                <v-icon color="error" class="pa-3" @click="deleteItem(item)">
                  mdi-delete
                </v-icon>
              </template>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: true,
    dialogDelete: false,

    editedIndex: -1,

    //editedItem 는 new 입력 값
    editedItem: {
      date: "",
      OrderNumber: "",
      nickname: "",
      Receiver: "",
      TrackingNumber: "",
      status: "",
      product: "",
    },

    // defaultItem 은 입력값을 닫을때 초기화 할것임
    defaultItem: {
      date: "",
      OrderNumber: "",
      nickname: "",
      Receiver: "",
      TrackingNumber: "",
      status: "",
      product: "",
    },
    // dessert 최종 데이터.(샘플 과 모든 데이터 넣을 장소)
    dessert: [],
  }),

  created() {
    this.initialize(); //초기화 실행
  },

  methods: {
    //v-slot.action 의 eslint 에러 제거
    getItemCtrol() {
      return `item.actions`;
    },

    // dessert 에 smaple 데이터 스토어에서 가져옴
    initialize() {
      this.dessert = this.$store.state.sampleInfo;
    },

    // 새로운 데이타 를 최종 데이타에 푸시
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.dessert[this.editedIndex], this.editedItem);
      } else {
        this.dessert.push(this.editedItem);
        // console.log(this.editedItem);
      }
      this.close();
    },
    // 편집(해당dessert의 내용)
    editItem(item) {
      this.editedIndex = this.dessert.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    // 삭제 (해당 dessert의 내용)
    deleteItem(item) {
      let abc = this.dessert.indexOf(item);
      this.editedIndex = abc;
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.dessert.splice(this.editedIndex, 1);
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
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
};
</script>

<style scoped>
.status.unorderd {
  border-left: 3px solid rgba(96, 95, 93, 0.561);
}
.status.orderd {
  border-left: 3px solid rgba(255, 217, 0, 0.478);
}
.status.isgoing {
  border-left: 3px solid rgba(0, 255, 72, 0.436);
}
.status.instock {
  border-left: 3px solid rgba(255, 0, 0, 0.523);
}

.v-chip.unorderd {
  background-color: rgba(96, 95, 93, 0.561) !important;
}
.v-chip.orderd {
  background-color: rgba(255, 217, 0, 0.478) !important;
}
.v-chip.isgoing {
  background-color: rgba(0, 255, 72, 0.436) !important;
}
.v-chip.instock {
  background-color: rgba(255, 0, 0, 0.523) !important;
}
</style>
