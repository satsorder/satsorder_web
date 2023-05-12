import { atom, selector } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const commonState = atom({
  key: 'commonState',
  default: {
    count: 0,
    language: 'zh',
    developer: 'raul',
    email: ''
  },
  effects_UNSTABLE: [persistAtom],
})

export const productCount = selector({
  key:  'productCount',
  get: ({get}) => {
    return get(commonState)
  },
  set:({set, reset, get}, newValue) => {
    console.log(newValue)
  }
})
