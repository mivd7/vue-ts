import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { IState } from '@/types/store'
import counter from './modules/counter';
import jobs from './modules/jobs';

export const store = createStore<IState>({
  modules: {
    counter,
    jobs
  }
});
export const key: InjectionKey<Store<IState>> = Symbol();

export function useStore() {
  return baseUseStore(key)
}