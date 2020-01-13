import React from 'react'
import { useRootData } from '../tools/useRootData'
import WizardCard from './WizardCard'
import SpellCard from './SpellCard'
import useStyles from './App.style'

const App: React.FC = () => {
  const styles = useStyles()

  const { wizards, spells } = useRootData(store => ({
    wizards: store.wizards,
    spells: store.spells,
  }))

  return (
    <main className={styles.root}>
      {wizards.map(wizard => (
        <WizardCard key={wizard.name} wizard={wizard} />
      ))}
      {spells.map(spell => (
        <SpellCard key={spell.name} spell={spell} />
      ))}
    </main>
  )
}

export default App
