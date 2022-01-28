import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Logo } from '../../components';

const useStyles = makeStyles(theme => ({

}));

export const LandingPage = (props) => {
  const classes = useStyles();
  return (
    <Box>
      <Logo />
    </Box> 
  ) 
}