import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    width: '150px',
    height: '230px',
    border: '1.2px solid rgba(255,255,255,0.6)',
    borderRadius: '10px',
    boxShadow: '0px 0px 36px 7px rgba(255,255,255,0.2)',
    display: 'inline-block',
    padding: '15px',
    margin: '30px',
    lineHeight: 2,
    fontSize: '2em',
  },
})

export default useStyles
