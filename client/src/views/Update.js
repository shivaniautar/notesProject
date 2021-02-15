import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {navigate} from '@reach/router';
import NoteForm from '../components/NoteForm';
import DeleteButton from '../components/DeleteButton';






export default props => {
    const { id } = props;
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [entry, setEntry] = useState('');
    const [note, setNote] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/notes/' + id)
            .then(res => {
                setNote(res.data);
                setLoaded(true);
                // setFirstName(res.data.firstName);
                // setLastName(res.data.lastName);
                // setEntry(res.data.entry);
            })
    }, [])
    // const updateNote = e => {
    //     e.preventDefault();
    //     axios.put('http://localhost:8000/api/notes/' + id, {
    //         firstName,
    //         lastName,
    //         entry
    //     })
    //         .then(response => navigate('/notes/'));
    // }
    const updateNote = note => {
        axios.put('http://localhost:8000/api/notes/' + id, note)
            .then(res => console.log(res));
    }
    return (
        <div>
            {loaded && (
                <>
                    <NoteForm
                        onSubmitProp={updateNote}
                        initialFirstName={note.firstName}
                        initialLastName={note.lastName}
                        initialEntry={note.entry}
                    />
                    <DeleteButton noteId={note._id} successCallback={() => navigate("/notes")}/>
                </>
            )}
        </div>
    )
}

            {/* <h1>Update a Note</h1>
            <form onSubmit={updateNote}>
                <p>
                    <label>First Name</label><br />
                    <input type="text" 
                    name="firstName" 
                    value={firstName} 
                    onChange={(e) => { setFirstName(e.target.value) }} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" 
                    name="lastName"
                    value={lastName} 
                    onChange={(e) => { setLastName(e.target.value) }} />
                </p>
                <p>
                    <label>Entry</label><br />
                    <input type="text" 
                    name="entry"
                    value={entry} 
                    onChange={(e) => { setEntry(e.target.value) }} />
                </p>
                <input type="submit" />
            </form> */}