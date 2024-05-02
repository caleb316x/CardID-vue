<template>
    
    <div class="col-md-4">
        <div :class="bgdata">
            <div class="cardid-header">LEYTE BLENDING MEETING 2024</div>
            <div class="cardid-sub-header">
                May 12, 2024 | Ormoc City
            </div>
            <div class="cardid-body-name cardid-body">
                {{data["First Name"]}} {{ data["Last Name"] }}
            </div>
            <div class="cardid-body-locality cardid-body">
                {{data.Locality}} {{ data.Locality == "" || data.Locality == "" ? "":"," }} {{ data.Province }}
            </div>
            <!-- <div class="cardid-ribbon ribbon-wf2"></div> -->
        </div>
    </div>
    <div v-if="(this.dataindex+1)%12 === 0" class="col-md-12"><br><hr><div class="printspace"></div></div>
   
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
            const registration = this.data.Registration;

            if (registration.includes('₱100')) {
                this.bgdata = "cardid header-1";
            } else if (registration.includes('₱250')) {
                this.bgdata = "cardid header-3";
            } else if (registration.includes('₱280')) {
                this.bgdata = "cardid header-2";
            } else if (registration.includes('₱430')) {
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
  