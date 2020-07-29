<template>
    <div>
        <select name="club" id="club">
            <option v-for="item in clubs"
                    :key="item.id"
                    v-bind:value="item.id">
                {{item.club}}
            </option>
        </select>

        <select name="type" id="type">
            <option value="club">club</option>
            <option value="effectif">effectif</option>
            <option value="calendrier">calendrier</option>
            <option value="complet">complet</option>
        </select>
            <input type="file" @change="uploadImage($event)" id="file">
            <input type="submit" @click="sendScreen">
    </div>
</template>

<script>
    import DataService from "../services/DataService";

    export default {
        name: "EnvoiScreens",
        data() {
    return {
      clubs: [],
    };
  },
  methods: {
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
    },
      uploadImage(event) {

    let data = new FormData();
    data.append('name', 'my-picture');
    data.append('file', event.target.files[0]);


    DataService.patchScreenClub();
  },
  },
  mounted() {
    this.retrieveClubs();
    console.log(this.clubs);
  }
    }
</script>



<style scoped>

</style>