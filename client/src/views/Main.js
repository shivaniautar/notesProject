import React, { useEffect, useState } from 'react'
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import axios from 'axios';



export default () => {
    const [notes, setNotes] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/notes')
            .then(res=>{
                setNotes(res.data);
                setLoaded(true);
            });
    },[]);
    const removeFromDom = noteId => {
        setNotes(notes.filter(note => note._id != noteId));
    }
    const createNote = note => {
        axios.post('http://localhost:8000/api/notes', note)
            .then(res=>{
                setNotes([...notes, res.data]);
            })
    }
    return (
        <div>
           <NoteForm onSubmitProp={createNote} initialFirstName="" initialLastName="" entry=""/>
           <hr/>
           {loaded && <NoteList notes={notes} removeFromDom={removeFromDom}/>}
        </div>
    )
}



// import React, { useEffect, useState } from 'react';
// import NoteForm from '../components/NoteForm';
// export default () => {
//     return (
//         <div>
//            <NoteForm/>
//         </div>
//     )
// }

// we will make an api call and display our message

//Using useEffect hook to make the API call and save the message in state.

// import React, { useEffect, useState } from 'react'
// import axios from 'axios';


// export default () => {
//     const [ message, setMessage ] = useState("Loading...")
//     useEffect(()=>{
//         axios.get("http://localhost:8000/api")
//             .then(res=>setMessage(res.data.message))       
//     }, []);
//     return (
//         <div>
//             <h2>Message from the backend: {message}</h2>
//         </div>
//     )
// }
