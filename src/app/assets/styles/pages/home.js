///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default function(theme) {
  return {
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      width: '100%',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }
};
