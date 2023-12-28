import React from 'react';
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    return (
        <noteContext.Provider value={{}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;