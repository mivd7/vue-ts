import IJob from "@/types/job";
import OrderTerm from "@/types/order-term";
import { IJobs, IState } from "@/types/store";
import { Module } from "vuex";

const jobs: Module<IJobs, IState> = {
    state: {
        allJobs: [],    
    },
    actions: {
        //pretend it's an api call
        getJobs({ commit }, jobs: IJob[]) {
            commit('setJobs', jobs)
        },
        filterJobs({commit}, orderBy: string) {
            commit('setFilteredJobs', orderBy)
        }
    },
    mutations: {
        setJobs(state, jobs) {
            state.allJobs = jobs;
        },
        setFilteredJobs(state, orderBy: OrderTerm) {
            state.allJobs = [...state.allJobs].sort((a: IJob, b: IJob) => {
                return a[orderBy] > b[orderBy] ? 1 : -1;
            })
        }
    },
    getters: {
        highPayingJobs: state => {
            return [...state.allJobs].filter(job => job.salary > 1000);
        }
    }
}

export default jobs;