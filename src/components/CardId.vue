<template>
    
    <div :class="bgdata">
        <!-- <div v-if="data.Registration=='With Breakfast and Lunch  (₱430)'" class="cardid-header header-1">LEYTE BLENDING MEETING 2024</div>
        <div v-if="data.Registration=='With Breakfast only (₱250)'" class="cardid-header header-2">LEYTE BLENDING MEETING 2024</div>
        <div v-if="data.Registration=='With Lunch only  (₱280)'" class="cardid-header header-3">LEYTE BLENDING MEETING 2024</div>
        <div v-if="data.Registration=='Registration Fee (₱100)'" class="cardid-header header-4">LEYTE BLENDING MEETING 2024</div> -->
        <div class="cardid-header">LEYTE BLENDING MEETING 2024</div>
        <div class="cardid-sub-header">
            May 12, 2024 | Ormoc City
        </div>
        <div class="cardid-body-name cardid-body">
            {{data["First Name"]}} {{ data["Last Name"] }}
        </div>
        <div class="cardid-body-locality cardid-body">
            {{data.Locality}}, {{ data.Province }}
        </div>
        <!-- <div class="cardid-ribbon ribbon-wf2"></div> -->
    </div>
   
  </template>
  
  <script>
    export default {
        props: ["data","dataindex"],
        data() {
            return {
                bgdata: "cardid"
            }
        },
        mounted() {
            console.log("test","hello");
            if(this.data.Registration == 'Registration Fee (₱100)') {
                this.bgdata = "cardid header-1";
                console.log("hoiii")
            }

            if(this.data.Registration == 'With Breakfast only (₱250)') {
                this.bgdata = "cardid header-3";
            }

            if(this.data.Registration == 'With Lunch only  (₱280)') {
                this.bgdata = "cardid header-2";
            }

            if(this.data.Registration == 'With Breakfast and Lunch  (₱430)') {
                this.bgdata = "cardid header-4";
            }
        },
    }
</script>
  
  <style scoped>
    .html{
        font-family: "Century Gothic";
    }
    .header-1{
        background-color: white;
    }
    .header-2{
        background-color: rgba(240, 255, 0,0.8);
    }
    .header-3{
        background-color: rgba(22, 160, 133,0.8);
    }
    .header-4{
        background-color: rgba(154, 205, 50, 0.8);
    }
    .header-5{
        background-color: teal;
    }
    .cardid {
        border: solid 1px black;
        /* width: 300px; */
        width: 300px;
        /* height: 128px; */
        height: 160px;
        /* background-color: white; */
        position: relative;
    }
    .cardid-header {
        background-color: rgb(0, 0, 139);
        color: white;
        font-weight: bold;
        text-align: center;
        font-size: 18px;
        padding: 4px;
        border-bottom: solid black 1px;
    }
    .cardid-sub-header {
        color: black;
        font-weight: bold;
        text-align: center;
        font-size: 14px;
        padding: 4px;
    }
    .cardid-body {
        color: black;
        font-weight: bold;
        text-align: center;
        padding: 0px;
        margin: 0px;
    }
    .cardid-body-name{
        padding: 0px;
        margin-top: 14px;
        font-size: 25px;
        line-height: 25px;
    }
    .cardid-body-locality{
        font-size: 18px;
    }
    .cardid-ribbon {
        position: absolute;
        bottom: 0px;
        background-color: tomato;
        height: 5px;
        width: 100%;
    }
    .ribbon-wf2 {
        background-color: tomato;
    }
    .ribbon-wf1 {
        background-color: plum;
    }
  </style>
  