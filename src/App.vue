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
import { computed, defineComponent, ref } from 'vue';
import JobList from './components/JobList.vue';
import Counter from './components/Counter.vue';
import OrderTerm from './types/order-term';
import { useStore } from './store';
import jobData from './lib/jobData';

export default defineComponent({
  name: 'App',
  components: { JobList, Counter },
  setup() {
    const { state, getters, dispatch } = useStore();
    dispatch('getJobs', jobData);

    const orderTerm = ref<OrderTerm>('title');

    const handleClick = (term: OrderTerm) => {
      dispatch('filterJobs', term)
    }

    return {
      jobs: computed(() => state.jobs.allJobs),
      orderTerm,
      handleClick,
      highPayingJobs: computed(() => getters.highPayingJobs) 
    }
  }
});
</script>

<style>

</style>
