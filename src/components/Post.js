import React from 'react'
import './Post.css'
import {IconButton , Avatar} from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function Post( {imageName , ProfileSrc , timestamp, messageSender ,username }) {
    return (
        <div className="post">
            <div className="post__top">
                <IconButton>
                    <Avatar src={ProfileSrc} className="post__avatar"/>
                </IconButton>
                <div className="post__topInfo">
                    <h3>{username}</h3> 
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>

                </div>
            </div>    
            <div className="post__bottom">
                {/* Image is coming  later */}
                <p>{messageSender}</p>
            </div>    
            
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">

                    <AccountCircleIcon />
                    <ExpandMoreIcon />                      
                </div>
            
            </div>          
            
        </div>
    )
}

export default Post ;
