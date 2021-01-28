import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider, Typography } from "@material-ui/core";
import { purple, green } from "@material-ui/core/colors";
import TypographyDemo from "./TypographyDemo";
/*const useStyles = makeStyles({
  root:{
    color:"blue"
  }
});
export default function App() {
  const classes = useStyles();
  return (<Typography 
    //color="secondary"
    //className={classes.root}
   // classes={{ root: classes.root }}
    classes={{root:classes.root
    }}
 // align="left"
 //display="inline"
 //variant="h5"
 //variantMapping={{
   //h5:"p"
 //}}
 gutterBottom>
    Hello world
    </Typography>);
}*/

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  typography: {
    h1: {
      fontSize: "1em"
    }
  }
});
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TypographyDemo />
    </ThemeProvider>
  );
}
