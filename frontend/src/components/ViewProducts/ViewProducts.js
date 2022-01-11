import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import './ViewProducts.css'

function GetProduct() {
    const [prod, setProd] = useState([])
    const del = (index) => {
        var name = prod.map((obj, i) => {
            if (index === i)
                return obj.name
        })
        axios.post('http://localhost:3001/delProd', { name: name })
    }
    useEffect(() => {
        axios.get('http://localhost:3001/viewProd').then(result => {
            setProd(result.data);
        })
    }, [])
    return (
        <div className='container'>
            <h3>Products List : </h3>
            <table className='table table-bordered'>
                <thead>
                    <th scope="col">No.</th>
                    <th className='th2'>Name of Product</th>
                </thead>
            </table>
            {
                prod.map((obj, index) => {
                    return (
                        <table className='table table-bordered'>
                            <tbody>
                                <tr>
                                    <td className='td1'>{index + 1}</td>
                                    <td className='td2'>{obj.name}</td>
                                    <td><form action=""><button onClick={() => { del(index) }} className='td3 btn btn-danger' id='dele'>Delete</button></form></td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })
            }
        </div >
    )
}

export default GetProduct
