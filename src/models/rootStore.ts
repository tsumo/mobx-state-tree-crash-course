import { types, Instance } from 'mobx-state-tree'
import SpellModel from './spell'
import WizardModel from './wizard'

const RootStoreModel = types
  .model({
    spells: types.array(SpellModel),
    wizards: types.array(WizardModel),
  })
  .actions(self => ({
    addSpell(name: string, cost: number) {
      self.spells.push(SpellModel.create({ name, cost }))
    },

    addWizard(name: string, mana: number) {
      self.wizards.push(WizardModel.create({ name, mana }))
    },
  }))

export interface IRootStore extends Instance<typeof RootStoreModel> {}
export type TRootStore = typeof RootStoreModel.Type

export default RootStoreModel
