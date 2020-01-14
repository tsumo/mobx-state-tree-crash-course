import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  button: {
    textDecoration: 'none',
    color: 'rgba(255, 255, 255, 0.8)',
    background: 'rgb(51, 51, 51)',
    padding: '10px 20px',
    borderRadius: '4px',
    borderColor: '#aeaeae',
    borderWidth: '1.2px',
    fontWeight: 'normal',
    textTransform: 'uppercase',
    transition: 'all 0.2s ease-in-out',
  },
})

export default useStyles
