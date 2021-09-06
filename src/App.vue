<template>
  <div v-for="job in jobs" :key="job.id">
    <h2>{{job.title}}</h2>
    <p>{{job.location}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import IJob from './types/job';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const jobs = ref<IJob[]>([
      {
        id: '1',
        title: 'Front End Dev',
        location: 'Barentszplein 7',
        salary: 9001,
      },
      {
        id: '2',
        title: 'Muntjespoetser',
        location: 'Duckstad',
        salary: 0.01
      }
    ])
    return {
      jobs
    }
  }, 
  methods: {

  }
});
</script>

<style>

</style>
