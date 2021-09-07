<template>
    <div>
        <h1>Count me in!</h1>
        Very nice, how much? {{count}}
        <button @click="add">+</button>
        <button @click="detract">-</button>
    </div>
</template>
<script lang="ts">
    import { computed, defineComponent } from 'vue'
    import { useStore } from '@/store'

    export default defineComponent({
        setup() {
            const store = useStore()
            
            return {
                count: computed(() => store.state.count),
                evenOrOdd: computed(() => store.getters.evenOrOdd),
                add: () => store.dispatch('add'),
                detract: () => store.dispatch('detract')
            }
        },
    })
</script>