import React from 'react'
import { TWizard } from '../models/wizard'
import Card from './Card'
import { WizardHatIcon } from './Icons'

interface IWizardCardProps {
  wizard: TWizard
}

const WizardCard: React.FC<IWizardCardProps> = props => {
  const { wizard } = props

  return (
    <Card icon={<WizardHatIcon size={100} />}>
      <p>{wizard.name}</p>
      <p>Wizard</p>
      <p>mana: {wizard.mana}</p>
    </Card>
  )
}

export default WizardCard
