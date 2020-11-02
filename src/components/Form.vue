<template>
  <div class="card mt-4 shadow-sm p-3 mb-5 bg-white rounded" style="width: 100%;">
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="text">Text</label>
          <input type="text" v-model="text" class="form-control" id="text" placeholder="Please enter any text for searching in dictionary">
        </div>
        <div class="form-group">
          <label for="language">From what to what language</label>
          <select class="form-control" id="language" v-model="language">
            <option v-for="lang in getLanguages" :key="lang">{{ lang }}</option>
          </select>
        </div>
        <div class="form-group">
          <button @click="searchText" type="button" class="btn btn-success btn-sm btn-block">SEARCH IN DICTIONARY</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "Form",
    data() {
      return{
        language: null,
        text: ''
      }
    },
    methods: {
      searchText() {
        this.$store.dispatch("searchText", {
          lang: this.language,
          text: this.text
        });
        this.language = null;
        this.text = '';
      }
    },
    computed: {
      ...mapGetters(["getLanguages"]),
    },
  }
</script>

<style scoped>

</style>
