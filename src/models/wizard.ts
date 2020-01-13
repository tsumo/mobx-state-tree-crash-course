import { types } from 'mobx-state-tree'

const Wizard = types
  .model({
    name: '',
    mana: 0,
  })
  .actions(self => ({
    setName(newName: string) {
      self.name = newName
    },

    setMana(newMana: number) {
      self.mana = newMana
    },
  }))

export default Wizard
