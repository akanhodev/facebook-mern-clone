import React from 'react'
import {Avatar } from '@material-ui/core'
import './Contact.css'

function Contact({image,  name}) {
    return (
        <div className="contact">

            {<Avatar src={image}  />}
            <p>{name}</p>

            
        </div>
    )
}

export default Contact