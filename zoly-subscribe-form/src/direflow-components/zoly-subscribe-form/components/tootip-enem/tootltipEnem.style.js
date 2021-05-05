import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles( (theme) => ({
    modal: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        filter: "drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.25))"
      },
      paper: {
        width:"15rem",
        height:"8rem",
        padding: theme.spacing(2),
        lineHeight: 1.6,
        backgroundColor: theme.palette.background.paper,
        borderRadius:"4px",
        boxShadow: theme.shadows[5]
       },
    title: {
        color: "#F05A22",
        fontWeight: "700",
    },
    text: {
        paddingTop: theme.spacing(1),
        fontSize: "0.75rem",
    }
}))

export default useStyles