import React from "react";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    body: {
        padding:"1rem",
        width: "97.7vw",
        height: "95vh",
        background: {
            image: 'linear-gradient(to right bottom, maroon, white)'
        },
        display: "grid",
        justifyContent:"center",
        alignContent:"center",
        gridTemplateRows: "repeat(3, 150px)",
        gridTemplateColumns: "repeat(3, 150px)",
        gap: ".5rem",
        // flexWrap: "wrap",
    },
    cell1: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        padding: "1rem",
        color: "lightblue",
        // borderRadius: "15px",
    },

})

function App() {
    const classes = useStyles()
    return (
        <div className={classes.body}>
            <div className={classes.cell1} style={{backgroundColor:"purple"}}>
                <h1>1</h1>
            </div>

            <div className={classes.cell1} style={{backgroundColor:"pink"}}>
                <h1>2</h1>
            </div>
            <div className={classes.cell1} style={{backgroundColor:"green"}}>
                <h1>3</h1>
            </div>
            <div className={classes.cell1} style={{backgroundColor:"aqua"}}>
                <h1>4</h1>
            </div>

            <div className={classes.cell1} style={{backgroundColor:"orangered"}}>
                <h1>5</h1>
            </div>

            <div className={classes.cell1} style={{backgroundColor:"lightskyblue"}}>
                <h1>6</h1>
            </div>

        </div>
    );
}

export default App;