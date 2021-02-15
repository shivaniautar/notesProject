import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';



export default props => {
    const [note, setNote] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/notes/" + props.id)
            .then(res => setNote({
                ...res.data
            }))
    }, [props.id])

    return (
        <div>
            <p>First Name: {note.firstName}</p>
            <p>Last Name: {note.lastName}</p>
            <p>Note Entry: {note.entry}</p>
            <Link to={"/notes/" + note._id + "/edit"}>Edit
            </Link>
        </div>
    )
}
