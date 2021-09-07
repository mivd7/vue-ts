import { InjectionKey } from 'vue';
import { createStore, Store, StoreOptions } from 'vuex'
import { State } from '@/types/store'

// define your typings for the store state
export const key: InjectionKey<Store<State>> = Symbol();

const options: StoreOptions<State> = {
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

export const store = createStore<State>(options)