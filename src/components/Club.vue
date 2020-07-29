<template>
    <div>
          <b-button v-b-toggle.collapse-1 variant="primary">Budget</b-button>
              <b-collapse id="collapse-1" visible>
                  <b-card><Budget></Budget></b-card>
              </b-collapse>
        <br>
        <b-button v-b-toggle.collapse-2 variant="primary">Effectif</b-button>
              <b-collapse id="collapse-2">
                  <b-card><Effectif></Effectif></b-card>
              </b-collapse>
        <br>
        <b-button v-b-toggle.collapse-3 variant="primary">Tactique</b-button>
              <b-collapse id="collapse-3">
                  <b-card><Tactique></Tactique></b-card>
              </b-collapse>
        <br>
        <b-button v-b-toggle.collapse-4 variant="primary">Screens</b-button>
              <b-collapse id="collapse-4">
                  <b-card><Screenshots></Screenshots></b-card>
              </b-collapse>
        <br>
  </div>
</template>

<script>
import Effectif from "./Effectif";
import Budget from "./Budget";
import Tactique from "./Tactique";
import Screenshots from "./Screenshots";

export default {
  name: "players-list",
    components: {
        Screenshots,
        Tactique,
        Effectif,
        Budget,
    },
    data() {
    return {
        club: [],
        nom: "",
        connected: false,
    };
  },
  methods: {
  },
  mounted() {

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