<template>
  <v-app>
    <!--  主菜单栏 开始 -->

    <!--  app-bar 顶部 装修 渐变色装修-->

    <v-app-bar app absolute color="#6A76AB" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="font-weight-lightr grey--text"> Dapalzaa </span>
      <span> 娜贤麻麻</span>
      <!-- <v-spacer></v-spacer> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary height="100vh">
      <v-list-item>
        <v-list-item-content>
          <v-avatar size="100">
            <img src="naxian.png" alt="alt" height="100" width="100" />
          </v-avatar>
        </v-list-item-content>
      </v-list-item>
      <!-- sidebar -->
      <v-list-item v-for="menu in menu" :key="menu.id" :to="menu.to">
        <v-list-item-icon>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ menu.name }}</v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>

    <!-- router -->
    <v-content>
      <v-content>
        <router-view />
      </v-content>
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {},

  data: () => ({
    drawer: false,

    menu: [
      {id: "1", name: "订单-管理", to: "/", icon: "mdi-gift"},
      {
        id: "2",
        name: "采购-管理",
        to: "/perchase",
        icon: "mdi-account-multiple",
      },
      {id: "3", name: "库存-管理", to: "/stock", icon: "mdi-pinwheel"},
    ],
    //
  }),
};
</script>
<style scoped></style>
