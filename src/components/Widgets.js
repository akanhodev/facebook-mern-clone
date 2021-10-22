import React from 'react'
import './Widgets.css'
import PeopleIcon from '@material-ui/icons/People';
import {IconButton , Avatar} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import Contact from './Contact'

function Widgets() {
    return (
        <div className="widgets">
            {/* <h1>hello widgets</h1> */}
            {/* <h1>hello I'm Widgets components</h1> */}
           {/* <iframe
             src='https://fb.watch/7_nRsEf-ge/'
             width='340'
             height='1500'
             style={{border: 'none' , overflow: 'hidden'}}
             scrolling="no"
             frameborder="0"
             allowTransparency="true"
             allow="encrypted-media"
            > 

            </iframe> */}
             <div className="widgets__invitation">
                <div className="widgets__invitation_info">
                    <PeopleIcon /> 
                    <h3>Invitations</h3>
                    <MoreHorizIcon />
                    
                </div>

                <div className="widgets__invitation_avatar">
                    <Avatar 
                    className="avatar"
                    src="https://scontent.fabj4-1.fna.fbcdn.net/v/t1.6435-9/123134703_3403428959726542_1079024957435818307_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1UiKaCcpPLQAX_Qzbdj&_nc_ht=scontent.fabj4-1.fna&oh=5b5c0bf19bb9610987872ef3415c6442&oe=61640E42" 
                    alt="Invited" /> 
                    <div className="avatar__info">
                        <h3>Marvin ZANNOU</h3>
                        <p>25 amis en commun</p>

                    </div>
                    
                    

                </div>
                    <form className="avatar__submit">

                        <button style={{backgroundColor :'#2D88FF' , marginLeft: "60px"}}>Confirmer</button>
                        <button style={{color :'black'}}>Supprimer</button>
                    </form>
            </div>


            <div className="widgets__contact">

                <div className="contact">
                    <h2>Contacts</h2>
                    <Contact 
                    image="https://scontent.fabj4-1.fna.fbcdn.net/v/t1.6435-9/45364270_310974256350615_5176869152979156992_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=J6SIIAoFMN8AX-yXxlD&_nc_ht=scontent.fabj4-1.fna&oh=d47e81480a2ea39c60879bd70171af2c&oe=61633C0E" 
                    name="Joel Codjo"/>
                    <Contact image="https://scontent.fabj4-1.fna.fbcdn.net/v/t1.6435-9/67847152_106574007368149_8770265107524485120_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1k8fW-YIxaYAX_QWiTq&tn=FesVdmd3mXgeoIsz&_nc_ht=scontent.fabj4-1.fna&oh=cab2a576283b5395dd4a9daff6b5ba5a&oe=6165CFC0" 
                    name="Abdoulaye Diallo"/>
                    <Contact 
                    image="https://scontent.fabj4-1.fna.fbcdn.net/v/t1.6435-9/223826822_921414928807449_7613000517532263499_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dwQUhjpCXIYAX9VIr03&_nc_ht=scontent.fabj4-1.fna&oh=f04eee84055fc5267202e266176b2453&oe=616334C2" 
                    name="Moubarack Sakibou"/>
                    <Contact 
                    image="https://scontent.fabj4-1.fna.fbcdn.net/v/t1.6435-9/39737161_528391007615638_3170060282516996096_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=gLkYyuHhOAwAX-isCul&_nc_ht=scontent.fabj4-1.fna&oh=d98050112f6049469ed0fe1a22fd0d6d&oe=6165D0E7" 
                    name="Elisée Houesse"/>
                    <Contact 
                    image="https://scontent.fabj4-1.fna.fbcdn.net/v/t1.6435-9/239079861_2685529205077596_6437065088755833990_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BJuYgo6ElBYAX9z_L5J&tn=FesVdmd3mXgeoIsz&_nc_ht=scontent.fabj4-1.fna&oh=a28bd5edbc82839ae1959b97a4af43f2&oe=61650147" 
                    name="Saleh Annour Abdou"/>
                    <Contact 
                    image="https://scontent.fabj4-1.fna.fbcdn.net/v/t1.6435-9/223413992_2197685890367873_4889554395564346473_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iopomAbjSi4AX9vZ1Ou&_nc_ht=scontent.fabj4-1.fna&oh=b6885e3e74ac2545d828b34ae15bc41b&oe=616314E5" 
                    name="Fernand Hinvi"/>
                    <Contact image="" name="Djamal Dine"/>
                    <Contact image="" name="Abdoul Raouf"/>
                    

                </div>
                <VideoCallIcon />
                <SearchIcon />
                <MoreHorizIcon />


            </div>
            


            
        </div>
    )
}

export default Widgets
