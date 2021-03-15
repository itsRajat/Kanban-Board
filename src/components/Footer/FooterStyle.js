import { makeStyles } from '@material-ui/core/styles';
//Created a seperate file for styles here to just show that this is how I would normally do it. Have components & styles of a function in the same folder, but seperate files.

const useStyle = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    textAlign: 'bottom',
    color: '#ffffff',
    letterSpacing: '5px',
    fontSize: '12px',
    paddingBottom: '10px',
    fontWeight: '400',
    textShadow: '2px 2px 8px #d4d4d4',
    '@media (max-width: 600px)': {
      fontSize: '10px',
      letterSpacing: '2px',
      textAlign: 'center',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyle;
