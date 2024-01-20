<template>
  <div>
    <div class="container p-4">
      <div class="row">
        <div class="col-md-4" v-for="persona in displayedPersonas" :key="persona._id">
            <div class="card mb-2">
              <img v-bind:src="persona.image" class="card-img-top">
              <div class="card-body">
                <h5>{{persona.Name}}</h5>
                <p><b>Puesto:</b> {{persona.jobTitle }}</p>
                <p><b>Sexo:</b> {{persona.gender }}</p>
              </div>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="btn-group col-md-2 offset-md-5">
          
          <button 
          type="button"
          v-if="page != 1"
          @click="page--"
          class="btn btn-sm btn-outline-secondary">
            Before
          </button>

          <button 
          type="button" 
          v-for="pageNumber in pages.slice(page-1, page+5)" 
          :key="pageNumber" 
          @click="page = pageNumber"
          class="btn btn-sm btn-outline-secondary">
            {{pageNumber}}
          </button>

          <button
          v-if="page < pages.length"
          @click="page++"
          class="btn btn-sm btn-outline-secondary">
            Next
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      personas: [],
      baseURL: 'http://localhost:3000',
      page: 1,
      perPage: 10,
      pages: []
    }
  },
  created(){
    this.getPersons();
  },
  methods: {
    async getPersons(){
      const res = await axios.get(`${this.baseURL}/persons`)
      this.personas = res.data;
      
    },
    paginate(personas){
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return personas.slice(from, to);
    },
    setPersonas(){
      let numberOfPages = Math.ceil(this.personas.length / this.perPage)
      for (let i = 1; i<=numberOfPages; i++){
        this.pages.push(i);
      }
    }
  },
  computed: {
    displayedPersonas(){
      return this.paginate(this.personas);
    }
  },
  watch: {
    personas(){
      this.setPersonas();
    }
  }
}

</script>