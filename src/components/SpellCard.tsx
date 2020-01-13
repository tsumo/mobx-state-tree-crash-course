import React from 'react'
import { TSpell } from '../models/spell'
import Card from './Card'

interface ISpellCardProps {
  spell: TSpell
}

const SpellCard: React.FC<ISpellCardProps> = props => {
  const { spell } = props

  return (
    <Card>
      <p>Spell name: {spell.name}</p>
      <p>cost: {spell.cost}</p>
    </Card>
  )
}

export default SpellCard
