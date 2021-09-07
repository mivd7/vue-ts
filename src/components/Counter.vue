<template>
    <div>
        Very nice, how much? {{count}}
        <button @click="add">+</button>
        <button @click="detract">-</button>
        <p>Is it even or odd? {{evenOrOdd}}</p>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
    setup() {
        const { state, getters, dispatch } = useStore()
        const store = useStore();
        console.log(store);
        return {
            count: computed(() => state.counter.count),
            evenOrOdd: computed(() => getters.evenOrOdd),
            add: () => dispatch('add'),
            detract: () => dispatch('detract')
        }
    },
})
</script>