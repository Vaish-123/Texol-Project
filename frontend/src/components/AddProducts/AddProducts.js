import React, { useState } from 'react'
import axios from 'axios';
import './AddProducts.css'

function AddProducts() {
    const [idle, setIdle] = useState('')
    function submit() {
        var name = document.getElementById('sub').value;
        axios.post('http://localhost:3001/addProd', { name: name })
        setIdle('')
    }
    return (
        <div>
            <div className="container addDiv">
                <div className='addBody'>
                    <h4>Enter name of product</h4>
                    <input placeholder='Product name' value={idle} onChange={(e) => setIdle(e.target.value)} type="text" name="" id="sub" />
                    <button onClick={submit} className='btn btn-success btn1' >Submit</button><br />
                </div>
            </div>
        </div>
    )
}

export default AddProducts