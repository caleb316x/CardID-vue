<template>
    
    <div class="cardid">
        <div v-if="data.Registration=='With Breakfast and Lunch  (₱430)'" class="cardid-header header-1">LEYTE BLENDING MEETING 2024</div>
        <div v-if="data.Registration=='With Breakfast only (₱250)'" class="cardid-header header-2">LEYTE BLENDING MEETING 2024</div>
        <div v-if="data.Registration=='With Lunch only  (₱280)'" class="cardid-header header-3">LEYTE BLENDING MEETING 2024</div>
        <div v-if="data.Registration=='Registration Fee (₱100)'" class="cardid-header header-4">LEYTE BLENDING MEETING 2024</div>
        <div v-if="data.Registration==''" class="cardid-header header-5">LEYTE BLENDING MEETING 2024</div>



        <!-- <div class="cardid-ribbon ribbon-wf2"></div> -->
    </div>
   
  </template>
  
  <script>
    export default {
        props: ["data","dataindex"],
        data() {
            return {
                
            }
        }
    }
</script>
  
  <style scoped>
    .html{
        font-family: "Century Gothic";
    }
    .header-1{
        background-color: darkblue;
    }
    .header-2{
        background-color: yellowgreen;
    }
    .header-3{
        background-color: purple;
    }
    .header-4{
        background-color: orangered;
    }
    .header-5{
        background-color: teal;
    }
    .cardid {
        border: solid 1px black;
        width: 240px;
        /* height: 128px; */
        background-color: white;
        position: relative;
    }
    .cardid-header {
        /* background-color: teal; */
        color: white;
        font-weight: bold;
        text-align: center;
        font-size: 25px;
        padding: 8px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .cardid-sub-header {
        color: black;
        font-weight: bold;
        text-align: center;
        font-size: 8px;
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
        margin-top: 7px;
        font-size: 20px;
        line-height: 20px;
    }
    .cardid-body-locality{
        font-size: 14px;
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
  