<template>
    <div v-if="visible">
        <div class="consigne">
            <b-dropdown text="Modification de la tactique">
                <div v-for="(tactic, index) in tactics" :key="index">
                    <b-button v-bind:id="'popover-'+tactic.tactique" v-on:click="updateTactique(tactic.idu)">
                        {{tactic.tactique}}
                    </b-button>
                    <b-popover v-bind:target="'popover-'+tactic.tactique" triggers="hover" placement="left">
                        <template v-slot:title>Consignes</template>
                        {{tactic.cons1}}
                        <br>
                        {{tactic.cons2}}
                        <br>
                        {{tactic.cons3}}
                    </b-popover>
                </div>
            </b-dropdown>
        </div>
        <div class="formation">
            <b-dropdown text="Modification de la formation">
                <div v-for="(formation, index) in formations" :key="index">
                    <b-button size="sm" v-bind:id="'formation-'+formation.idu" v-on:click="updateFormation(formation.idu)">
                        {{formation.formation}}
                    </b-button>
                </div>
            </b-dropdown>
        </div>
        <div class="compo">
            Actuellement : {{formationActuelle.formation}} - {{consigneActuelle.tactique}}


            <div v-for="(elt,index) in JSON.parse(formationActuelle.postes)" :key="elt">
                <label v-bind:for="elt">{{elt}}</label>
                    <select v-bind:name="elt" v-bind:id="elt">
                        {{roles}}
                        <option v-for="role in JSON.parse(roles[elt])" :key="role" v-bind:value="role">{{role}}</option>
                    </select>

                <select name="playersDispo" v-on:change="majPlayers(index)">
                        <option v-for="joueur in playersDispos[index]" :key="joueur" v-bind:value="joueur">{{joueur}}</option>
                </select>
            </div>
            <b-button size="sm" id="btnRoles" v-on:click="update">
                        Update
                    </b-button>
        </div>
    </div>
</template>

<script>
    import DataService from "../services/DataService";
    import Vue from "vue";
    export default {
        name: "Tactique",
  data() {
    return {
        club: null,
      tactics: [],
        formations: [],
        formationActuelle: null,
        consigneActuelle: null,
        limite: 0,
        compo: [],
        roles: [],
        playersNames: [],
        playersDispos: [],
        visible: false,
    };
  },
  methods: {
            majPlayers(index){
                console.log(index);
                var selects = Array.from(document.getElementsByName("playersDispo"));
                selects = selects.map((obj, index) => obj.options[document.getElementsByName("playersDispo")[index].selectedIndex].value).filter(elt => elt);

                var range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(n => n != index);
                var temp = this.playersNames.filter(x => !selects.includes(x));
                //console.log(temp);

                for (let i=0; i<range.length; i++){
                    var lastSelected = document.getElementsByName("playersDispo")[range[i]].options[document.getElementsByName("playersDispo")[range[i]].selectedIndex].value;
                    var ajout;
                    if (lastSelected != ""){
                        ajout = temp.concat(lastSelected);
                    }else{
                        ajout = temp;
                    }
                    Vue.set(this.playersDispos, range[i], ajout);
                    document.getElementsByName("playersDispo")[range[i]].value=lastSelected;
                }
                //console.log(this.playersDispos)
            },

            async retrievePlayers() {

        let page = 1;
        this.playersNames = [""];
        let cond = true;

        while (cond){
        //alert(page + "/" + this.limite);
        await DataService.getAll(page)
        .then(response => {
          this.playersNames = this.playersNames.concat(response.data.results.filter(obj => obj.club == this.$route.params.club).map(obj => obj.nom));
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
      this.playersDispos = [
          this.playersNames, this.playersNames, this.playersNames, this.playersNames,
          this.playersNames, this.playersNames, this.playersNames, this.playersNames,
          this.playersNames, this.playersNames, this.playersNames];
        console.log(this.playersDispos);
    },


            update(){
                let compo = [];
                var selects = Array.from(document.getElementsByName("playersDispo"));
                selects = selects.map((obj, index) => obj.options[document.getElementsByName("playersDispo")[index].selectedIndex].value);
                for (let i = 0; i<this.formationActuelle.postes.length; i++){
                    if (JSON.parse(this.formationActuelle.postes)[i]){
                        let e = document.getElementById(JSON.parse(this.formationActuelle.postes)[i]);
                        let entree = '{"role": "'+ e.options[e.selectedIndex].text.toString() + '", "joueur": '+ (selects[i]?'"'+selects[i]+'"':null) + "}";
                    compo = compo.concat(entree);
                    }
                }
                compo = "["+compo+"]";
                console.log(compo);
                DataService.patchCompo(this.club.id, compo).then(response => {
                console.log(response);
            });
            },

      async updateFormation(idu){
        await DataService.patchFormation(this.club.id, idu)
            .then(response => {
                console.log(response);
            });
        await this.retrieveClub();
      },

      async retrieveRoles(){
          let page = 1;
        this.roles = [];
        let cond = true;

        while (cond){
        //alert(page + "/" + this.limite);
        await DataService.getAllRoles(page)
        .then(response => {
            let reponse = response.data.results;
            if (reponse) {
                reponse.map(obj => this.roles[obj.poste] = obj.roles);
                //
                // reponse.map(obj => alert(obj.poste + this.roles[obj.poste]));
            }
          this.limite = Math.ceil(response.data.count/10);
          page += 1;
          //console.log(this.players);
          console.log(page + "-" + this.limite);
        })
        .catch(e => {
          console.log(e);
        });
        if (page > this.limite){
          //console.log("stop", page, this.limite);
          cond=false;
        }
      }
      this.roles = Object.entries(this.roles);
        this.roles = Object.fromEntries(this.roles);
        },

      async updateTactique(idu){
        await DataService.patchTactique(this.club.id, idu)
            .then(response => {
                console.log(response);
            });
        await this.retrieveClub();
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
        }
      }
    },

      async  retrieveClub() {
        let page = 1;
        this.club = null;
        let cond = true;

        while (cond){
        //alert(page + "/" + this.limite);
        await DataService.getAllClubs(page)
        .then(response => {
            let reponse = response.data.results.filter(obj => obj.club == this.$route.params.club)[0];
          if (reponse) {
              this.club = reponse;
              this.visible = this.club.pseudo.toLowerCase() === JSON.parse(atob(localStorage.getItem("token").split('.')[1])).username.toLowerCase();
              console.log(this.club);
          }
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
      this.retrieveFormationActuelle();
        this.retrieveConsigneActuelle();
        this.retrieveRoles();
        //console.log(this.formations);
    },

      async retrieveFormationActuelle() {
        this.formationActuelle = null;
        await DataService.getFormation(this.club.formation)
        .then(response => {
            this.formationActuelle = response.data;
            console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },

      retrieveConsigneActuelle() {
        this.consigneActuelle = null;

        DataService.getTactic(this.club.consign)
        .then(response => {
            this.consigneActuelle = response.data;
            console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
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
  },
  mounted() {
    this.retrieveTactics();
    this.retrieveFormations();
    this.retrieveClub();
    this.retrievePlayers();
  },
};

</script>

<style scoped>

</style>