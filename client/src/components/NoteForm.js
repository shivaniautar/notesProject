import React, { useState } from 'react'
import axios from 'axios';



export default props => {
    const { initialFirstName, initialLastName, initialEntry, onSubmitProp } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [entry, setEntry] = useState(initialEntry);

    //for validation errors from backend:
    const [errors, setErrors]=useState([]);
    //keep track of what is being typed via useState hook
    // const [firstName, setFirstName] = useState(""); 
    // const [lastName, setLastName] = useState("");
    // const [entry, setEntry] = useState("");


    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({firstName, lastName, entry});
        //make a post request to create a new note
    //     axios.post('http://localhost:8000/api/notes', {
    //         firstName,
    //         lastName,
    //         entry
    //     })
    //         .then(res=>console.log(res))
    //         .catch(err=>console.log(err))
    // }
    //onChange to update firstName and lastName and entry
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" name="firstName" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" name="lastName" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
            </p>
            <p>
                <label>Note</label><br/>
                <input type="text" name="entry" onChange={(e)=>setEntry(e.target.value)} value={entry}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
