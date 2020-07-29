<template>
    <div>
            <b-button v-b-toggle.collapse-1 variant="primary">Modification a faire</b-button>
              <b-collapse id="collapse-1" visible>
                  <b-card><InfoModif></InfoModif></b-card>
              </b-collapse>
        <br>
    </div>
</template>

<script>
    import InfoModif from "./InfoModif";
    export default {
        name: "Admin",
        components: {InfoModif}
    }
</script>

<style scoped>

</style>