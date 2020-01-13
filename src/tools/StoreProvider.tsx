import React, { createContext } from 'react'
import { useLocalStore } from 'mobx-react-lite'
import { onSnapshot } from 'mobx-state-tree'
import RootStoreModel, { IRootStore } from '../models/rootStore'

export const StoreContext = createContext<IRootStore | null>(null)

const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(() => RootStoreModel.create())
  onSnapshot(store, snapshot => console.log('New snapshot', snapshot))

  store.addSpell('Chill Touch', 10)
  store.addWizard('Paula Undergun', 100)

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider
