<template>
    <div>
        <b-button v-b-toggle.collapse-1 variant="primary">Modification a faire</b-button>
              <b-collapse id="collapse-1" visible>
                  <b-card><InfoModif></InfoModif></b-card>
              </b-collapse>
        <br>
        <b-button v-b-toggle.collapse-2 variant="primary">Envoyer les screens</b-button>
              <b-collapse id="collapse-2">
                  <b-card><EnvoiScreens></EnvoiScreens></b-card>
              </b-collapse>
        <br>
    </div>
</template>

<script>
    import InfoModif from "./InfoModif";
    import EnvoiScreens from "./EnvoiScreens";
    export default {
        name: "Admin",
        components: {EnvoiScreens, InfoModif}
    }
</script>

<style scoped>

</style>