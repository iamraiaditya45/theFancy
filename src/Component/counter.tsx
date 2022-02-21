import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

const usestyles = makeStyles(() => ({
    container: {
        border: "1px solid gray",
        borderRadius: "2px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        height: "40px",
        width: "90px",
        alignItems: "center",
    },
    btn: {
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40px",
        width: "30px",
        border: "none",
    },
    para: {

    }
}));

interface Props {
    value: number;
    onChangeValue: Function;
}

export default function Counter({ value, onChangeValue }: Props) {
    const classes = usestyles();

    const onInc = (() => {
        onChangeValue(value + 1);
    })
    const onDec = (() => {
        if (value > 1) {
            onChangeValue(value - 1);
        }
    })
    return (
        <div className={classes.container} >
            <button className={classes.btn} onClick={onDec}>{"-"}</button>
            <p className={classes.para} >{value}</p>
            <button className={classes.btn} onClick={onInc} >{"+"}</button>
        </div>
    );
}