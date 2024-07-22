import { useState } from 'react';

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "669918a391273e20e781c8f9",
            "user": "6699184891273e20e781c8ef",
            "title": "my title",
            "description": "please wake up early",
            "tag": "personal",
            "date": "2024-07-18T13:29:07.082Z",
            "__v": 0
        },
        {
            "_id": "669918a391273e20e781c8fb",
            "user": "6699184891273e20e781c8ef",
            "title": "my title",
            "description": "please wake up early",
            "tag": "personal",
            "date": "2024-07-18T13:29:07.840Z",
            "__v": 0
        },
        {
            "_id": "669b9eb66f27d410a6c9b09e",
            "user": "6699184891273e20e781c8ef",
            "title": "new note",
            "description": "please access the playlist",
            "tag": "youtube",
            "date": "2024-07-20T11:25:42.537Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;