import React from 'react'
import axios from 'axios';
import {Link, navigate } from '@reach/router';
import DeleteButton from './DeleteButton';
import { useEffect, useState } from 'react'


export default props => {
    // const { removeFromDom } = props;
    // const deleteNote = (noteId) => {
    //     axios.delete('http://localhost:8000/api/notes/' + noteId)
    //         .then(res => {
    //             removeFromDom(noteId)
    //         })
    // }
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/notes')
            .then(res => setNotes(res.data));
    }, [])
    const removeFromDom = noteId => {
        setNotes(notes.filter(note => note._id != noteId))
    }
    return (
        <div>
            {props.notes.map((note, idx) => {
                return <p key={idx}>
                    <Link to={"/notes/" + note._id}>
                        {note.lastName}, {note.firstName}
                    </Link>
                    {note.entry}
                    {/* <button onClick={(e)=>{deleteNote(note._id)}}>
                        Delete
                    </button> */}
                    <DeleteButton noteId={note._id} successCallback={()=>removeFromDom(note._id)}/>
                </p>
            })}

        </div>
    )
}
