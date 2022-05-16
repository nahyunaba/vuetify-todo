<template>
  <div>
    <v-btn-group>
      <v-btn>{{ btn1 }}</v-btn>
      <v-btn>{{ btn2 }}</v-btn>
      <v-btn>{{ btn3 }}</v-btn>
    </v-btn-group>
  </div>
</template>

<script>
export default {
  props: ["btn1", "btn2", "btn3"],
};
</script>
