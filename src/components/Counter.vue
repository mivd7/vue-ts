<template>
    <div>
        <h1>Count me in!</h1>
        Very nice, how much? {{currentCount}}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>
<script lang="ts">
    import { computed, defineComponent } from 'vue'
    import { useStore } from 'vuex'
    import { key } from '../store'

    export default defineComponent({
        setup() {
            const store = useStore(key)
            
            return {
                count: computed(() => store.state.count),
                evenOrOdd: computed(() => store.getters.evenOrOdd),
                currentCount: computed(() => store.getters.currentCount),
                increment: () => store.dispatch('add'),
                decrement: () => store.dispatch('detract')
            }
        },
    })
</script>