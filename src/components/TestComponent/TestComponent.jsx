import classes from './TestComponent.module.css'




export const  TestComponent = () => {

    const onStyle={
        width: "40px",
        height: "20px",
        backgroundColor: "green",
        border: "solid 1px black",
        display: "inline-block"
    }

    const offStyle={
        width: "40px",
        height: "20px",
        backgroundColor: "red",
        border: "solid 1px black",
        display: "inline-block"
    }

    const indicatorStyle={
        width: "20px",
        height: "20px",
        borderRadius: "20px",
        backgroundColor: "red" ,
        border: "solid 1px black",
        display: "inline-block"
    }

    return     <div>
    <div className={classes.TestComponentDiv}>I'm test component</div>
        <div style={onStyle}>On</div>
        <div style={offStyle}>Off</div>
        <div style={indicatorStyle}></div>
    </div>

}


