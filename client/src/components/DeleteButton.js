import React from 'react'
import axios from 'axios';


export default props => {
    const { noteId, successCallback } = props;
    const deleteNote = e => {
        axios.delete('http://localhost:8000/api/notes/' + noteId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteNote}>
            Delete
        </button>
    )
}
