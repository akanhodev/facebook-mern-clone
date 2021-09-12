import React from 'react'
import {IconButton , Avatar} from '@material-ui/core'
import './SidebarRow.css'

function SidebarRow({Icon , src , title}) {
    return (
        <div className="sidebarRow">
             {
            src && <Avatar src={src} />
            }
            {Icon && <Icon />}


            <p>{title}</p>
            
        </div>
    )
}

export default SidebarRow
