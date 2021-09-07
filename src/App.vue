<template>
  <div class="app">
    <button @click="handleClick('title')">Order by title</button>
    <button @click="handleClick('location')">Order by location</button>
    <button @click="handleClick('salary')">Order by salary</button>
    <job-list :jobs="jobs" :orderBy="orderTerm"/>
    <h2>And now for something completely different</h2>
    <counter/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import JobList from './components/JobList.vue';
import Counter from './components/Counter.vue';
import IJob from './types/job';
import OrderTerm from './types/order-term';

export default defineComponent({
  name: 'App',
  components: { JobList, Counter },
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
      },
      {
        id: '3',
        title: 'Tea Maker',
        location: 'BBC',
        salary: 1000
      },
      {
        id: '4',
        title: 'Assistent Neuspeuteraar',
        location: 'Luilekkerland',
        salary: 500
      },
      {
        id: '5',
        title: 'Mail order bride',
        location: 'Bangkok',
        salary: 3000
      }
    ])

    const orderTerm = ref<OrderTerm>('title');

    const handleClick = (term: OrderTerm) => {
      orderTerm.value = term
    }

    return {
      jobs,
      orderTerm,
      handleClick
    }
  }
});
</script>

<style>

</style>
