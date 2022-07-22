<template>
  <v-dialog
    :value="value"
    max-width="300"
    style="overflow: hidden"
  >
    <v-card>
      <v-card-title>
        <v-icon color="success" class="mr-4">mdi-check-circle</v-icon> Allowed access! :)
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "access-dialog",
  props: ["value"]
}
</script>