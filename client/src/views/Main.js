
import React, { useEffect, useState } from 'react';
import NoteForm from '../components/NoteForm';
export default () => {
    return (
        <div>
           <NoteForm/>
        </div>
    )
}





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
