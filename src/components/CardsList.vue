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
            @change="handleFileUpload"
            accept=".csv"
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
            v-model="jsonData"
          ></textarea>
        </div>
      </div>
      <div class="col-md-1">
        <label for="exampleFormControlInput1" class="form-label"
          >Blank ID</label
        >
        <input type="number" min="0" v-model="blankCard" class="form-control" />
      </div>
    </div>
    <div class="row nonprint">
      <hr />
    </div>
    <div ref="elementToCopy" class="row printable">
      <CardId
        v-if="blankCard == 0"
        v-for="(item, index) in Saints"
        :data="item"
        :dataindex="index"
      />
      <CardId
        v-else
        v-for="index in blankCard"
        :data="blankData"
        :dataindex="index-1"
      />
    </div>
  </div>
</template>

<script>
import CardId from "./CardId.vue";
import Sticker from "./Sticker.vue";
// import iddata from "./iddata.json";

export default {
  name: "CardList",
  // components: { iddata, CardId, Sticker },
  components: { CardId, Sticker },
  data() {
    return {
      blankCard: 0,
      jsonData: "",
      Saints: [],
      blankData: {
          "#": "1",
          Province: "",
          Locality: "",
          "First Name": " ",
          "Last Name": " ",
          Registration: "₱100",
        },
      
      // Saints: iddata,
    };
  },
  created() {
    console.log(this.Saints);
  },
  methods: {
    handleFileUpload(event) {
      this.Saints = [];
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const csvData = reader.result;
        const jsonArray = this.csvJSON(csvData);
        this.Saints = jsonArray;
        this.jsonData = JSON.stringify(jsonArray, null, 2);
      };

      reader.readAsText(file);
    },
    csvJSON(csv) {
      const lines = csv.split("\n");
      const result = [];
      const headers = lines[0].split(",");

      for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(",");

        for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
        }

        result.push(obj);
      }

      return result;
    },
  },
};
</script>

<style scoped></style>
