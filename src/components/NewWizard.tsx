import React, { useState } from 'react'
import clsx from 'clsx'
import { useRootData } from '../tools/useRootData'
import useStyles from './NewWizard.style'

const NewWizard: React.FC = props => {
  const styles = useStyles()

  const addWizard = useRootData(store => store.addWizard)

  const [name, setName] = useState('')
  const [mana, setMana] = useState(0)
  const [nameError, setNameError] = useState(false)
  const [manaError, setManaError] = useState(false)

  const validateForm = () => {
    let res = true
    if (name.length === 0) {
      setNameError(true)
      res = false
    }
    if (mana === 0) {
      setManaError(true)
      res = false
    }
    return res
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      addWizard(name, mana)
      setName('')
      setMana(0)
    }
  }

  return (
    <form onSubmit={onSubmit} className={styles.root}>
      <input
        type="text"
        value={name}
        name="name"
        id="name"
        onChange={e => {
          setNameError(false)
          setName(e.target.value)
        }}
        className={clsx(
          styles.input,
          styles.shadow,
          nameError && styles.inputError,
        )}
      />
      <label htmlFor="name" className={styles.label}>
        Wizard name
      </label>
      <input
        type="number"
        value={mana}
        name="man"
        id="mana"
        onChange={e => {
          setManaError(false)
          setMana(Number(e.target.value))
        }}
        className={clsx(
          styles.input,
          styles.shadow,
          manaError && styles.inputError,
        )}
      />
      <label htmlFor="mana" className={styles.label}>
        Wizard mana
      </label>
      <button className={clsx(styles.button, styles.shadow)}>Add</button>
    </form>
  )
}

export default NewWizard
