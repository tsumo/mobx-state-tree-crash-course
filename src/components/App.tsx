import React from 'react'
import { useRootData } from '../tools/useRootData'
import WizardCard from './WizardCard'
import SpellCard from './SpellCard'

const App: React.FC = () => {
  const { wizards, spells } = useRootData(store => ({
    wizards: store.wizards,
    spells: store.spells,
  }))

  return (
    <>
      {wizards.map(wizard => (
        <WizardCard key={wizard.name} wizard={wizard} />
      ))}
      {spells.map(spell => (
        <SpellCard key={spell.name} spell={spell} />
      ))}
    </>
  )
}

export default App
