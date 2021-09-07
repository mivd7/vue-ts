import IJob from "./job";

export interface ICounter {
  count: number
}

export interface IJobs {
  allJobs: IJob[]
}

export interface IState {
  counter: ICounter
  jobs: IJobs
}