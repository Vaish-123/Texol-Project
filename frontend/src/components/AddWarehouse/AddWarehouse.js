import React, { useState } from 'react'
import axios from 'axios';
import './AddWarehouse.css';

function AddWarehouse() {
    const [name, setname] = useState('')
    const [limit, setlimit] = useState('')
    const [whsId, setwhsId] = useState('')
    function submit() {
        var name = document.getElementById('name').value;
        var limit = document.getElementById('lmt').value;
        var wId = document.getElementById('wId').value;
        axios.post('http://localhost:3001/addwarehouse', { name: name, limit: limit, wId: wId })
        setlimit('')
        setname('')
        setwhsId('')
    }
    return (
        <div className='wdiv'>
            <form>
                <div class="form-group mt-5">
                    <h6>Name</h6>
                    <input value={name} onChange={(e) => setname(e.target.value)} type="text" class="form-control ipbox" id='name' placeholder='Product Name?' />
                </div>
                <div class="form-group">
                    <h6>Quantity</h6>
                    <input value={limit} onChange={(e) => setlimit(e.target.value)} type="number" class="form-control ipbox" id='lmt' placeholder='How many to add?' />
                </div>
                <div class="form-group">
                    <h6>Warehouse id</h6>
                    <input value={whsId} onChange={(e) => setwhsId(e.target.value)} type="number" class="form-control ipbox" id='wId' placeholder='Add to which warehouse?' />
                </div>
                <button class="btn btn-primary" onClick={submit}>Submit</button>
            </form>
        </div>
    )
}

export default AddWarehouse
