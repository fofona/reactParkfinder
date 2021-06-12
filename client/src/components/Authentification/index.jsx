import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'

export default function Index() {

    const [state, setState] = useState(
        {
            email: "",
            name: "",
            age: ""
        }
    )

    function handleAddUser(){
        db.collection("users").add({
            age: state.age,
            email: state.email,
            name: state.name
        })
        .then((docRef) => {
            console.log("users added", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
        console.log(state)
    }
    

    return (
        <div className ="text-center"style={{paddingTop:"20%"}}>
            <h1>Je suis la page index (Authenfication)</h1>

            <form action="">
                <input type="text" name="name" value={state.name} onChange={ handleChange } />
                <input type="email" name="email" value={state.email} onChange={ handleChange } />
                <input type="text" name="age" value={state.age} onChange={ handleChange } />
            </form>
            <button onClick={handleAddUser}>add</button>
        </div>
    )
}