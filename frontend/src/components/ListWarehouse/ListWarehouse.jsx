import axios from 'axios'
import React, { useState } from 'react'
import './ListWarehouse.css'

function ListWarehouse() {
    const [temp, settemp] = useState([])
    async function abc() {
        var wId = document.getElementById('ip').value;
        var sample = await axios.post('http://localhost:3001/listwarehouse', { wId: wId })
        settemp(sample);
    }
    return (
        <div className='container'>
            <div className="ldiv">
                <h5 className='mt-1'>Enter warehouse Id</h5>
                <input type="number" id='ip' placeholder='Warehouse Id' />
                <button onClick={abc} className='btn btn-primary sbtn'>submit</button>
            </div>
            <table className='table table-bordered'>
                <thead>
                    <th scope="col" className='lth1'>No.</th>
                    <th className='lth2'>Name of Product</th>
                    <th>Quantity</th>
                </thead>
            </table>
            {
                temp.map((obj, index) => {
                    return (
                        <div className='lbody'>
                            <table className='table table-bordered'>
                                <tbody>
                                    <tr>
                                        <td className='ltd1'>{index + 1}</td>
                                        <td className='ltd2'>{obj.name}</td>
                                        <td>{obj.wId}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ListWarehouse
