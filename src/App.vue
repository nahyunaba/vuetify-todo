<template>
  <div>
    <v-app class="grey lighten-4">
      <!-- Navigation drawer -->
      <NaviDrawer />
      <v-container>
        <router-view />
      </v-container>
    </v-app>
  </div>
</template>
<script>
import NaviDrawer from "./components/NavigationView.vue";

export default {
  components: {NaviDrawer},
  data: () => ({
    drawer: false,
  }),
};
</script>
