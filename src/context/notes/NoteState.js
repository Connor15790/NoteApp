import React from 'react';
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6585b97a45065b0bc39bb276",
            "user": "6584d6e59208f241ef177fea",
            "title": "Do your dishes",
            "description": "Do the dishes",
            "tag": "personal",
            "date": "2023-12-22T16:29:46.531Z",
            "__v": 0
        },
        {
            "_id": "658da3a3917aa8a85b0ac626",
            "user": "6584d6e59208f241ef177fea",
            "title": "Do your job",
            "description": "Do the printing job",
            "tag": "personal",
            "date": "2023-12-28T16:34:43.028Z",
            "__v": 0
        },
        {
            "_id": "658da3a3917aa8a85b0ac626",
            "user": "6584d6e59208f241ef177fea",
            "title": "Do your job",
            "description": "Do the printing job",
            "tag": "personal",
            "date": "2023-12-28T16:34:43.028Z",
            "__v": 0
        },
        {
            "_id": "658da3a3917aa8a85b0ac626",
            "user": "6584d6e59208f241ef177fea",
            "title": "Do your job",
            "description": "Do the printing job",
            "tag": "personal",
            "date": "2023-12-28T16:34:43.028Z",
            "__v": 0
        },
        {
            "_id": "658da3a3917aa8a85b0ac626",
            "user": "6584d6e59208f241ef177fea",
            "title": "Do your job",
            "description": "Do the printing job",
            "tag": "personal",
            "date": "2023-12-28T16:34:43.028Z",
            "__v": 0
        },
        {
            "_id": "658da3a3917aa8a85b0ac626",
            "user": "6584d6e59208f241ef177fea",
            "title": "Do your job",
            "description": "Do the printing job",
            "tag": "personal",
            "date": "2023-12-28T16:34:43.028Z",
            "__v": 0
        },
        {
            "_id": "658da3a3917aa8a85b0ac626",
            "user": "6584d6e59208f241ef177fea",
            "title": "Do your job",
            "description": "Do the printing job",
            "tag": "personal",
            "date": "2023-12-28T16:34:43.028Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial);

    return (
        <noteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;