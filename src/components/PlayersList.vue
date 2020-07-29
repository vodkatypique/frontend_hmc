<template>
  <div class="row">
    <table border="solid" style="width: 100%">
      <thead>
          <input type="text" class="form-control" placeholder="Search by name, 3 letters mini"
            v-model="nom" @input="searchName"/>
      </thead>
      <h4 >Players List</h4>
      <tbody>
          <tr class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(player, index) in players"
            :key="index"
            @click="setActivePlayer(player, index)"
          >
            <td style="width: 10%"><img v-bind:src=player.face alt="" width="60" height="60"></td>
            <td style="width: 15%">{{player.nom}}</td>
            <td style="width: 5%">
              <div v-for="item in JSON.parse(player.poste)" :key="item.id">
                {{ item }}
              </div>
            </td>
            <td style="width: 5%">
              <div v-for="item in JSON.parse(player.poste2)" :key="item.id">
                {{ item }}
              </div>
            </td>
            <td style="width: 25%">{{player.club}}</td>
            <td style="width: 5%"><img v-bind:src="'https://www.countryflags.io/'+player.nat+'/flat/64.png'"></td>
            <td style="width: 5%">{{player.age}} ans</td>
            <td style="width: 5%">{{player.valeur}} €</td>
            <td style="width: 5%">CA : {{player.ca}}</td>
            <td style="width: 5%">PA : {{player.pa}}</td>
            <div class="col-md-12" v-if="index==currentIndex">
        <div v-if="currentPlayer">
          <div class="row">
              <div class="col-sm" style="padding-left: 5px;">
                <div class="panel panel-warning">
                  <div class="panel-heading" style="padding: 8px;"><h3 style="font-size: 13px;">TECHNIQUE</h3></div>
                    <div class="panel-body" style="padding: 0px;">
                      <table class="table tab61" style="margin-bottom: 0px;">
                      <tbody>
                            <tr>
                          <td  id="fm_cro" @mouseover="arkaa('fm_dri', '#edfd01');" @mouseout="arkaa2('fm_dri');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Centres</td>
                          <td class="text-center bg_14"><span class="veri61">15</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_fir" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Contrôle de balle</td>
                          <td class="text-center bg_18"><span class="veri61">19</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_cor" @mouseover="arkaa('fm_cro', '#edfd01');" @mouseout="arkaa2('fm_cro');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Corners</td>
                          <td class="text-center bg_14"><span class="veri61">15</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_fre" @mouseover="arkaa('fm_lon', '#edfd01'); arkaa('fm_cro', '#edfd01'); " @mouseout="arkaa2('fm_lon'); arkaa2('fm_cro');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Coups francs</td>
                          <td class="text-center bg_18"><span class="veri61">19</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_dri" @mouseover="arkaa('fm_pac', '#edfd01'); arkaa('fm_acc', '#edfd01'); arkaa('fm_bal', '#edfd01'); arkaa('fm_agi', '#edfd01');" @mouseout="arkaa2('fm_pac'); arkaa2('fm_acc'); arkaa2('fm_bal'); arkaa2('fm_agi');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Dribble</td>
                          <td class="text-center bg_18"><span class="veri61">20</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_fin" @mouseover="arkaa('fm_cmp', '#edfd01'); arkaa('fm_dec', '#edfd01'); " @mouseout="arkaa2('fm_cmp'); arkaa2('fm_dec');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Finition</td>
                          <td class="text-center bg_18"><span class="veri61">20</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_mar" @mouseover="arkaa('fm_str', '#edfd01'); arkaa('fm_cnt', '#edfd01'); " @mouseout="arkaa2('fm_str'); arkaa2('fm_cnt');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Marquage</td>
                          <td class="text-center bg_6"><span class="veri61">4</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_pas" @mouseover="arkaa('fm_vis', '#edfd01'); arkaa('fm_dec', '#edfd01'); " @mouseout="arkaa2('fm_vis'); arkaa2('fm_dec');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Passes</td>
                          <td class="text-center bg_18"><span class="veri61">20</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_pen" @mouseover="arkaa('fm_fin', '#edfd01'); arkaa('fm_cmp', '#edfd01'); " @mouseout="arkaa2('fm_fin'); arkaa2('fm_cmp');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Penalty</td>
                          <td class="text-center bg_16"><span class="veri61">17</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_tck" @mouseover="arkaa('fm_str', '#edfd01'); arkaa('fm_agg', '#edfd01'); arkaa('fm_bra', '#edfd01'); " @mouseout="arkaa2('fm_str'); arkaa2('fm_agg'); arkaa2('fm_bra');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Tacles</td>
                          <td class="text-center bg_8"><span class="veri61">7</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_tec"   style="padding-top: 10px; background-color: rgb(245, 245, 245);">Technique</td>
                          <td class="text-center bg_18"><span class="veri61">20</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_hea" @mouseover="arkaa('fm_jum', '#edfd01');" @mouseout="arkaa2('fm_jum');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Tête</td>
                          <td class="text-center bg_10"><span class="veri61">10</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_lon"   style="padding-top: 10px; background-color: rgb(245, 245, 245);">Tirs de loin</td>
                          <td class="text-center bg_16"><span class="veri61">17</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_lth"   style="padding-top: 10px; background-color: rgb(245, 245, 245);">Touches longues</td>
                          <td class="text-center bg_6"><span class="veri61">4</span></td>
                        </tr>
                      </tbody>
</table>
                    </div>
                </div>
               </div>

              <div class="col-sm" style="padding-left: 5px;">
                <div class="panel panel-info">
                <div class="panel-heading" style="padding: 8px;"><h3 style="font-size: 13px;">MENTAL</h3></div>
                <div class="panel-body" style="padding: 0px;">
                <table class="table tab61" style="margin-bottom: 0px;">
                    <tbody>
                          <tr>
                        <td  id="fm_agg" @mouseover="arkaa('fm_tck', '#edfd01'); arkaa('fm_str', '#edfd01'); " @mouseout="arkaa2('fm_tck'); arkaa2('fm_str');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Agressivité</td>
                        <td class="text-center bg_8"><span class="veri61">7</span></td>
                      </tr>
                      <tr>
                        <td  id="fm_ant"   style="padding-top: 10px; background-color: rgb(245, 245, 245);">Anticipation</td>
                        <td class="text-center bg_18"><span class="veri61">19</span></td>
                      </tr>
                      <tr>
                        <td  id="fm_otb"   style="padding-top: 10px; background-color: rgb(245, 245, 245);">Appels de balle</td>
                        <td class="text-center bg_16"><span class="veri61">16</span></td>
                      </tr>
                      <tr>
                        <td  id="fm_tea" @mouseover="arkaa('fm_wor', '#edfd01');" @mouseout="arkaa2('fm_wor');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Collectif</td>
                        <td class="text-center bg_14"><span class="veri61">14</span></td>
                      </tr>
                      <tr>
                        <td  id="fm_cnt"   style="padding-top: 10px; background-color: rgb(245, 245, 245);">Concentration</td>
                        <td class="text-center bg_12"><span class="veri61">13</span></td>
                      </tr>
                      <tr>
                        <td  id="fm_bra" @mouseover="arkaa('fm_tck', '#edfd01'); arkaa('fm_str', '#edfd01'); arkaa('fm_agg', '#edfd01'); " @mouseout="arkaa2('fm_tck'); arkaa2('fm_str'); arkaa2('fm_agg');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Courage</td>
                        <td class="text-center bg_10"><span class="veri61">10</span></td>
                      </tr>
                      <tr>
                        <td  id="fm_dec" @mouseover="arkaa('fm_pas', '#edfd01'); arkaa('fm_vis', '#edfd01'); arkaa('fm_tck', '#edfd01'); arkaa('fm_ant', '#edfd01'); " @mouseout="arkaa2('fm_pas'); arkaa2('fm_vis'); arkaa2('fm_tck'); arkaa2('fm_ant');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Décisions</td>
                        <td class="text-center bg_18"><span class="veri61">20</span></td>
                      </tr>
                      <tr>
                        <td  id="fm_det"   style="padding-top: 10px; background-color: rgb(245, 245, 245);">Détermination</td>
                        <td class="text-center bg_18"><span class="veri61">20</span></td>
                      </tr>
                      <tr>
                        <td  id="fm_fla"   style="padding-top: 10px; background-color: rgb(245, 245, 245);">Inspiration</td>
                        <td class="text-center bg_18"><span class="veri61">20</span></td>
                      </tr>
                      <tr>
                        <td  id="fm_ldr"   style="padding-top: 10px; background-color: rgb(245, 245, 245);">Leadership</td>
                        <td class="text-center bg_14"><span class="veri61">14</span></td>
                      </tr>
                      <tr>
                        <td  id="fm_pos"   style="padding-top: 10px; background-color: rgb(245, 245, 245);">Placement</td>
                        <td class="text-center bg_6"><span class="veri61">5</span></td>
                      </tr>
                      <tr>
                        <td  id="fm_cmp" @mouseover="arkaa('fm_dec', '#edfd01');" @mouseout="arkaa2('fm_dec');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Sang-froid</td>
                        <td class="text-center bg_18"><span class="veri61">18</span></td>
                      </tr>
                      <tr>
                        <td  id="fm_vis"   style="padding-top: 10px; background-color: rgb(245, 245, 245);">Vision du jeu</td>
                        <td class="text-center bg_18"><span class="veri61">20</span></td>
                      </tr>
                      <tr>
                        <td  id="fm_wor" @mouseover="arkaa('fm_tea', '#edfd01'); arkaa('fm_sta', '#edfd01'); arkaa('fm_det', '#edfd01'); " @mouseout="arkaa2('fm_tea'); arkaa2('fm_sta'); arkaa2('fm_det');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Volume de jeu</td>
                        <td class="text-center bg_8"><span class="veri61">7</span></td>
                      </tr>
                    </tbody>
</table>
</div>
                </div>
              </div>

              <div class="col-sm" style="padding-left: 5px;">
                  <div class="panel panel-danger">
                  <div class="panel-heading" style="padding: 8px;"><h3 style="font-size: 13px;">PHYSIQUE</h3></div>
                  <div class="panel-body" style="padding: 0px;">
                  <table class="table tab61" style="margin-bottom: 0px;">
                      <tbody>
                            <tr>
                          <td  id="fm_acc" @mouseover="arkaa('fm_pac', '#edfd01');" @mouseout="arkaa2('fm_pac');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Accélération</td>
                          <td class="text-center bg_18"><span class="veri61">18</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_agi" @mouseover="arkaa('fm_bal', '#edfd01'); arkaa('fm_pac', '#edfd01'); arkaa('fm_acc', '#edfd01'); " @mouseout="arkaa2('fm_bal'); arkaa2('fm_pac'); arkaa2('fm_acc');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Agilité</td>
                          <td class="text-center bg_18"><span class="veri61">19</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_jum" @mouseover="arkaa('fm_hea', '#edfd01');" @mouseout="arkaa2('fm_hea');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Détente verticale</td>
                          <td class="text-center bg_6"><span class="veri61">6</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_sta"   style="padding-top: 10px; background-color: rgb(245, 245, 245);">Endurance</td>
                          <td class="text-center bg_12"><span class="veri61">13</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_bal" @mouseover="arkaa('fm_str', '#edfd01'); arkaa('fm_agi', '#edfd01');  " @mouseout="arkaa2('fm_str'); arkaa2('fm_agi'); " style="padding-top: 10px; background-color: rgb(245, 245, 245);">Équilibre</td>
                          <td class="text-center bg_18"><span class="veri61">19</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_str"   style="padding-top: 10px; background-color: rgb(245, 245, 245);">Puissance</td>
                          <td class="text-center bg_8"><span class="veri61">9</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_nat" @mouseover="arkaa('fm_sta', '#edfd01');" @mouseout="arkaa2('fm_sta');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Qualités phys. nat.</td>
                          <td class="text-center bg_14"><span class="veri61">14</span></td>
                        </tr>
                        <tr>
                          <td  id="fm_pac" @mouseover="arkaa('fm_acc', '#edfd01');" @mouseout="arkaa2('fm_acc');" style="padding-top: 10px; background-color: rgb(245, 245, 245);">Vitesse</td>
                          <td class="text-center bg_14"><span class="veri61">15</span></td>
                        </tr>
                       </tbody>
</table>
                  </div>
                  </div>
              </div>
          </div>

        </div>
      </div>
          </tr>
        <button @click="previous">PREVIOUS</button>
        <button @click="next">NEXT</button>
      </tbody>
    </table>
    </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "players-list",
  data() {
    return {
      players: [],
      currentPlayer: null,
      currentIndex: -1,
      nom: "",
      page: 1,
      limite: 0,
    };
  },
  methods: {
    retrievePlayers() {
      DataService.getAll(this.page)
        .then(response => {
          this.players = response.data.results;
          console.log(response.data.results);
        })
        .catch(e => {
          console.log(e);
        });
    },

    next(){
      this.page += 1;
      this.retrievePlayers();
      this.currentIndex = -1;
    },

    previous(){
      if (this.page>1){
        this.page -= 1;
        this.retrievePlayers();
        this.currentIndex = -1;
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

    async searchName() {
      var tab={
        "é":"e", "è":"e", "ê":"e", "ë":"e",
        "ç":"c",
         "à":"a", "â":"a", "ä":"a",
         "î":"i", "ï":"i",
         "ù":"u", "ü":"u",
         "ô":"o", "ó":"o", "ö":"o",
      };

      function preg(t){
        return t.replace(/[äáâèéêëçîïóôöùü]/gi,function(q){ return tab[q].toLowerCase()});
      }
      //alert(preg("rüdiger"));

      if (this.nom.length<3){
        return this.refreshList();
      }

      let page = 1;
      this.players = [];
      let cond = true;

      while (cond){
        //alert(page + "/" + this.limite);
        await DataService.getAll(page)
        .then(response => {
          this.players = this.players.concat(response.data.results.filter(obj => preg(obj.nom.toLowerCase()).includes(this.nom)));
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

    arkaa(element, color) {
      document.getElementById(element).style.backgroundColor = color;
  },

  arkaa2(element) {
      document.getElementById(element).style.backgroundColor = "#f5f5f5";
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
  .list-group-item.active {
    background-color: white;
    border-color: white;
    color: black;
  }

  .bg_0, .bg_1, .bg_2, .bg_3, .bg_4 {
    background-color: #808080 !important;
    padding: 6px !important;
}
  .bg_5, .bg_6, .bg_7, .bg_8, .bg_9 {
    background-color: #ffff00 !important;
    padding: 6px !important;
}
  .bg_10, .bg_11, .bg_12, .bg_13, .bg_14 {
    background-color: darkorange !important;
    padding: 6px !important;
}
  .bg_15, .bg_16, .bg_17, .bg_18, .bg_19, .bg_20 {
    background-color: red !important;
    padding: 6px !important;
}
  .veri61 {
    color: black;
    font-weight: bold;
  }

  td {
    text-align: center;
  }
</style>