import React from 'react'
import { TWizard } from '../models/wizard'

interface IWizardCardProps {
  wizard: TWizard
}

const WizardCard: React.FC<IWizardCardProps> = props => {
  const { wizard } = props

  return (
    <p>
      Wizard name: {wizard.name}, mana: {wizard.mana}
    </p>
  )
}

export default WizardCard
