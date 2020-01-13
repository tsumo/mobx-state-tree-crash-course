import { types } from 'mobx-state-tree'
import Spell from '../models/spell'
import Wizard from '../models/wizard'

const RootStore = types
  .model({
    spells: types.map(Spell),
    wizards: types.map(Wizard),
  })
  .actions(self => ({
    addSpell(id: string, name: string, cost: number) {
      self.spells.set(id, Spell.create({ name, cost }))
    },

    addWizard(id: string, name: string, mana: number) {
      self.wizards.set(id, Wizard.create({ name, mana }))
    },
  }))

export default RootStore
