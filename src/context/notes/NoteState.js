import React from 'react';
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"

    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial);

    // Get all notes
    const getNote = async () => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4NGQ2ZTU5MjA4ZjI0MWVmMTc3ZmVhIn0sImlhdCI6MTcwMzIwNDU5NH0.pco3lsZFpOKDv7oOhDyrCBQGY2IHkUglH8RjFxHkbus"
            },
        });

        const json = await response.json();
        console.log(json)
        setNotes(json);
    }

    // Add Note
    const addNote = async (title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/createnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4NGQ2ZTU5MjA4ZjI0MWVmMTc3ZmVhIn0sImlhdCI6MTcwMzIwNDU5NH0.pco3lsZFpOKDv7oOhDyrCBQGY2IHkUglH8RjFxHkbus"
            },
            body: JSON.stringify({title, description, tag})
        });

        const note = {
            "_id": "658da3a3917aa8a1685b0ac626",
            "user": "6584d6e59208f241ef177fea",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-12-28T16:34:43.028Z",
            "__v": 0
        }

        setNotes(notes.concat(note));
    }

    // Edit Note
    const editNote = async (id, title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4NGQ2ZTU5MjA4ZjI0MWVmMTc3ZmVhIn0sImlhdCI6MTcwMzIwNDU5NH0.pco3lsZFpOKDv7oOhDyrCBQGY2IHkUglH8RjFxHkbus"
            },
            body: JSON.stringify({title, description, tag})
        });
        const json = response.json();

    // Logic to edit note
    for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (element.id === id) {
            element.title = title;
            element.description = description;
            element.tag = tag;
        }
    }
}

// Delete Note
const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4NGQ2ZTU5MjA4ZjI0MWVmMTc3ZmVhIn0sImlhdCI6MTcwMzIwNDU5NH0.pco3lsZFpOKDv7oOhDyrCBQGY2IHkUglH8RjFxHkbus"
        },
    });
    const json = response.json();

    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
}

return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNote }}>
        {props.children}
    </noteContext.Provider>
)
}

export default NoteState;