import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNote, editNote } = context;
    
    useEffect(() => {
        getNote();
    }, [])
    
    
    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""}); 
    
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote});
    }

    const handleSubmit = (e) => {
        console.log("Updating the note...", note);
        editNote(note.id, note.etitle, note.edescription, note.et)
        refClose.current.click();
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value});
    }

    return (
        <>
            <AddNote />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} minLength={5} required />
                                </div>
                                <button disabled={note.etitle.length<5 || note.edescription.length<5} type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Note</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleSubmit}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container row my-3'>
                <h2>Your Notes</h2>
                <div>{notes.length === 0 && "No notes to display"}</div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes;