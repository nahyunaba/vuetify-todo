<template>
  <div>
    <v-main>
      <v-toolbar>
        <v-toolbar-title class="text-uppercase grey--text">
          <v-app-bar-nav-icon @click="drawer = !drawer" />
          <span class="font-weight-light">{{ $route.params.name }} </span>
        </v-toolbar-title>
        <v-spacer />
        <v-btn color=" blue--text ">
          <span>join</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn color=" grey--text ma-3">
          <span>Logout</span>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-toolbar>

      <!-- navgation drawer -->
      <v-navigation-drawer
        v-model="drawer"
        app
        dark
        :src="require('@/assets/naxian.png')"
      >
        <template v-slot:img="aaa">
          <v-img :gradient="gradient" v-bind="aaa" />
        </template>

        <v-list-item>
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
        </v-list-item>

        <v-divider />
        <v-list dense nav>
          <v-list-item
            v-for="menu in menu"
            :key="menu.id"
            :to="menu.to"
            active-class="primary"
            class="py-2"
            :params="menu.params"
          >
            <v-list-item-icon>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ menu.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-main>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
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

  computed: {
    pagename() {
      console.log($this.$route.params);
    },
  },
  methods: {},
};
</script>

<style></style>
