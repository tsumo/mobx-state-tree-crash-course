import React, { ReactNode } from 'react'
import useStyles from './Card.style'

export interface ICardProps {
  icon: ReactNode
}

const Card: React.FC<ICardProps> = ({ icon, children }) => {
  const styles = useStyles()

  return (
    <figure className={styles.root}>
      {icon}
      {children}
    </figure>
  )
}

export default Card
