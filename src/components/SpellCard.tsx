import React from 'react'
import { TSpell } from '../models/spell'

interface ISpellCardProps {
  spell: TSpell
}

const SpellCard: React.FC<ISpellCardProps> = props => {
  const { spell } = props

  return (
    <p>
      Spell name: {spell.name}, cost: {spell.cost}
    </p>
  )
}

export default SpellCard
