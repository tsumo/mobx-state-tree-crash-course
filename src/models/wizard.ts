import { types, Instance } from 'mobx-state-tree'

const WizardModel = types
  .model({
    name: types.optional(types.string, ''),
    mana: types.optional(types.number, 0),
  })
  .actions(self => ({
    setName(newName: string) {
      self.name = newName
    },

    setMana(newMana: number) {
      self.mana = newMana
    },
  }))

export interface IWizard extends Instance<typeof WizardModel> {}
export type TWizard = typeof WizardModel.Type

export default WizardModel
