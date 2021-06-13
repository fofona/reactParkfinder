import React from 'react'
import {Table } from "react-bootstrap";

export default function Index() {
    return (
        <Table style={{ fontSize: 15,width: '70%',
        marginTop:'100px',
        marginLeft:'300px' }} responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        
                <tr>
                  <td>2</td>
                  <td>lle</td>
                  <td>jjn</td>
                  <td>j,</td>
                  <td>jhn,</td>
                  <td>
                    <button >
                      info
                    </button>
                    <button
                     
                    >
                      del
                    </button>
                  </td>
                </tr>
           
        </tbody>
      </Table>
    )
}