<template>
  <v-card>
    <v-card-title class="text-h5 grey lighten-2">
      <span class="text--h5">{{ formTitle }}</span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="dessert.nickname"
              name="nickname"
              label="请输入 nickname"
              id="id"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="dessert.OrderNumber"
              name="OrderNumber"
              label="请输入 OrderNumber"
              id="id"
            ></v-text-field>
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
</template>

<script>
export default {
  data: () => {},
};
</script>
