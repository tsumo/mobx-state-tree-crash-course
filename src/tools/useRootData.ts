import { StoreContext } from '../tools/StoreProvider'
import { TRootStore } from '../models/rootStore'
import { useStoreData } from './useStoreData'

export const useRootData = <Selection>(
  dataSelector: (store: TRootStore) => Selection,
) => useStoreData(StoreContext, contextData => contextData!, dataSelector)
