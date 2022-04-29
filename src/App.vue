<template>
  <div>
    <v-app class="grey lighten-4">
      <NaviDrawer />
      <!-- Navigation drawer -->
      <v-main>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
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
