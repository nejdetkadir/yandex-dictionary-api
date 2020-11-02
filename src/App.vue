<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 mx-auto mt-5">
        <Result></Result>
        <Form></Form>
      </div>
    </div>
  </div>
</template>

<script>
  import Result from "@/components/Result";
  import Form from "@/components/Form";
  export default {
    name: 'App',
    components: {
      Result,
      Form
    },
    created() {
      this.$store.dispatch("getLanguagesFromAPI");
    }
  }
</script>

<style>
  body{
    background-color: #add8e678;
  }
</style>
