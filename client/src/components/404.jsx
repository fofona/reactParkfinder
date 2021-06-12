import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (

        <div className ="text-center"style={{paddingTop:"20%"}}>
            <h1>Page Not Found</h1>
            <p>Error 404 !</p>
            <Link to="/">Home Page</Link>
        </div>
        
    )
}