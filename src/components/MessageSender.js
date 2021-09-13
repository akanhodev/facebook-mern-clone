import React , {useState} from 'react'
import './MessageSender.css'
import {IconButton , Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {

    const [input,setInput ] = useState('') ;
    const [image,setImage] = useState(null) ;

    const handleChange = (e) => {
        if(e.target.files && e.target.files.length){
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        console.log("submitting")
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar 
                src="data:image/jpeg;base64,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" 
                alt="Dine Inoussa"
                />
                <form>
                    <input type="text" 
                    className="messageSender__input" 
                    value={input} 
                    placeholder="Quoi de neuf Dine"
                    onChange={(e) => setInput(e.target.value)}
                    />
                    <input type="file" className="messageSender__fileSelected" placeholder="Quoi de neuf Dine" onChange={handleChange} />
                    <button onClick={handleSubmit} type="submit"> Hidden Submit </button>
                </form>

            </div>
            
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: 'red'}} fontSize="large"/>
                    <h3>Vidéo en Direct</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon   style={{color: 'green'}} fontSize="large"/>
                    <h3>Photo/Vidéo</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon   style={{color: 'orange'}} fontSize="large" />
                    <h3>Humeur / Activité</h3>

                </div>

            </div>
            
        </div>
    )
}

export default MessageSender
