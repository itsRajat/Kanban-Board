import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  footer: {
    textAlign: 'bottom',
    color: '#dddddd',
    letterSpacing: '5px',
    fontSize: '12px',
    padding: '10px',
    fontWeight: '500',
  },
  container: {
    textAlign: 'center',
  },
}));

export default useStyle;
