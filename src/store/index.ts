import { onSnapshot } from 'mobx-state-tree'
import RootStore from '../models'

const store = RootStore.create()

onSnapshot(store, snapshot => console.log(snapshot))

export default store
