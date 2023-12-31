import React, {useContext} from 'react';
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
    const { note, updateNote } = props;
    const context = useContext(noteContext);
    const { addNote, deleteNote } = context;

    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash" style={{ cursor: "pointer" }} onClick={() => {deleteNote(note._id)}}></i>
                    <i className="fa-solid fa-pen-to-square mx-3" style={{ cursor: "pointer" }} onClick={() => updateNote(note)}></i>
                </div>
            </div>
        </div>
    )
}

export default Noteitem