import { types, Instance } from 'mobx-state-tree'

const SpellModel = types
  .model({
    name: types.optional(types.string, ''),
    cost: types.optional(types.number, 0),
  })
  .actions(self => ({
    setName(newName: string) {
      self.name = newName
    },

    setCost(newCost: number) {
      self.cost = newCost
    },
  }))

export interface ISpell extends Instance<typeof SpellModel> {}
export type TSpell = typeof SpellModel.Type

export default SpellModel
