import React from 'react'
import { useRootData } from '../tools/useRootData'
import WizardCard from './WizardCard'
import SpellCard from './SpellCard'
import useStyles from './App.style'

const App: React.FC = () => {
  const styles = useStyles()

  const { wizards, spells, addWizard } = useRootData(store => ({
    wizards: store.wizards,
    spells: store.spells,
    addWizard: store.addWizard,
  }))

  return (
    <main className={styles.root}>
      {wizards.map(wizard => (
        <WizardCard key={wizard.name} wizard={wizard} />
      ))}
      {spells.map(spell => (
        <SpellCard key={spell.name} spell={spell} />
      ))}
      <button
        className={styles.button}
        onClick={() =>
          addWizard(String(Date.now()), Math.floor(Math.random() * 100))
        }
      >
        New
      </button>
    </main>
  )
}

export default App
