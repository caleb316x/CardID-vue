
<template>
  <div class="container">
    <div class="mt-4 p-5 bg-dark text-white rounded nonprint">
      <h1></h1>
    </div>
    <hr />
    <div class="row nonprint">
      <div class="col-md-4">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Upload cvs file</label
          >
          <input
            type="file"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <hr />
          <label for="exampleFormControlTextarea1" class="form-label"
            >Json data</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="jsondata"
          ></textarea
          ><br />
          <button class="btn btn-success">Upload</button>

          <hr />
          <button class="btn btn-primary" @click="copyToPDF">
            import to PDF
          </button>
        </div>
      </div>
    </div>
    <div class="row nonprint">
      <hr />
    </div>
    <div ref="elementToCopy" class="row printable">
      <div v-for="(item, index) in Saints" class="col-md-4">
        <CardId :data="item" />
        <!-- <Sticker :data="item" /> -->
      </div>
      

    </div>
  </div>
</template>

<script >
  import CardId from "./CardId.vue";
  import Sticker from "./Sticker.vue";
  import iddata from "./iddata.json";

  export default {
    name: "CardList",
    components: { iddata, CardId, Sticker },
    data() {
      return{
        jsondata: "{}",
        Saints: iddata
      }
    },
    created() {
      console.log(this.Saints);
    },
    methods: {
      
    },
  }
</script>

<style scoped></style>
