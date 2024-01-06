import React, {useContext, useState, useEffect} from 'react';
import noteContext from '../context/notes/noteContext';
import Alert from './Alert';

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({title: "", description: "", tag: ""});

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value});
    }

    return (
        <div className='container my-3'>
            <h2>Add a Note</h2>
            <Alert />
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} minLength={5} required />
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote