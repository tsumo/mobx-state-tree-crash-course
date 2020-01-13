import React from 'react'
import { TSpell } from '../models/spell'
import Card from './Card'
import { SpellBoltIcon } from './Icons'

interface ISpellCardProps {
  spell: TSpell
}

const SpellCard: React.FC<ISpellCardProps> = props => {
  const { spell } = props

  return (
    <Card icon={<SpellBoltIcon size={100} />}>
      <p>{spell.name}</p>
      <p>Spell</p>
      <p>cost: {spell.cost}</p>
    </Card>
  )
}

export default SpellCard
