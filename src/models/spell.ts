import { types } from 'mobx-state-tree'

const Spell = types
  .model({
    name: '',
    cost: 0,
  })
  .actions(self => ({
    setName(newName: string) {
      self.name = newName
    },

    setCost(newCost: number) {
      self.cost = newCost
    },
  }))

export default Spell
