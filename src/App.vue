<template>
  <div>
    <p ref="paragraph">{{name}} ({{age}})</p>
    <button @click="changeName('new name')">Give it a new name</button>
    <button @click="changeAge(31)">Age is just a number (or a string)</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import IJob from './types/job';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const state = reactive({
      name: 'MIVD',
      age: 25 as number | string
    })

    const refAge = ref<number | string>('yes');

    return {
      ...toRefs(state)
    }
  },
  methods: {
    changeName(name: string) {
      this.name = name;
    },
    changeAge(age: number | string) {
      this.age = age;
    }
  }
});
</script>

<style>

</style>
