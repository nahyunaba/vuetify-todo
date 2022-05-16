<template>
  <nav>
    <!-- 顶部的 装修 -->
    <v-toolbar outlined flat>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="text-uppercase grey--text"
        >click
        <span class="font-weight-light">{{ $route.params.page }}啥啊 </span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn color=" blue--text ">
        <span>join</span>
        <v-icon right>mdi-account</v-icon>
      </v-btn>
      <v-btn color=" grey--text ma-3">
        <span>Logout</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- navgation drawer -->
    <v-navigation-drawer
      app
      v-model="drawer"
      dark
      :src="require('@/assets/naxian.png')"
    >
      <!-- gradien bind img-->
      <template v-slot:img="aaa">
        <v-img :gradient="gradient" v-bind="aaa" />
      </template>
      <v-list>
        <v-list-item-content>
          <v-avatar size="100">
            <img
              src="../assets/naxian.png"
              alt="alt"
              height="100"
              width="100"
            />
          </v-avatar>
        </v-list-item-content>
        <v-divider />

        <v-list-item
          v-for="menu in menu"
          :key="menu.id"
          :to="menu.to"
          active-class="primary"
          class="py-2"
        >
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ menu.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    gradient: "rgba(0,0,0,.6),rgba(0,0,0,.8)",
    menu: [
      {
        id: "1",
        name: "订单-管理",
        to: "/",
        icon: "mdi-gift",
        params: {page: "订单-管理"},
      },
      {
        id: "2",
        name: "采购-管理",
        to: "/perchase",
        icon: "mdi-account-multiple",
        params: {page: "采购管理"},
      },
      {
        id: "3",
        name: "库存-管理",
        to: "/stock",
        icon: "mdi-pinwheel",
        params: {page: "库存管理"},
      },
      {
        id: "4",
        name: "其他",
        to: "/other",
        icon: "mdi-phone",
        params: {page: "其他"},
      },
    ],
    //
  }),
};
</script>
