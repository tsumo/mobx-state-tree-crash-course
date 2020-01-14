import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    color: '#aeaeae',
    textAlign: 'center',
    padding: '100px',
  },
  sections: {
    display: 'flex',
    justifyContent: 'center',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
  },
})

export default useStyles
