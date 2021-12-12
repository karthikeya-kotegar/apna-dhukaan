import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },

  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },

  grow: {
    flexGrow: 1,
  },

  alert: {
    marginTop: 100,
  },

  name: {
    fontSize: '1.5rem',
  },

  main: {
    minHeight: '80vh',
  },

  section: {
    marginTop: 10,
    marginBottom: 20,
  },

  footer: {
    textAlign: 'center',
    backgroundColor: '#203040',
    color: '#ffffff',
    marginTop: 10,
  },
});

export default useStyles;
