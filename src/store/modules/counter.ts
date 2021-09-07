import { ICounter, IState } from "@/types/store";
import { Module } from "vuex";

const counter: Module<ICounter, IState> = {
  state: {
    count: 0
  },
  actions: {
    add({ commit }) {
      commit('increment');
    },
    detract({ commit }) {
      commit('decrement')
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  getters: {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
    currentCount: state => state.count
  }
}

export default counter;