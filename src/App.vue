<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 mx-auto mt-5">
        <div class="card shadow-sm p-3 mb-5 bg-white rounded" style="width: 100%;">
          <div class="card-body">
            <div class="alert alert-primary">results</div>
          </div>
        </div>
        <div class="card mt-4 shadow-sm p-3 mb-5 bg-white rounded" style="width: 100%;">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="text">Text</label>
                <input type="text" class="form-control" id="text" placeholder="Please enter any text for searching in dictionary">
              </div>
              <div class="form-group">
                <label for="language">From what to what language</label>
                <select class="form-control" id="language">
                  <option>1</option>
                </select>
              </div>
              <div class="form-group">
                <button class="btn btn-success btn-sm btn-block">SEARCH IN DICTIONARY</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',

  }
</script>

<style>
  body{
    background-color: #add8e678;
  }
</style>
