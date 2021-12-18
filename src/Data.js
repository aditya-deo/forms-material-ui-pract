import React from 'react'
import storage from "./firebase.js";

const Data = () => {
    console.log(storage.ref().child("images"));
    return (
        <div>
            This is Data
        </div>
    )
}

export default Data
