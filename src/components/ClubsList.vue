<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Clubs Ouest List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex && currentConf=='ouest' }"
          v-for="(club, index) in clubsOuest"
          :key="index"
          @click="setActiveClub(club, index, 'ouest')"
        >
          <a v-bind:href="'/club/'+club.club">
          <img v-bind:src="club.logo" alt="">{{club.club}} - {{club.pseudo}}
          <div class="col-md-6" v-if="index==currentIndex && currentConf=='ouest'">
          </div>
          </a>
        </li>
      </ul>

    </div>

    <div class="col-md-6">
      <h4>Clubs Est List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex && currentConf=='est'}"
          v-for="(club, index) in clubsEst"
          :key="index"
          @click="setActiveClub(club, index, 'est')"
        >
          <a v-bind:href="'/club/'+club.club">
          <img v-bind:src="club.logo" alt="">{{club.club}} - {{club.pseudo}}
          <div class="col-md-6" v-if="index==currentIndex && currentConf=='est'">
          </div>
          </a>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "players-list",
  data() {
    return {
      clubs: [],
      currentClub: null,
      currentIndex: -1,
      currentConf: "",
      nom: "",
    };
  },
  computed:{
    clubsEst : function () {
      return this.clubs.filter(obj => obj.conference == 'est');
    },
    clubsOuest : function () {
      return this.clubs.filter(obj => obj.conference == 'ouest');

    }
  },
  methods: {

    setActiveClub(club, index, conf) {
      this.currentClub = club;
      this.currentIndex = index;
      this.currentConf = conf;
    },


    retrieveClubs() {
      let cond = true;
      let page = 1;
      while (cond){
        //alert(page + "/" + this.limite);
        DataService.getAllClubs(page)
        .then(response => {
          this.clubs = this.clubs.concat(response.data.results);
          console.log(this.clubs);
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
    }
  },
  mounted() {
    this.retrieveClubs();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>