<template>
    <div class="list row">
      {{$route.params.club}}
      <div class="col-md-12">
      <h4>Effectif List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(player, index) in players"
          :key="index"
          @click="setActivePlayer(player, index)"
        >
          {{player.nom}}
          <div class="col-md-12" v-if="index==currentIndex">
      <div v-if="currentPlayer">
        <h4>Player</h4>
        <div>
          <label><strong>Nom:</strong></label> {{ currentPlayer }}
        </div>

      </div>
    </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "effectif-list",
  data() {
    return {
      players: [],
      currentPlayer: null,
      currentIndex: -1,
      nom: "",
        limite: 0,
    };
  },
  methods: {
    async retrievePlayers() {

        let page = 1;
        this.players = [];
        let cond = true;

        while (cond){
        //alert(page + "/" + this.limite);
        await DataService.getAll(page)
        .then(response => {
          this.players = this.players.concat(response.data.results.filter(obj => obj.club == this.$route.params.club));
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
        }
      }

    },


    refreshList() {
      this.retrievePlayers();
      this.currentPlayer = null;
      this.currentIndex = -1;
    },

    setActivePlayer(player, index) {
      this.currentPlayer = player;
      this.currentIndex = index;
    },

    removeAllPlayers() {
      DataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrievePlayers();
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