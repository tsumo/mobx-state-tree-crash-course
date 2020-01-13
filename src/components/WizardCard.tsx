import React from 'react'
import { TWizard } from '../models/wizard'
import Card from './Card'

interface IWizardCardProps {
  wizard: TWizard
}

const WizardCard: React.FC<IWizardCardProps> = props => {
  const { wizard } = props

  return (
    <Card>
      <p>Wizard name: {wizard.name}</p>
      <p>mana: {wizard.mana}</p>
    </Card>
  )
}

export default WizardCard
