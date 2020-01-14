import React, { useState } from 'react'
import { useRootData } from '../tools/useRootData'
import useStyles from './NewWizard.style'

const NewWizard: React.FC = props => {
  const styles = useStyles()

  const addWizard = useRootData(store => store.addWizard)

  const [name, setName] = useState('')
  const [mana, setMana] = useState(0)

  const resetForm = () => {
    setName('')
    setMana(0)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addWizard(name, mana)
    resetForm()
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <input
        type="number"
        value={mana}
        onChange={e => setMana(Number(e.target.value))}
      />
      <button className={styles.button}>Add</button>
    </form>
  )
}

export default NewWizard
