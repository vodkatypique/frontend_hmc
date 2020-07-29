<template>
    <div>
        <p v-if="clubs.length == 0">VIDE</p>
    <ul class="list-group">
        <li class="list-group-item"
            :class="{ active: index == currentIndex }"
          v-for="(club, index) in clubs"
          :key="club.id" :id="club.id"
            @click="setActiveClub(club, index)"
        >

        {{club.club}} {{index}} {{currentIndex}} {{club.id}}
             <div class="col-md-12" v-if="index==currentIndex">
      <div v-if="currentClub">
        <div>
            <div v-for="item in JSON.parse(currentClub.compo)" :key="item.id">
                <strong>{{item.role}}</strong> - {{item.joueur}}
            </div>
            <br>
            <label><strong>Consigne:</strong></label> {{ tactics[currentClub.consign].tactique }}
            <br>
            <label><strong>Formation:</strong></label> {{ formations[currentClub.formation].formation }}
            <br>
            <button v-on:click="traitement(club.id)">Traité</button>
        </div>
      </div>
             </div>
        </li>
      </ul>
    </div>
</template>

<script>
    import DataService from "../services/DataService";
    export default {
        name: "InfoModif",
        data() {
        return {
          clubs: [],
            currentIndex: -1,
            currentClub: null,
            tactics: {},
            formations: {},
    };
  },
        methods: {
            retrieveClubs() {
                this.clubs = [];
      let cond = true;
      let page = 1;
      while (cond){
        //alert(page + "/" + this.limite);
        DataService.getAllClubs(page)
        .then(response => {
          this.clubs = this.clubs.concat(response.data.results.filter(obj => obj.edited_at));
          //console.log(this.clubs);
        })
        .catch(e => {
          console.log(e);
        });
        page += 1;
        if (page > 3){
          //console.log("stop", page, this.limite);
          cond=false;
        }
      }
    },
            setActiveClub(club, index) {
      this.currentClub = club;
      console.log(index);
      console.log(this.currentClub.compo);
      this.currentIndex = index;
    },
            traitement(id){
                DataService.patchDate(id);
                this.retrieveClubs();
            },
            async retrieveTactics() {
        let page = 1;
        this.tactics = [];
        let cond = true;

        while (cond){
        //alert(page + "/" + this.limite);
        await DataService.getAllTactics(page)
        .then(response => {
          this.tactics = this.tactics.concat(response.data.results);
          this.limite = Math.ceil(response.data.count/10);
          //console.log(this.players);
          console.log(page + "-" + this.limite);
        })
        .catch(e => {
          console.log(e);
        });
        page += 1;
        if (page > this.limite){
          //console.log("stop", page, this.limite);
          cond=false;
          let temp = {};
          this.tactics.map(obj => temp[obj.idu] = obj);
          this.tactics = temp;
          console.log(this.tactics);
        }
      }
    },

            async retrieveFormations() {
        let page = 1;
        this.formations = [];
        let cond = true;

        while (cond){
        //alert(page + "/" + this.limite);
        await DataService.getAllFormations(page)
        .then(response => {
          this.formations = this.formations.concat(response.data.results);
          this.limite = Math.ceil(response.data.count/10);
          //console.log(this.players);
          console.log(page + "-" + this.limite);
        })
        .catch(e => {
          console.log(e);
        });
        page += 1;
        if (page > this.limite){
          //console.log("stop", page, this.limite);
          cond=false;
          let temp = {};
          this.formations.map(obj => temp[obj.idu] = obj);
          this.formations = temp;
          console.log(this.formations);
        }
      }
    },
        },
        mounted() {
            this.retrieveClubs();
            this.retrieveFormations();
            this.retrieveTactics();
        }
    }
</script>

<style scoped>

</style>