import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  footer: {
    textAlign: 'bottom',
    color: '#ffffff',
    letterSpacing: '5px',
    fontSize: '12px',
    paddingBottom: '10px',
    fontWeight: '400',
    textShadow: '2px 2px 8px #d4d4d4',
  },
  container: {
    textAlign: 'center',
  },
}));

export default useStyle;
