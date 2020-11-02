<template>
  <div class="card shadow-sm p-3 mb-5 bg-white rounded" style="width: 100%;" v-if="getResult.searchedText != null">
    <div class="card-body">
      <div class="alert alert-primary">
        <p><strong>Searched: {{getResult.searchedText}}</strong></p>
        <ul>
          <li v-for="mean in getResult.means" :key="mean.mean">{{mean.mean}} => {{mean.type}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  export default {
    name: "Result",
    computed: {
      ...mapGetters(["getResult"]),
    },
  }
</script>

<style scoped>

</style>
