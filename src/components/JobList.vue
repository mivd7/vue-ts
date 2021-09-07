<template>
    <div class="job-list">
        <p>Ordered by: {{orderBy}}</p>
        <ul>
            <li v-for="job in orderedJobs" :key="job.id">
                <h2>{{job.title}} @ {{job.location}}</h2>
                <div class="salary">
                    <p>{{job.salary}} oeigoeren</p>
                </div>
                <div class="description">
                    Steven Paul Jobs was an American business magnate, industrial designer, investor, and media proprietor. 
                    He was the chairman, chief executive officer (CEO), and co-founder of Apple Inc.; 
                    the chairman and majority shareholder of Pixar; a member of The Walt Disney Company's board of directors following its acquisition of Pixar; 
                    and the founder, chairman, and CEO of NeXT. Jobs is widely recognized as a pioneer of the personal computer revolution of the 1970s and 1980s, 
                    along with his early business partner and fellow Apple co-founder Steve Wozniak.
                    Jobs was born in San Francisco, California, and put up for adoption. 
                    He was raised in the San Francisco Bay Area. 
                    He attended Reed College in 1972 before dropping out that same year, and traveled through India in 1974 seeking enlightenment and studying Zen Buddhism.
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import IJob from '@/types/job'
import OrderTerm from '@/types/order-term'
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        jobs: {
            required: true,
            type: Array as PropType<IJob[]>
        },
        orderBy: {
            required: true,
            type: String as PropType<OrderTerm>
        }
    },
    setup(props) {
        const orderedJobs = computed(() => {
            return [...props.jobs].sort((a: IJob, b: IJob) => {
                return a[props.orderBy] > b[props.orderBy] ? 1 : -1;
            })
        })

        return {
            orderedJobs
        }
    }
})
</script>
