import React, { useContext } from 'react';
import { noteContext } from '../context/noteContext';

export const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (
        <div>
            <div className='container my-3'>
                <h2>Add a Note</h2>
                {notes.map((note) => {
                    return note.title;
                }
                )}
            </div>
        </div>
    )
}
