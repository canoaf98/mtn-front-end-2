import { Brand } from "../icons"

import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles(theme => ({
  logoContainer: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignContent: 'center',
    userSelect: 'none',

    '& p': {
      fontSize: '22px',
      marginLeft: theme.spacing(1.75),
      color: 'white'
    }
  },
  logoWrapper: {
    position: 'relative',
    display: 'flex',
    maxHeight: theme.spacing(4),
    minHeight: theme.spacing(4),
    minWidth: theme.spacing(5),
    maxWidth: theme.spacing(5),
    // maxHeight: '31.95px'

    '& svg:nth-child(1)': {
      // position: 'absolute',
      // bottom: 0,
      width: theme.spacing(4),
      height: theme.spacing(4),
      zIndex: 1,
    },
    '& svg:nth-child(2)': {
      position: 'absolute',
      bottom: 0,
      right: 0,
      zIndex: 2,
      width: theme.spacing(3),
      height: theme.spacing(2),
    },
  }
}));

export const Logo = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.logoContainer}>
      <Box className={classes.logoWrapper}>
        <Brand />
        <Brand variant='small'/>
      </Box>
      <Typography variant={"body1"}>
        mtn
      </Typography>
    </Box>
  )
}
