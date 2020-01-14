import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    color: 'rgba(255,255,255,0.6)',
    backgroundColor: 'rgb(51, 51, 51)',
    margin: '5px',
    border: '1.6px solid rgba(255, 255, 255, 0.6)',
  },
  inputError: {
    backgroundColor: 'red',
  },
  button: {
    textDecoration: 'none',
    color: 'rgba(255, 255, 255, 0.8)',
    background: 'rgb(51, 51, 51)',
    padding: '10px 20px',
    margin: '5px',
    borderRadius: '4px',
    borderColor: '#aeaeae',
    borderWidth: '1.2px',
    fontWeight: 'normal',
    textTransform: 'uppercase',
    transition: 'all 0.2s ease-in-out',
  },
  label: {
    margin: '5px',
    fontSize: '1.5em',
  },
  shadow: {
    boxShadow: '0 0 6px rgba(255, 255, 255, 0.5)',
  },
})

export default useStyles
