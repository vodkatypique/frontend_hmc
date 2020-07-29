<template>
    <div>
        <img v-bind:src=club.screenclub alt="" style="width: 100%; height: auto;">
        <img v-bind:src=club.screeneffectif alt="" style="width: 100%; height: auto;">
        <img v-bind:src=club.screencalendrier alt="" style="width: 100%; height: auto;">
        <img v-bind:src=club.screencompet alt="" style="width: 100%; height: auto;">
    </div>
</template>

<script>
    import DataService from "../services/DataService";

    export default {
        name: "Screenshots",
        data(){
            return {
                url: null,
                club: null
            }
        },
        methods:{
            async retrieveClub() {
        let page = 1;
        this.club = [];
        let cond = true;

        while (cond){
        //alert(page + "/" + this.limite);
        await DataService.getAllClubs(page)
        .then(response => {
            let reponse = response.data.results.filter(obj => obj.club == this.$route.params.club)[0]
          if (reponse){
              this.club = reponse;
          }
          this.limite = Math.ceil(response.data.count/10);
          //console.log(this.players);
          console.log(page + "-" + this.limite);
          console.log((this.club))
        })
        .catch(e => {
          console.log(e);
        });
        page += 1;
        if (page > this.limite){
          //console.log("stop", page, this.limite);
          cond=false;
        }
      }

    },
        },
        mounted() {
            this.retrieveClub();
        }
    }
</script>

<style scoped>

</style>