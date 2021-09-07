<template>
    <div>
        Very nice, how much? {{count}}
        <button @click="add">+</button>
        <button @click="detract">-</button>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
    setup() {
        const { state, getters, dispatch } = useStore()
            
        return {
            count: computed(() => state.count),
            evenOrOdd: computed(() => getters.evenOrOdd),
            add: () => dispatch('add'),
            detract: () => dispatch('detract')
        }
    },
})
</script>