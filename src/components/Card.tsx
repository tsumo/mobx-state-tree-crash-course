import React from 'react'
import useStyles from './Card.style'

const Card: React.FC = ({ children }) => {
  const styles = useStyles()

  return <figure className={styles.root}>{children}</figure>
}

export default Card
