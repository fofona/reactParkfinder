import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

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
        <div className ="text-center"style={{paddingTop:"20%"}} responsive="sm">
            
            
            <Container>
    <Row style={{ marginTop: '100px' }}>
        <Col md={{span: 6, offset: 3}}>

        <Form >
                <input 
                    label="name"
                    placeholder="name"
                   
                    type="name"value={state.name} onChange={ handleChange } 
                    
                />
             <input 
                    label="email"
                    placeholder="Email"
                   
                    type="email"value={state.email} onChange={ handleChange } 
                    
                />
                <input 
                    label="agel"
                    placeholder="age"
                   
                    type="age"value={state.age} onChange={ handleChange } 
                    
                />

                
            </Form>
            <Button variant="primary" type="submit" onClick={handleAddUser}>add</Button>
            </Col>
    </Row>
    
</Container>

        </div>
    )
}
