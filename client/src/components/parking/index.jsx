import React from 'react'
import {Table ,Button} from "react-bootstrap";


export default function Index() {
    
    return (
        <div>
     

        <Table style={{ fontSize: 15,width: '70%',
        marginTop:'100px',
        marginLeft:'300px' }} responsive="sm">
           
        <thead>
          <tr>
            <th>id</th>
            <th>Adresse</th>
            <th>Nom_parking</th>
            <th>nbre_palce_T</th>
            <th>nbre_palce_O</th>
            <th>nbre_palce_L</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        
                <tr>
                  <td>2</td>
                  <td>lle</td>
                  <td>marina</td>
                  <td>180</td>
                  <td>20</td>
                  <td>200</td>
                  <td>
                  <button type="button" class="btn btn-outline-info">ADD</button>
                   
                    <button type="button" class="btn btn-outline-dark">EDITE</button>
                 
                  </td>
                </tr>
           
        </tbody>
      </Table>
      </div>
     
    )
}