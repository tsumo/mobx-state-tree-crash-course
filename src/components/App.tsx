import React from 'react'
import { useObserver } from 'mobx-react-lite'
import { useRootData } from '../tools/useRootData'
import WizardCard from './WizardCard'
import SpellCard from './SpellCard'
import useStyles from './App.style'
import NewWizard from './NewWizard'

const App: React.FC = () => {
  const styles = useStyles()

  const { wizards, spells } = useRootData(store => ({
    wizards: store.wizards,
    spells: store.spells,
  }))

  return useObserver(() => (
    <main className={styles.root}>
      <div className={styles.sections}>
        <div className={styles.section}>
          {wizards.map(wizard => (
            <WizardCard key={wizard.name} wizard={wizard} />
          ))}
        </div>
        <div className={styles.section}>
          {spells.map(spell => (
            <SpellCard key={spell.name} spell={spell} />
          ))}
        </div>
      </div>
      <NewWizard />
    </main>
  ))
}

export default App
