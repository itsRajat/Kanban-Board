import { makeStyles } from '@material-ui/core/styles';
//Created a seperate file for styles here to just show that this is how I would normally do it. Have components & styles in seperate files.

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
  },
  container: {
    // textAlign: 'center',
    // width: '100vw',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyle;
